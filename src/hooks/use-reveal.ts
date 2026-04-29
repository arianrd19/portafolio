import { useEffect, useRef, useState } from "react";

type Options = {
  /** 0–1, qué porción debe ser visible para activarse */
  threshold?: number;
  /** rootMargin del IntersectionObserver */
  rootMargin?: string;
  /** Si true, vuelve a ocultarse al salir del viewport (por defecto false: una vez visto, queda) */
  repeat?: boolean;
};

export function useReveal<T extends HTMLElement = HTMLDivElement>({
  threshold = 0.15,
  rootMargin = "0px 0px -60px 0px",
  repeat = false,
}: Options = {}) {
  const ref = useRef<T | null>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    // SSR / entornos sin window
    if (typeof window === "undefined") return;

    // Respeta prefers-reduced-motion: mostramos inmediatamente
    const reduceMotion = window.matchMedia?.("(prefers-reduced-motion: reduce)").matches;
    if (reduceMotion) {
      setVisible(true);
      return;
    }

    // Fallback si el navegador no soporta IntersectionObserver
    if (typeof IntersectionObserver === "undefined") {
      setVisible(true);
      return;
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
    return () => obs.disconnect();
  }, [threshold, rootMargin, repeat]);

  return { ref, visible };
}
