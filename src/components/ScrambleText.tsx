import { useEffect, useRef, useState } from "react";

type Props = {
  text: string;
  delay?: number;
  duration?: number;
  className?: string;
  as?: keyof React.JSX.IntrinsicElements;
};

const CHARS = "ABCDEFGHJKLMNOPRSTUVXYZ0123456789+-=*#&%";

export function ScrambleText({
  text,
  delay = 0,
  duration = 900,
  className,
  as: Tag = "span",
}: Props) {
  const [output, setOutput] = useState(text);
  const rafRef = useRef<number | null>(null);
  const startedRef = useRef(false);

  useEffect(() => {
    if (typeof window === "undefined") return;
    const reduce = window.matchMedia?.("(prefers-reduced-motion: reduce)").matches;
    if (reduce) {
      setOutput(text);
      return;
    }

    startedRef.current = false;
    setOutput(
      text
        .split("")
        .map((c) => (c === " " ? " " : CHARS[Math.floor(Math.random() * CHARS.length)]))
        .join(""),
    );

    const startTimer = window.setTimeout(() => {
      startedRef.current = true;
      const start = performance.now();
      const chars = text.split("");
      // Each char locks in at a staggered point in time
      const lockTimes = chars.map(
        (_, i) => (i / chars.length) * duration * 0.7 + Math.random() * (duration * 0.3),
      );

      const tick = (now: number) => {
        const elapsed = now - start;
        let allLocked = true;
        const next = chars
          .map((c, i) => {
            if (c === " ") return " ";
            if (elapsed >= lockTimes[i]) return c;
            allLocked = false;
            return CHARS[Math.floor(Math.random() * CHARS.length)];
          })
          .join("");
        setOutput(next);
        if (!allLocked) {
          rafRef.current = requestAnimationFrame(tick);
        } else {
          setOutput(text);
        }
      };
      rafRef.current = requestAnimationFrame(tick);
    }, delay);

    return () => {
      window.clearTimeout(startTimer);
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
    };
  }, [text, delay, duration]);

  return <Tag className={className}>{output}</Tag>;
}
