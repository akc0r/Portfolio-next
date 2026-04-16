"use client"

import { useEffect, useState } from "react"
import { motion } from "framer-motion"
import { useTheme } from "@/contexts/theme-context"

interface Star {
  id: number
  x: number
  y: number
  size: number
  delay: number
  duration: number
}

export function StarField() {
  const [stars, setStars] = useState<Star[]>([])
  const [mounted, setMounted] = useState(false)
  const { theme } = useTheme()

  useEffect(() => {
    setMounted(true)
    const generateStars = () => {
      const newStars: Star[] = []
      const count = 80
      for (let i = 0; i < count; i++) {
        newStars.push({
          id: i,
          x: Math.random() * 100,
          y: Math.random() * 100,
          size: Math.random() * 2 + 1,
          delay: Math.random() * 5,
          duration: Math.random() * 3 + 2,
        })
      }
      setStars(newStars)
    }
    generateStars()
  }, [])

  if (!mounted) {
    return null
  }

  if (theme === "light") {
    return null
  }

  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden z-0">
      {stars.map((star) => (
        <motion.div
          key={star.id}
          className="absolute rounded-full"
          style={{
            left: `${star.x}%`,
            top: `${star.y}%`,
            width: star.size,
            height: star.size,
            backgroundColor: "var(--star-color)",
          }}
          animate={{
            opacity: [0.2, 0.8, 0.2],
            scale: [1, 1.3, 1],
          }}
          transition={{
            duration: star.duration,
            delay: star.delay,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      ))}
      
      {/* Shooting stars */}
      <motion.div
        className="absolute w-1 h-1 bg-primary rounded-full"
        style={{ top: "10%", left: "100%" }}
        animate={{
          x: [0, -1500],
          y: [0, 400],
          opacity: [0, 1, 1, 0],
        }}
        transition={{
          duration: 2,
          repeat: Infinity,
          repeatDelay: 8,
          ease: "linear",
        }}
      >
        <div className="absolute top-0 right-0 w-20 h-[1px] bg-gradient-to-r from-transparent to-primary/50 -translate-x-full" />
      </motion.div>

      <motion.div
        className="absolute w-1 h-1 bg-accent rounded-full"
        style={{ top: "30%", left: "100%" }}
        animate={{
          x: [0, -1200],
          y: [0, 300],
          opacity: [0, 1, 1, 0],
        }}
        transition={{
          duration: 1.5,
          repeat: Infinity,
          repeatDelay: 12,
          delay: 5,
          ease: "linear",
        }}
      >
        <div className="absolute top-0 right-0 w-16 h-[1px] bg-gradient-to-r from-transparent to-accent/50 -translate-x-full" />
      </motion.div>
    </div>
  )
}
