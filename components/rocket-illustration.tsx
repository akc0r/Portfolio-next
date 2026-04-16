"use client"

import { motion } from "framer-motion"

export function RocketIllustration({ className = "" }: { className?: string }) {
  return (
    <div className={`relative ${className}`}>
      <motion.svg
        viewBox="0 0 100 200"
        className="w-full h-full"
        initial={{ y: 10 }}
        animate={{ y: [10, 0, 10] }}
        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
      >
        {/* Rocket body */}
        <defs>
          <linearGradient id="rocketBody" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="oklch(0.95 0.01 250)" />
            <stop offset="50%" stopColor="oklch(0.98 0.005 250)" />
            <stop offset="100%" stopColor="oklch(0.90 0.01 250)" />
          </linearGradient>
          <linearGradient id="rocketNose" x1="0%" y1="100%" x2="0%" y2="0%">
            <stop offset="0%" stopColor="oklch(0.95 0.01 250)" />
            <stop offset="100%" stopColor="oklch(0.75 0.16 45)" />
          </linearGradient>
          <linearGradient id="flame1" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="oklch(0.75 0.16 45)" />
            <stop offset="50%" stopColor="oklch(0.65 0.20 30)" />
            <stop offset="100%" stopColor="oklch(0.50 0.15 25 / 0)" />
          </linearGradient>
          <linearGradient id="flame2" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="oklch(0.90 0.15 60)" />
            <stop offset="100%" stopColor="oklch(0.75 0.16 45 / 0)" />
          </linearGradient>
        </defs>

        {/* Main body */}
        <rect x="35" y="50" width="30" height="80" rx="3" fill="url(#rocketBody)" />
        
        {/* Nose cone */}
        <path d="M35 50 L50 10 L65 50 Z" fill="url(#rocketNose)" />
        
        {/* Window */}
        <circle cx="50" cy="70" r="8" fill="oklch(0.20 0.03 250)" stroke="oklch(0.70 0.02 250)" strokeWidth="2" />
        <circle cx="50" cy="70" r="5" fill="oklch(0.30 0.10 200)" />
        <ellipse cx="48" cy="68" rx="2" ry="1.5" fill="oklch(0.50 0.10 200 / 0.5)" />
        
        {/* Stripe */}
        <rect x="35" y="95" width="30" height="8" fill="oklch(0.75 0.16 45)" />
        
        {/* Fins */}
        <path d="M35 115 L20 145 L35 130 Z" fill="oklch(0.75 0.16 45)" />
        <path d="M65 115 L80 145 L65 130 Z" fill="oklch(0.75 0.16 45)" />
        <path d="M45 130 L50 150 L55 130 Z" fill="oklch(0.65 0.14 30)" />
        
        {/* Engine nozzle */}
        <rect x="40" y="130" width="20" height="8" fill="oklch(0.30 0.02 250)" />
        <rect x="42" y="138" width="16" height="5" fill="oklch(0.25 0.02 250)" />
      </motion.svg>

      {/* Animated flame */}
      <motion.div
        className="absolute bottom-0 left-1/2 -translate-x-1/2 w-8"
        style={{ bottom: "-20%" }}
      >
        <motion.svg
          viewBox="0 0 40 60"
          className="w-full"
          animate={{ scaleY: [1, 1.2, 0.9, 1.1, 1] }}
          transition={{ duration: 0.3, repeat: Infinity }}
        >
          <ellipse cx="20" cy="10" rx="10" ry="30" fill="url(#flame1)" />
          <ellipse cx="20" cy="5" rx="6" ry="20" fill="url(#flame2)" />
        </motion.svg>
      </motion.div>

      {/* Particles */}
      {[...Array(5)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute w-1 h-1 bg-primary/60 rounded-full"
          style={{
            bottom: "-30%",
            left: `${45 + Math.random() * 10}%`,
          }}
          animate={{
            y: [0, 40],
            x: [(Math.random() - 0.5) * 20, (Math.random() - 0.5) * 40],
            opacity: [1, 0],
            scale: [1, 0.5],
          }}
          transition={{
            duration: 0.8,
            repeat: Infinity,
            delay: i * 0.15,
            ease: "easeOut",
          }}
        />
      ))}
    </div>
  )
}
