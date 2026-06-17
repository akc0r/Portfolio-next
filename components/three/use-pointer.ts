"use client"

import { useEffect, useRef } from "react"

/**
 * Tracks the global pointer position, normalized to [-1, 1] on each axis.
 * Listens on window so it keeps working even when the WebGL canvas has
 * `pointer-events: none` (background scene that must not block clicks).
 */
export function usePointer() {
  const pointer = useRef({ x: 0, y: 0 })

  useEffect(() => {
    const onMove = (e: PointerEvent) => {
      pointer.current.x = (e.clientX / window.innerWidth) * 2 - 1
      pointer.current.y = -(e.clientY / window.innerHeight) * 2 + 1
    }
    window.addEventListener("pointermove", onMove, { passive: true })
    return () => window.removeEventListener("pointermove", onMove)
  }, [])

  return pointer
}
