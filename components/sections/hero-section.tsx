"use client"

import { motion } from "framer-motion"
import { Download, Mail, ChevronDown, MapPin } from "lucide-react"
import { useLanguage } from "@/contexts/language-context"
import { contactIconMap } from "@/lib/icons"
import { Hero3D } from "@/components/three/hero-3d"
import personalData from "@/data/personal.json"
import navigationData from "@/data/navigation.json"

export function HeroSection() {
  const { t } = useLanguage()
  const nameParts = personalData.personal.name.split(" ")

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
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full rounded-full bg-green-500 opacity-75 animate-ping" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-green-500" />
              </span>
              {t({ fr: "Disponible pour de nouvelles opportunites", en: "Available for new opportunities" })}
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1, duration: 0.5 }}
              className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 tracking-tight text-balance"
            >
              {nameParts.map((word, i) => (
                <span key={i} className={i === 0 ? "text-foreground" : "text-aurora-animated"}>
                  {word}
                  {i < nameParts.length - 1 ? " " : ""}
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
              <motion.a
                href={personalData.personal.cvUrl}
                download
                whileHover={{ scale: 1.04, y: -2 }}
                whileTap={{ scale: 0.97 }}
                className="group flex items-center gap-2 px-6 py-3 rounded-xl bg-primary text-primary-foreground font-medium glow-sm"
              >
                <Download className="w-5 h-5 transition-transform group-hover:-translate-y-0.5" />
                {t(navigationData.ui.downloadCv)}
              </motion.a>
              <motion.a
                href={`mailto:${personalData.personal.email}`}
                whileHover={{ scale: 1.04, y: -2 }}
                whileTap={{ scale: 0.97 }}
                className="group flex items-center gap-2 px-6 py-3 rounded-xl glass hover:glass-strong transition-all font-medium"
              >
                <Mail className="w-5 h-5" />
                {t(navigationData.ui.contactMe)}
              </motion.a>
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
                  <motion.a
                    key={contact.label}
                    href={contact.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.1, y: -2 }}
                    className="w-11 h-11 rounded-xl glass flex items-center justify-center text-muted-foreground hover:text-primary transition-colors"
                    aria-label={contact.label}
                  >
                    {Icon && <Icon className="w-5 h-5" />}
                  </motion.a>
                )
              })}
            </motion.div>
          </div>

          {/* Right side - Interactive 3D centerpiece */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.3, duration: 0.8 }}
            className="hidden md:flex items-center justify-center"
          >
            <div className="relative w-full h-[420px] lg:h-[520px]">
              {/* Soft aurora glow behind the crystal */}
              <div className="absolute inset-0 m-auto w-2/3 h-2/3 rounded-full bg-primary/20 blur-[80px]" />
              <div className="absolute inset-0 m-auto w-1/2 h-1/2 rounded-full bg-accent/15 blur-[60px]" />
              <Hero3D />
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
