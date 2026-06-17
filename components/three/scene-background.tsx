"use client"

import dynamic from "next/dynamic"
import { useReducedMotion } from "framer-motion"

const AuroraCanvas = dynamic(() => import("./aurora-canvas"), { ssr: false })

/**
 * Fixed, full-viewport WebGL backdrop mounted behind all content.
 * Skipped entirely when the user prefers reduced motion — the CSS aurora
 * gradient (in globals.css) still provides a static, elegant fallback.
 */
export function SceneBackground() {
  const reduce = useReducedMotion()
  if (reduce) return null

  return (
    <div className="fixed inset-0 z-0 pointer-events-none" aria-hidden>
      <AuroraCanvas />
    </div>
  )
}
