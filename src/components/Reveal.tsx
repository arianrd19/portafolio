import { type HTMLAttributes, type ElementType } from "react";
import { useReveal } from "@/hooks/use-reveal";

type Props = HTMLAttributes<HTMLElement> & {
  as?: ElementType;
  delay?: number;
};

export function Reveal({ as: Tag = "div", delay = 0, className = "", style, children, ...rest }: Props) {
  const { ref, visible } = useReveal<HTMLElement>();
  return (
    <Tag
      ref={ref as never}
      className={`reveal ${visible ? "reveal-in" : ""} ${className}`}
      style={{ transitionDelay: `${delay}ms`, ...style }}
      {...rest}
    >
      {children}
    </Tag>
  );
}
