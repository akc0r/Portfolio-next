"use client"

import type { ReactNode } from "react"
import { motion, useReducedMotion } from "framer-motion"

interface ScreenProps {
  children: ReactNode
  /** Plain mode: just a snap target with no full-height/3D treatment (hero, footer). */
  plain?: boolean
}

/**
 * A full-viewport snap panel. Its content tilts and fades through 3D space as
 * the panel enters and leaves the viewport, giving each "screen" a cinematic
 * transition. Honors reduced motion (renders flat) — and CSS disables snap too.
 */
export function Screen({ children, plain = false }: ScreenProps) {
  const reduce = useReducedMotion()

  if (plain) {
    return <div className="snap-start relative z-10">{children}</div>
  }

  return (
    <div
      className="snap-start relative z-10 flex min-h-dvh w-full items-center justify-center"
      style={{ perspective: 1200 }}
    >
      {reduce ? (
        <div className="w-full">{children}</div>
      ) : (
        <motion.div
          className="w-full"
          initial={{ opacity: 0, rotateX: 8, y: 60, scale: 0.96 }}
          whileInView={{ opacity: 1, rotateX: 0, y: 0, scale: 1 }}
          // "some": triggers as soon as any part enters — robust even for
          // sections far taller than the viewport (projects/skills on mobile).
          viewport={{ amount: "some", once: false }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
        >
          {children}
        </motion.div>
      )}
    </div>
  )
}
