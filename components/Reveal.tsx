"use client";

import * as React from "react";
import { Slot } from "@radix-ui/react-slot";

import { cn } from "@/lib/utils";
import { useInView } from "@/hooks/use-in-view";

interface RevealProps extends React.HTMLAttributes<HTMLDivElement> {
  asChild?: boolean;
  delay?: number;
  offset?: number;
  once?: boolean;
}

export function Reveal({
  asChild = false,
  children,
  className,
  style,
  delay = 0,
  offset = 32,
  once = true,
  ...props
}: RevealProps) {
  const { ref, inView } = useInView<HTMLDivElement>({ threshold: 0.18, once });
  const Comp = asChild ? Slot : "div";

  return (
    <Comp
      ref={ref}
      className={cn(
        "will-change-transform motion-reduce:transition-none motion-reduce:opacity-100",
        className,
      )}
      style={{
        opacity: inView ? 1 : 0,
        transform: inView ? "translateY(0px)" : `translateY(${offset}px)`,
        transitionProperty: "opacity, transform",
        transitionDuration: "700ms",
        transitionTimingFunction: "cubic-bezier(0.16, 1, 0.3, 1)",
        transitionDelay: `${delay}ms`,
        ...style,
      }}
      {...props}
    >
      {children}
    </Comp>
  );
}
