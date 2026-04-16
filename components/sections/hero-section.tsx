"use client"

import { motion } from "framer-motion"
import { Download, Mail, ChevronDown, MapPin, Github, Linkedin, Twitter } from "lucide-react"
import { useLanguage } from "@/contexts/language-context"
import personalData from "@/data/personal.json"
import navigationData from "@/data/navigation.json"

const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  github: Github,
  linkedin: Linkedin,
  twitter: Twitter,
}

// Abstract geometric illustration — professional engineering aesthetic
function AbstractIllustration() {
  const primaryLines = [
    { x1: 200, y1: 200, x2: 300, y2: 120, delay: 0.3 },
    { x1: 200, y1: 200, x2: 100, y2: 130, delay: 0.4 },
    { x1: 200, y1: 200, x2: 320, y2: 250, delay: 0.5 },
    { x1: 200, y1: 200, x2: 110, y2: 290, delay: 0.6 },
    { x1: 200, y1: 200, x2: 250, y2: 330, delay: 0.7 },
    { x1: 200, y1: 200, x2: 150, y2: 80, delay: 0.35 },
  ]

  const outerNodes = [
    { cx: 300, cy: 120, r: 4, delay: 0.6 },
    { cx: 100, cy: 130, r: 3.5, delay: 0.7 },
    { cx: 320, cy: 250, r: 3, delay: 0.8 },
    { cx: 110, cy: 290, r: 4, delay: 0.9 },
    { cx: 250, cy: 330, r: 3.5, delay: 1.0 },
    { cx: 150, cy: 80, r: 3, delay: 0.65 },
  ]

  const secondaryLines = [
    { x1: 300, y1: 120, x2: 320, y2: 250, delay: 1.0 },
    { x1: 100, y1: 130, x2: 150, y2: 80, delay: 1.1 },
    { x1: 110, y1: 290, x2: 250, y2: 330, delay: 1.2 },
  ]

  const endpointDrift = [
    { dx: 2.6, dy: -1.8 },
    { dx: -2.2, dy: 1.6 },
    { dx: 2.8, dy: 1.4 },
    { dx: -2.4, dy: -1.8 },
    { dx: 2.1, dy: 2.0 },
    { dx: -2.0, dy: -1.5 },
  ]

  const secondaryPairs = [
    { from: 0, to: 2 },
    { from: 1, to: 5 },
    { from: 3, to: 4 },
  ]

  return (
    <div className="relative w-full h-full">
      {/* Subtle background glow */}
      <div className="absolute inset-0 bg-primary/10 rounded-full blur-3xl opacity-50" />
      
      <svg
        viewBox="0 0 400 400"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="w-full h-full relative z-10"
      >
        {/* Concentric circles — precision engineering feel */}
        <motion.circle
          cx="200" cy="200" r="150"
          stroke="var(--primary)"
          strokeWidth="0.5"
          strokeOpacity="0.2"
          fill="none"
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: [1, 1.03, 1], opacity: [0.45, 0.85, 0.45] }}
          transition={{ duration: 8, delay: 0.2, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.circle
          cx="200" cy="200" r="120"
          stroke="var(--primary)"
          strokeWidth="0.5"
          strokeOpacity="0.15"
          fill="none"
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: [1, 1.025, 1], opacity: [0.35, 0.7, 0.35] }}
          transition={{ duration: 7.5, delay: 0.35, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.circle
          cx="200" cy="200" r="90"
          stroke="var(--primary)"
          strokeWidth="0.5"
          strokeOpacity="0.1"
          fill="none"
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: [1, 1.02, 1], opacity: [0.3, 0.6, 0.3] }}
          transition={{ duration: 7, delay: 0.5, repeat: Infinity, ease: "easeInOut" }}
        />

        {/* Central node */}
        <motion.circle
          cx="200" cy="200" r="6"
          fill="var(--primary)"
          initial={{ scale: 0 }}
          animate={{ scale: [1, 1.25, 1], opacity: [0.7, 1, 0.7] }}
          transition={{ delay: 0.5, duration: 2.6, repeat: Infinity, ease: "easeInOut" }}
        />

        {/* Pulse rings from center to simulate traffic bursts */}
        {[0, 0.8, 1.6].map((delay, i) => (
          <motion.circle
            key={`pulse-${i}`}
            cx="200"
            cy="200"
            r="14"
            stroke="var(--accent)"
            strokeWidth="0.8"
            strokeOpacity="0.35"
            fill="none"
            initial={{ scale: 0.5, opacity: 0 }}
            animate={{ scale: [0.5, 2.8], opacity: [0.6, 0] }}
            transition={{ duration: 2.4, delay, repeat: Infinity, ease: "easeOut" }}
          />
        ))}

        {/* Connection lines — network/architecture feel */}
        {primaryLines.map((line, i) => {
          const drift = endpointDrift[i]

          return (
            <motion.line
              key={i}
              x1={line.x1}
              y1={line.y1}
              x2={line.x2}
              y2={line.y2}
              stroke="var(--primary)"
              strokeWidth="1.35"
              strokeOpacity="0.26"
              initial={{ pathLength: 0 }}
              animate={{
                pathLength: [0, 1, 1],
                opacity: [0, 0.55, 0.28],
                x2: [line.x2 - drift.dx, line.x2 + drift.dx, line.x2 - drift.dx],
                y2: [line.y2 - drift.dy, line.y2 + drift.dy, line.y2 - drift.dy],
              }}
              transition={{
                delay: line.delay,
                duration: 4.2,
                repeat: Infinity,
                repeatDelay: 0.6,
                ease: "easeInOut",
              }}
            />
          )
        })}

        {/* Outer nodes — distributed system visualization */}
        {outerNodes.map((node, i) => {
          const drift = endpointDrift[i]

          return (
            <motion.circle
              key={i}
              cx={node.cx}
              cy={node.cy}
              r={node.r}
              fill="var(--primary)"
              fillOpacity="0.72"
              initial={{ scale: 0, opacity: 0 }}
              animate={{
                cx: [node.cx - drift.dx, node.cx + drift.dx, node.cx - drift.dx],
                cy: [node.cy - drift.dy, node.cy + drift.dy, node.cy - drift.dy],
                scale: [0.95, 1.22, 0.98],
                opacity: [0.55, 1, 0.74],
              }}
              transition={{
                delay: node.delay,
                duration: 3.4 + i * 0.2,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            />
          )
        })}

        {/* Secondary connections — mesh network */}
        {secondaryLines.map((line, i) => {
          const pair = secondaryPairs[i]
          const fromDrift = endpointDrift[pair.from]
          const toDrift = endpointDrift[pair.to]

          return (
            <motion.line
              key={`secondary-${i}`}
              x1={line.x1}
              y1={line.y1}
              x2={line.x2}
              y2={line.y2}
              stroke="var(--primary)"
              strokeWidth="0.9"
              strokeOpacity="0.12"
              strokeDasharray="4 4"
              initial={{ pathLength: 0, strokeDashoffset: 12 }}
              animate={{
                pathLength: [0, 1, 1],
                strokeDashoffset: [12, 0, -12],
                opacity: [0, 0.3, 0.14],
                x1: [line.x1 - fromDrift.dx, line.x1 + fromDrift.dx, line.x1 - fromDrift.dx],
                y1: [line.y1 - fromDrift.dy, line.y1 + fromDrift.dy, line.y1 - fromDrift.dy],
                x2: [line.x2 - toDrift.dx, line.x2 + toDrift.dx, line.x2 - toDrift.dx],
                y2: [line.y2 - toDrift.dy, line.y2 + toDrift.dy, line.y2 - toDrift.dy],
              }}
              transition={{ delay: line.delay, duration: 4.8, repeat: Infinity, ease: "linear" }}
            />
          )
        })}

        {/* Dual rotating arcs add long-running ambient motion */}
        <motion.circle
          cx="200" cy="200" r="170"
          stroke="var(--primary)"
          strokeWidth="1.5"
          strokeOpacity="0.1"
          strokeDasharray="20 300"
          fill="none"
          animate={{ rotate: 360 }}
          transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
          style={{ transformOrigin: "200px 200px" }}
        />

        <motion.circle
          cx="200" cy="200" r="142"
          stroke="var(--accent)"
          strokeWidth="1"
          strokeOpacity="0.16"
          strokeDasharray="12 220"
          fill="none"
          animate={{ rotate: -360 }}
          transition={{ duration: 22, repeat: Infinity, ease: "linear" }}
          style={{ transformOrigin: "200px 200px" }}
        />
      </svg>
    </div>
  )
}

export function HeroSection() {
  const { t } = useLanguage()

  return (
    <section id="hero" className="min-h-screen flex items-center justify-center relative pt-24 pb-16 px-6">
      <div className="max-w-6xl mx-auto w-full relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left side - Content */}
          <div className="text-center lg:text-left">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass text-sm text-muted-foreground mb-6"
            >
              <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
              {t({ fr: "Disponible pour de nouvelles opportunites", en: "Available for new opportunities" })}
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1, duration: 0.5 }}
              className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 tracking-tight text-balance"
            >
              {personalData.personal.name.split(" ").map((word, i) => (
                <span key={i}>
                  {i === 0 ? (
                    <span className="text-foreground">{word} </span>
                  ) : (
                    <span className="text-primary">{word}</span>
                  )}
                </span>
              ))}
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.5 }}
              className="text-xl md:text-2xl text-muted-foreground font-medium mb-2"
            >
              {t(personalData.personal.title)}
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.25, duration: 0.5 }}
              className="flex items-center gap-2 text-muted-foreground mb-6 justify-center lg:justify-start"
            >
              <MapPin className="w-4 h-4" />
              <span className="text-sm">{personalData.personal.location}</span>
            </motion.div>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.5 }}
              className="text-muted-foreground mb-8 max-w-lg mx-auto lg:mx-0 text-pretty"
            >
              {t(personalData.personal.tagline)}
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.5 }}
              className="flex flex-wrap items-center justify-center lg:justify-start gap-4 mb-8"
            >
              <a
                href={personalData.personal.cvUrl}
                download
                className="group flex items-center gap-2 px-6 py-3 rounded-xl bg-primary text-primary-foreground font-medium hover:scale-105 transition-all glow-sm"
              >
                <Download className="w-5 h-5 group-hover:animate-bounce" />
                {t(navigationData.ui.downloadCv)}
              </a>
              <a
                href={`mailto:${personalData.personal.email}`}
                className="group flex items-center gap-2 px-6 py-3 rounded-xl glass hover:glass-strong transition-all font-medium"
              >
                <Mail className="w-5 h-5" />
                {t(navigationData.ui.contactMe)}
              </a>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5, duration: 0.5 }}
              className="flex items-center justify-center lg:justify-start gap-3"
            >
              {personalData.personal.contacts.map((contact) => {
                const Icon = iconMap[contact.icon]
                return (
                  <a
                    key={contact.label}
                    href={contact.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-11 h-11 rounded-xl glass flex items-center justify-center text-muted-foreground hover:text-primary hover:scale-110 transition-all"
                    aria-label={contact.label}
                  >
                    {Icon && <Icon className="w-5 h-5" />}
                  </a>
                )
              })}
            </motion.div>
          </div>

          {/* Right side - Abstract illustration */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.3, duration: 0.6, type: "spring" }}
            className="hidden lg:flex items-center justify-center"
          >
            <div className="relative w-72 h-72 lg:w-80 lg:h-80 xl:w-96 xl:h-96">
              <AbstractIllustration />
            </div>
          </motion.div>
        </div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 0.5 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2"
        >
          <motion.a
            href="#about"
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="flex flex-col items-center gap-2 text-muted-foreground hover:text-primary transition-colors"
          >
            <span className="text-xs font-mono uppercase tracking-wider">
              {t({ fr: "Defiler", en: "Scroll" })}
            </span>
            <ChevronDown className="w-5 h-5" />
          </motion.a>
        </motion.div>
      </div>
    </section>
  )
}
