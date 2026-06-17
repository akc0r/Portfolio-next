"use client"

import { ArrowUp } from "lucide-react"
import { useLanguage } from "@/contexts/language-context"
import { contactIconMap } from "@/lib/icons"
import { SECTIONS } from "@/components/nav/sections"
import personalData from "@/data/personal.json"

export function Footer() {
  const { t } = useLanguage()
  const currentYear = new Date().getFullYear()

  const go = (id: string) => document.getElementById(id)?.scrollIntoView({ behavior: "smooth" })

  return (
    <footer className="relative z-10 px-6 pt-14 pb-10 mt-8">
      {/* Aurora hairline */}
      <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-primary/50 to-transparent" />

      <div className="max-w-6xl mx-auto grid gap-10 md:grid-cols-3">
        {/* Identity */}
        <div>
          <p className="text-2xl font-bold mb-2">
            <span className="text-foreground">{personalData.personal.name.split(" ")[0]} </span>
            <span className="text-aurora">{personalData.personal.name.split(" ").slice(1).join(" ")}</span>
          </p>
          <p className="text-sm text-muted-foreground mb-1">{t(personalData.personal.title)}</p>
          <p className="font-mono text-xs text-muted-foreground/70 uppercase tracking-wider">
            {personalData.personal.location}
          </p>
        </div>

        {/* Quick nav */}
        <nav className="flex flex-col gap-2">
          <p className="font-mono text-[11px] uppercase tracking-[0.25em] text-muted-foreground/60 mb-2">
            {t({ fr: "Navigation", en: "Navigation" })}
          </p>
          <div className="grid grid-cols-2 gap-x-6 gap-y-2">
            {SECTIONS.slice(1).map((s) => (
              <button
                key={s.id}
                onClick={() => go(s.id)}
                className="text-left text-sm text-muted-foreground hover:text-primary transition-colors w-fit"
              >
                {t(s.label)}
              </button>
            ))}
          </div>
        </nav>

        {/* Socials + back to top */}
        <div className="flex flex-col md:items-end gap-4">
          <div className="flex gap-3">
            {personalData.personal.contacts.map((contact) => {
              const Icon = contactIconMap[contact.icon]
              return (
                <a
                  key={contact.label}
                  href={contact.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-xl glass flex items-center justify-center text-muted-foreground hover:text-primary transition-colors"
                  aria-label={contact.label}
                >
                  {Icon && <Icon className="w-5 h-5" />}
                </a>
              )
            })}
          </div>
          <button
            onClick={() => go("hero")}
            className="group flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors"
          >
            {t({ fr: "Haut de page", en: "Back to top" })}
            <span className="w-8 h-8 rounded-lg glass flex items-center justify-center group-hover:-translate-y-0.5 transition-transform">
              <ArrowUp className="w-4 h-4" />
            </span>
          </button>
        </div>
      </div>

      <div className="max-w-6xl mx-auto mt-10 pt-6 border-t border-border/30 flex flex-col sm:flex-row items-center justify-between gap-2 font-mono text-xs text-muted-foreground/70">
        <span>© {currentYear} {personalData.personal.name}</span>
        <span>{t({ fr: "Concu avec", en: "Built with" })} Next.js · Three.js · Framer Motion</span>
      </div>
    </footer>
  )
}
