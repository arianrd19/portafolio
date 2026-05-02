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
  // Por seguridad arrancamos en true. El efecto decidirá si lo oculta para animar.
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const el = ref.current;
    if (!el || typeof window === "undefined") return;

    const reduceMotion = window.matchMedia?.("(prefers-reduced-motion: reduce)").matches;
    if (reduceMotion || typeof IntersectionObserver === "undefined") {
      setVisible(true);
      return;
    }

    const rect = el.getBoundingClientRect();
    const viewportH = window.innerHeight || document.documentElement.clientHeight;
    const inViewport = rect.top < viewportH && rect.bottom > 0;

    if (inViewport) {
      // Ya visible → no animamos, lo dejamos mostrado.
      setVisible(true);
      return;
    }

    // Está fuera del viewport: lo ocultamos para luego animarlo al entrar.
    setVisible(false);

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
      { threshold, rootMargin },
    );
    obs.observe(el);

    // Failsafe: si en 1s nada disparó, mostrar igualmente
    const failsafe = window.setTimeout(() => setVisible(true), 1000);

    return () => {
      obs.disconnect();
      window.clearTimeout(failsafe);
    };
  }, [threshold, rootMargin, repeat]);

  return { ref, visible };
}
