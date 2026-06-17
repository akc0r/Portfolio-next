"use client"

import { useEffect, useState } from "react"

/**
 * Returns the id of the section currently dominating the viewport, using an
 * IntersectionObserver (decoupled from the scroll source). `ids` must be a
 * stable reference (e.g. a module-level constant) to avoid re-subscribing.
 */
export function useActiveSection(ids: string[]): string {
  const [active, setActive] = useState(ids[0] ?? "")

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)
        if (visible[0]) setActive((visible[0].target as HTMLElement).id)
      },
      { threshold: [0.25, 0.5, 0.75], rootMargin: "-20% 0px -20% 0px" },
    )

    const els = ids
      .map((id) => document.getElementById(id))
      .filter((el): el is HTMLElement => el !== null)
    els.forEach((el) => observer.observe(el))

    return () => observer.disconnect()
  }, [ids])

  return active
}
