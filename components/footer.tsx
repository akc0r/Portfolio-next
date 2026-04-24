"use client"

import { Code2, Heart } from "lucide-react"
import { useLanguage } from "@/contexts/language-context"
import personalData from "@/data/personal.json"

export function Footer() {
  const { t } = useLanguage()
  const currentYear = new Date().getFullYear()

  return (
    <footer className="py-8 px-6 border-t border-border/50 relative z-10">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-2 text-muted-foreground">
            <Code2 className="w-4 h-4 text-primary" />
            <span className="text-sm">
              © {currentYear} {personalData.personal.name}
            </span>
          </div>

          <p className="text-sm text-muted-foreground flex items-center gap-1">
            {t({ fr: "Concu avec", en: "Built with" })}
            <Heart className="w-3 h-3 text-accent fill-accent" />
            {t({ fr: "et Next.js", en: "and Next.js" })}
          </p>
        </div>
      </div>
    </footer>
  )
}
