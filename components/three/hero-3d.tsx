"use client"

import { useEffect, useState } from "react"
import dynamic from "next/dynamic"
import { useReducedMotion } from "framer-motion"

function HeroOrb({ pulse = false }: { pulse?: boolean }) {
  return (
    <div className="w-full h-full flex items-center justify-center">
      <div
        className={`w-3/5 aspect-square rounded-full bg-gradient-to-br from-primary via-tertiary to-accent blur-2xl opacity-60 ${
          pulse ? "animate-pulse-glow" : ""
        }`}
      />
    </div>
  )
}

const HeroCanvas = dynamic(() => import("./hero-canvas"), {
  ssr: false,
  loading: () => <HeroOrb pulse />,
})

/**
 * Interactive 3D hero centerpiece. Only mounts the WebGL canvas on desktop
 * (≥768px) and when motion is allowed — elsewhere it shows a static gradient
 * orb, avoiding wasted GPU/battery on phones where the column is hidden.
 */
export function Hero3D() {
  const reduce = useReducedMotion()
  const [isDesktop, setIsDesktop] = useState(false)

  useEffect(() => {
    const mq = window.matchMedia("(min-width: 768px)")
    const update = () => setIsDesktop(mq.matches)
    update()
    mq.addEventListener("change", update)
    return () => mq.removeEventListener("change", update)
  }, [])

  if (reduce || !isDesktop) {
    return <HeroOrb />
  }

  return <HeroCanvas />
}
