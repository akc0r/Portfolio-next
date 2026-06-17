"use client"

import { motion } from "framer-motion"
import { useLanguage } from "@/contexts/language-context"
import { contactIconMap } from "@/lib/icons"
import personalData from "@/data/personal.json"

/**
 * Fixed vertical social rail anchored bottom-left (desktop only) — the mirror
 * of the right-hand dot-nav, framing the content like a HUD.
 */
export function SideRail() {
  const { t } = useLanguage()

  return (
    <div className="hidden lg:flex fixed left-6 bottom-0 z-50 flex-col items-center gap-5">
      {personalData.personal.contacts.map((contact) => {
        const Icon = contactIconMap[contact.icon]
        return (
          <motion.a
            key={contact.label}
            href={contact.href}
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ y: -3, scale: 1.12 }}
            className="text-muted-foreground hover:text-primary transition-colors"
            aria-label={contact.label}
          >
            {Icon && <Icon className="w-5 h-5" />}
          </motion.a>
        )
      })}
      <span className="font-mono text-[10px] uppercase tracking-[0.25em] text-muted-foreground/60 [writing-mode:vertical-rl]">
        {t({ fr: "Disponible", en: "Available" })}
      </span>
      <span className="w-px h-20 bg-gradient-to-b from-border to-transparent" />
    </div>
  )
}
