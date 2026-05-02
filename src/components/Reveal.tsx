import { type HTMLAttributes, type ElementType } from "react";
import { useReveal } from "@/hooks/use-reveal";

type Props = HTMLAttributes<HTMLElement> & {
  /** Etiqueta HTML a renderizar (div por defecto) */
  as?: ElementType;
  /** Delay manual en ms */
  delay?: number;
  /** Índice (0-based) para delays escalonados automáticos cuando se mapea una lista */
  index?: number;
  /** Paso en ms entre items consecutivos (usado con `index`). Por defecto 90ms. */
  delayStep?: number;
  /** Umbral de visibilidad (0–1) */
  threshold?: number;
  /** rootMargin del IntersectionObserver */
  rootMargin?: string;
  /** Si true, repite la animación al volver a entrar en viewport */
  repeat?: boolean;
};

export function Reveal({
  as: Tag = "div",
  delay,
  index,
  delayStep = 90,
  threshold,
  rootMargin,
  repeat,
  className = "",
  style,
  children,
  ...rest
}: Props) {
  const { ref, visible } = useReveal<HTMLElement>({ threshold, rootMargin, repeat });

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
