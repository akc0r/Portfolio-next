"use client"

import { motion, useInView } from "framer-motion"
import { useRef } from "react"
import { FileText, Download, ExternalLink } from "lucide-react"
import { useLanguage } from "@/contexts/language-context"
import { SectionHeading } from "@/components/layout/section-heading"
import { SECTION_ACCENT } from "@/components/nav/sections"
import personalData from "@/data/personal.json"
import navigationData from "@/data/navigation.json"

export function CVPreviewSection() {
  const { t } = useLanguage()
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section id="cv-preview" className="w-full px-6 py-20 relative z-10" ref={ref}>
      <div className="max-w-4xl mx-auto">
        <SectionHeading
          index={6}
          eyebrow={t({ fr: "Document", en: "Document" })}
          accent={SECTION_ACCENT["cv-preview"]}
          title={t({ fr: "Mon CV", en: "My Resume" })}
          subtitle={t({
            fr: "Consultez mon curriculum vitae pour une vue d'ensemble de mon parcours et de mes competences techniques.",
            en: "View my resume for a comprehensive overview of my background and technical skills.",
          })}
        />

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="glass rounded-3xl p-8 md:p-12 relative overflow-hidden text-center gradient-border"
        >
          {/* Decorative elements */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-tertiary/8 rounded-full blur-3xl" />
          <div className="absolute bottom-0 left-0 w-48 h-48 bg-primary/8 rounded-full blur-3xl" />

          <div className="relative z-10">
            <div className="w-16 h-16 rounded-2xl bg-tertiary/10 flex items-center justify-center mx-auto mb-8 animate-float-slow">
              <FileText className="w-8 h-8 text-tertiary" />
            </div>

            <div className="flex flex-wrap items-center justify-center gap-4">
              <a
                href={personalData.personal.cvUrl}
                download
                className="flex items-center gap-2 px-6 py-3 rounded-xl bg-primary text-primary-foreground hover:opacity-90 transition-opacity font-medium glow-sm"
              >
                <Download className="w-5 h-5" />
                {t(navigationData.ui.downloadCv)}
              </a>
              <a
                href={personalData.personal.cvUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-6 py-3 rounded-xl glass hover:glass-strong transition-all font-medium"
              >
                <ExternalLink className="w-5 h-5" />
                {t({ fr: "Ouvrir dans un nouvel onglet", en: "Open in new tab" })}
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
