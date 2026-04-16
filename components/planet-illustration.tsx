"use client"

import { motion } from "framer-motion"
import { useEffect, useState } from "react"

export function PlanetIllustration({ className }: { className?: string }) {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) {
    return <div className={`w-full h-full ${className}`} />
  }

  return (
    <div className={`relative ${className}`}>
      {/* Background glow */}
      <div className="absolute inset-0 bg-primary/20 rounded-full blur-3xl animate-pulse" />
      
      <svg
        viewBox="0 0 200 200"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="w-full h-full relative z-10 overflow-visible"
      >
        {/* Main Planet Body */}
        <defs>
          <linearGradient id="planetGradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="var(--primary)" stopOpacity="0.8" />
            <stop offset="100%" stopColor="var(--accent)" stopOpacity="0.6" />
          </linearGradient>
          <filter id="planetShadow">
            <feDropShadow dx="0" dy="0" stdDeviation="5" floodColor="var(--primary)" floodOpacity="0.5" />
          </filter>
        </defs>

        <motion.circle
          cx="100"
          cy="100"
          r="60"
          fill="url(#planetGradient)"
          filter="url(#planetShadow)"
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 1, ease: "easeOut" }}
        />

        {/* Planet Surface Details (Craters/Texture) */}
        <circle cx="80" cy="80" r="8" fill="white" fillOpacity="0.1" />
        <circle cx="130" cy="110" r="12" fill="white" fillOpacity="0.1" />
        <circle cx="90" cy="140" r="6" fill="white" fillOpacity="0.1" />

        {/* Orbiting Rings */}
        <motion.ellipse
          cx="100"
          cy="100"
          rx="120"
          ry="40"
          stroke="var(--primary)"
          strokeWidth="1.5"
          strokeOpacity="0.3"
          initial={{ rotate: -20, opacity: 0 }}
          animate={{ rotate: -20, opacity: 1 }}
          transition={{ delay: 0.5, duration: 1 }}
          className="pointer-events-none"
        />
        
        <motion.ellipse
          cx="100"
          cy="100"
          rx="160"
          ry="60"
          stroke="var(--accent)"
          strokeWidth="1"
          strokeOpacity="0.15"
          initial={{ rotate: 15, opacity: 0 }}
          animate={{ rotate: 15, opacity: 1 }}
          transition={{ delay: 0.7, duration: 1 }}
          className="pointer-events-none"
        />

        {/* Moon/Satellite orbiting on the first ring */}
        <motion.circle
          r="4"
          fill="var(--primary)"
          animate={{
            cx: Array.from({ length: 21 }, (_, i) => 100 + 120 * Math.cos((i / 20) * 2 * Math.PI)),
            cy: Array.from({ length: 21 }, (_, i) => 100 + 40 * Math.sin((i / 20) * 2 * Math.PI)),
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "linear",
          }}
          className="glow-sm"
        />

        {/* Another Moon on the second ring */}
        <motion.circle
          r="3"
          fill="var(--accent)"
          animate={{
            cx: Array.from({ length: 21 }, (_, i) => 100 + 160 * Math.cos((i / 20) * 2 * Math.PI + Math.PI)),
            cy: Array.from({ length: 21 }, (_, i) => 100 + 60 * Math.sin((i / 20) * 2 * Math.PI + Math.PI)),
          }}
          transition={{
            duration: 30,
            repeat: Infinity,
            ease: "linear",
          }}
        />
      </svg>
      
      {/* Absolute positioned particles around the planet */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {[...Array(8)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-primary rounded-full shadow-[0_0_8px_var(--primary)]"
            initial={{ 
              x: "50%", 
              y: "50%", 
              opacity: 0 
            }}
            animate={{ 
              x: [`${50 + (i % 2 === 0 ? 1 : -1) * (15 + i % 4 * 10)}%`, `${50 + (i % 2 === 0 ? -1 : 1) * (20 + i % 3 * 15)}%`],
              y: [`${50 + (i < 4 ? 1 : -1) * (10 + i * 5)}%`, `${50 + (i < 4 ? -1 : 1) * (15 + i * 8)}%`],
              opacity: [0, 0.8, 0]
            }}
            transition={{
              duration: 4 + i % 3 * 2,
              repeat: Infinity,
              delay: i * 0.5,
              ease: "easeInOut"
            }}
          />
        ))}
      </div>
    </div>
  )
}
