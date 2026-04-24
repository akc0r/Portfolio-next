"use client"

import { motion } from "framer-motion"
import { Download, Mail, ChevronDown, MapPin } from "lucide-react"
import { useLanguage } from "@/contexts/language-context"
import { contactIconMap } from "@/lib/icons"
import personalData from "@/data/personal.json"
import navigationData from "@/data/navigation.json"

function AbstractIllustration() {
  return (
    <div className="relative w-full h-full">
      <div className="absolute inset-0 bg-primary/10 rounded-full blur-3xl opacity-40" />

      <svg
        viewBox="0 0 400 400"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="w-full h-full relative z-10"
      >
        {/* Concentric circles */}
        {[150, 120, 90].map((r, i) => (
          <motion.circle
            key={r}
            cx="200" cy="200" r={r}
            stroke="var(--primary)"
            strokeWidth="0.5"
            strokeOpacity={0.2 - i * 0.05}
            fill="none"
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 1, delay: 0.2 + i * 0.15 }}
          />
        ))}

        {/* Central node */}
        <motion.circle
          cx="200" cy="200" r="5"
          fill="var(--primary)"
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ delay: 0.5, duration: 0.4 }}
        />

        {/* Connection lines */}
        {[
          { x2: 300, y2: 120 },
          { x2: 100, y2: 130 },
          { x2: 320, y2: 250 },
          { x2: 110, y2: 290 },
          { x2: 250, y2: 330 },
          { x2: 150, y2: 80 },
        ].map((line, i) => (
          <motion.line
            key={i}
            x1="200" y1="200"
            x2={line.x2} y2={line.y2}
            stroke="var(--primary)"
            strokeWidth="1"
            strokeOpacity="0.2"
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{ delay: 0.6 + i * 0.08, duration: 0.8 }}
          />
        ))}

        {/* Outer nodes */}
        {[
          { cx: 300, cy: 120, r: 4 },
          { cx: 100, cy: 130, r: 3.5 },
          { cx: 320, cy: 250, r: 3 },
          { cx: 110, cy: 290, r: 4 },
          { cx: 250, cy: 330, r: 3.5 },
          { cx: 150, cy: 80, r: 3 },
        ].map((node, i) => (
          <motion.circle
            key={i}
            cx={node.cx} cy={node.cy} r={node.r}
            fill="var(--primary)"
            fillOpacity="0.6"
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ delay: 0.8 + i * 0.08, duration: 0.4 }}
          />
        ))}

        {/* Secondary dashed lines */}
        {[
          { x1: 300, y1: 120, x2: 320, y2: 250 },
          { x1: 100, y1: 130, x2: 150, y2: 80 },
          { x1: 110, y1: 290, x2: 250, y2: 330 },
        ].map((line, i) => (
          <motion.line
            key={`s-${i}`}
            x1={line.x1} y1={line.y1}
            x2={line.x2} y2={line.y2}
            stroke="var(--primary)"
            strokeWidth="0.8"
            strokeOpacity="0.1"
            strokeDasharray="4 4"
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{ delay: 1.2 + i * 0.1, duration: 0.6 }}
          />
        ))}

        {/* Single slow rotating arc */}
        <motion.circle
          cx="200" cy="200" r="170"
          stroke="var(--primary)"
          strokeWidth="1"
          strokeOpacity="0.08"
          strokeDasharray="20 300"
          fill="none"
          animate={{ rotate: 360 }}
          transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
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
                className="group flex items-center gap-2 px-6 py-3 rounded-xl bg-primary text-primary-foreground font-medium hover:opacity-90 transition-opacity glow-sm"
              >
                <Download className="w-5 h-5" />
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
                const Icon = contactIconMap[contact.icon]
                return (
                  <a
                    key={contact.label}
                    href={contact.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-11 h-11 rounded-xl glass flex items-center justify-center text-muted-foreground hover:text-primary transition-colors"
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
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.3, duration: 0.6 }}
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
