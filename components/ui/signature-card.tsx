"use client"

import { useRef, type ReactNode, type PointerEvent, type CSSProperties } from "react"
import { motion, useMotionValue, useSpring, useTransform, useReducedMotion } from "framer-motion"

type AccentKey = "primary" | "accent" | "tertiary"

const ACCENT: Record<AccentKey, string> = {
  primary: "var(--primary)",
  accent: "var(--accent)",
  tertiary: "var(--tertiary)",
}

interface SignatureCardProps {
  children: ReactNode
  className?: string
  /** Hue used by the spotlight, border glow and corner ticks. */
  accent?: AccentKey
  /** Optional monospace eyebrow row (label left, index right). */
  label?: string
  index?: number
  /** Max tilt in degrees; set 0 / tilt={false} to disable rotation. */
  intensity?: number
  tilt?: boolean
}

/**
 * The site's signature surface — a technical "console panel" frame that reacts
 * to the cursor: an aurora gradient border that follows the pointer, a soft
 * colored spotlight, a top hairline, diagonal corner ticks, and an optional
 * monospace header. Includes the 3D pointer tilt. Honors reduced motion
 * (keeps the frame, drops the rotation/parallax).
 */
export function SignatureCard({
  children,
  className = "",
  accent = "primary",
  label,
  index,
  intensity = 7,
  tilt = true,
}: SignatureCardProps) {
  const ref = useRef<HTMLDivElement>(null)
  const reduce = useReducedMotion()
  const color = ACCENT[accent]
  const enable3d = tilt && !reduce

  const px = useMotionValue(0.5)
  const py = useMotionValue(0.5)
  const spring = { stiffness: 200, damping: 22, mass: 0.5 }
  const rotateX = useSpring(useTransform(py, [0, 1], [intensity, -intensity]), spring)
  const rotateY = useSpring(useTransform(px, [0, 1], [-intensity, intensity]), spring)

  function handleMove(e: PointerEvent<HTMLDivElement>) {
    const el = ref.current
    if (!el) return
    const r = el.getBoundingClientRect()
    const x = e.clientX - r.left
    const y = e.clientY - r.top
    px.set(x / r.width)
    py.set(y / r.height)
    // Drive the spotlight / border position via raw CSS vars (cheap, no re-render).
    el.style.setProperty("--mx", `${x}px`)
    el.style.setProperty("--my", `${y}px`)
  }

  function handleLeave() {
    px.set(0.5)
    py.set(0.5)
  }

  const rootStyle = {
    "--card-accent": color,
    ...(enable3d
      ? { rotateX, rotateY, transformStyle: "preserve-3d", transformPerspective: 1000 }
      : {}),
  } as unknown as CSSProperties

  const tick = "pointer-events-none absolute w-3.5 h-3.5 opacity-25 transition-all duration-300 group-hover/sig:opacity-90 group-hover/sig:w-5 group-hover/sig:h-5"

  return (
    <motion.div
      ref={ref}
      onPointerMove={handleMove}
      onPointerLeave={handleLeave}
      whileHover={enable3d ? { z: 22 } : undefined}
      transition={spring}
      style={rootStyle}
      className={`group/sig relative ${className}`}
    >
      {/* Glass body (clips the inner glows) */}
      <div className="relative h-full overflow-hidden rounded-[inherit] glass">
        {/* Cursor-follow spotlight fill */}
        <div
          className="pointer-events-none absolute inset-0 rounded-[inherit] opacity-0 transition-opacity duration-300 group-hover/sig:opacity-100"
          style={{
            background:
              "radial-gradient(420px circle at var(--mx, 50%) var(--my, 50%), color-mix(in oklch, var(--card-accent) 16%, transparent), transparent 60%)",
          }}
        />
        {/* Top hairline */}
        <div
          className="pointer-events-none absolute inset-x-0 top-0 h-px opacity-40 transition-opacity duration-300 group-hover/sig:opacity-100"
          style={{ background: "linear-gradient(90deg, transparent, var(--card-accent), transparent)" }}
        />

        <div className="relative z-10 flex h-full flex-col">
          {(label || index !== undefined) && (
            <div className="flex items-center justify-between px-5 pt-4 font-mono text-[10px] uppercase tracking-[0.25em] text-muted-foreground/70">
              <span>{label}</span>
              {index !== undefined && (
                <span style={{ color: "var(--card-accent)" }}>{String(index).padStart(2, "0")}</span>
              )}
            </div>
          )}
          {children}
        </div>
      </div>

      {/* Cursor-follow gradient border (only the 1px ring shows) */}
      <div
        className="pointer-events-none absolute inset-0 rounded-[inherit] opacity-0 transition-opacity duration-300 group-hover/sig:opacity-100"
        style={{
          background:
            "radial-gradient(240px circle at var(--mx, 50%) var(--my, 50%), var(--card-accent), transparent 65%)",
          padding: "1px",
          WebkitMask: "linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)",
          WebkitMaskComposite: "xor",
          maskComposite: "exclude",
        }}
      />

      {/* Diagonal corner ticks (HUD accents) */}
      <span className={`${tick} top-2 left-2 border-t-2 border-l-2 rounded-tl-md`} style={{ borderColor: "var(--card-accent)" }} />
      <span className={`${tick} bottom-2 right-2 border-b-2 border-r-2 rounded-br-md`} style={{ borderColor: "var(--card-accent)" }} />
    </motion.div>
  )
}
