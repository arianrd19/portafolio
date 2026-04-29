import { useEffect, useRef, useState } from "react";

type Options = {
  threshold?: number;
  rootMargin?: string;
  repeat?: boolean;
};

export function useReveal<T extends HTMLElement = HTMLDivElement>({
  threshold = 0.05,
  rootMargin = "0px 0px -40px 0px",
  repeat = false,
}: Options = {}) {
  const ref = useRef<T | null>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    if (typeof window === "undefined") return;

    // Reduced motion → mostrar de inmediato
    const reduceMotion = window.matchMedia?.("(prefers-reduced-motion: reduce)").matches;
    if (reduceMotion) {
      setVisible(true);
      return;
    }

    // Sin IO → mostrar
    if (typeof IntersectionObserver === "undefined") {
      setVisible(true);
      return;
    }

    // Si ya está dentro del viewport al montar, mostrar inmediatamente
    const rect = el.getBoundingClientRect();
    const viewportH = window.innerHeight || document.documentElement.clientHeight;
    if (rect.top < viewportH && rect.bottom > 0) {
      setVisible(true);
      if (!repeat) return;
    }

    const obs = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setVisible(true);
            if (!repeat) obs.unobserve(entry.target);
          } else if (repeat) {
            setVisible(false);
          }
        });
      },
      { threshold, rootMargin }
    );

    obs.observe(el);

    // Failsafe: si tras 600ms nada se disparó, forzar visible
    const failsafe = window.setTimeout(() => setVisible(true), 600);

    return () => {
      obs.disconnect();
      window.clearTimeout(failsafe);
    };
  }, [threshold, rootMargin, repeat]);

  return { ref, visible };
}
