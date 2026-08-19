import { useEffect, useRef, useState, type ElementType, type ReactNode } from "react";

import { cn } from "@/lib/utils";

interface RevealProps {
  children?: ReactNode;
  className?: string;
  /** Atraso de entrada em milissegundos. */
  delay?: number;
  /** Variante de movimento: deslocamento suave ou linha crescendo. */
  variant?: "fade" | "rule";
  as?: ElementType;
}

/**
 * Revela o conteúdo quando ele entra na viewport.
 * A animação é puramente CSS; aqui apenas alternamos o atributo data-visible,
 * o que mantém o markup acessível caso o observer não esteja disponível.
 */
export function Reveal({
  children,
  className,
  delay = 0,
  variant = "fade",
  as,
}: RevealProps) {
  const Tag = (as ?? "div") as ElementType;
  const ref = useRef<HTMLElement | null>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const node = ref.current;
    if (!node || typeof IntersectionObserver === "undefined") {
      setVisible(true);
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            setVisible(true);
            observer.disconnect();
          }
        }
      },
      { threshold: 0.15, rootMargin: "0px 0px -8% 0px" },
    );

    observer.observe(node);
    return () => observer.disconnect();
  }, []);

  return (
    <Tag
      ref={ref}
      data-visible={visible ? "true" : "false"}
      style={delay ? { transitionDelay: `${delay}ms` } : undefined}
      className={cn(variant === "rule" ? "rule-grow" : "reveal", className)}
    >
      {children}
    </Tag>
  );
}
