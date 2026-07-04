import { type HTMLAttributes, type ElementType } from "react";
import { useReveal } from "@/hooks/use-reveal";

type Props = HTMLAttributes<HTMLElement> & {
  as?: ElementType;
  delay?: number;
  index?: number;
  delayStep?: number;
  threshold?: number;
  rootMargin?: string;
};

export function Reveal({
  as: Tag = "div",
  delay,
  index,
  delayStep = 90,
  threshold,
  rootMargin,
  className = "",
  style,
  children,
  ...rest
}: Props) {
  const { ref, visible } = useReveal<HTMLElement>({ threshold, rootMargin });

  // Calcula el delay efectivo: explícito > derivado del índice > 0
  const computedDelay =
    typeof delay === "number" ? delay : typeof index === "number" ? index * delayStep : 0;

  return (
    <Tag
      ref={ref as never}
      data-revealed={visible ? "true" : "false"}
      className={`reveal ${visible ? "reveal-in" : ""} ${className}`}
      style={{ transitionDelay: `${computedDelay}ms`, ...style }}
      {...rest}
    >
      {children}
    </Tag>
  );
}
