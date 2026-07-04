import { useEffect, useRef, useState } from "react";

type Options = {
  threshold?: number;
  rootMargin?: string;
};

export function useReveal<T extends HTMLElement = HTMLDivElement>({
  threshold = 0.05,
  rootMargin = "0px 0px -40px 0px",
}: Options = {}) {
  const ref = useRef<T | null>(null);
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
      setVisible(true);
      return;
    }

    setVisible(false);

    const obs = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setVisible(true);
            obs.unobserve(entry.target);
          }
        });
      },
      { threshold, rootMargin },
    );
    obs.observe(el);

    const failsafe = window.setTimeout(() => setVisible(true), 1000);

    return () => {
      obs.disconnect();
      window.clearTimeout(failsafe);
    };
  }, [threshold, rootMargin]);

  return { ref, visible };
}
