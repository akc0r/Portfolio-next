"use client";

import { useEffect, useRef, useState } from "react";

interface UseInViewOptions {
  rootMargin?: string;
  threshold?: number;
  once?: boolean;
}

export function useInView<T extends HTMLElement = HTMLElement>({
  rootMargin = "0px",
  threshold = 0.2,
  once = true,
}: UseInViewOptions = {}) {
  const elementRef = useRef<T | null>(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const node = elementRef.current;
    if (!node) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true);
          if (once) {
            observer.unobserve(entry.target);
          }
        } else if (!once) {
          setInView(false);
        }
      },
      {
        root: null,
        rootMargin,
        threshold,
      },
    );

    observer.observe(node);

    return () => {
      observer.disconnect();
    };
  }, [rootMargin, threshold, once]);

  return { ref: elementRef, inView };
}
