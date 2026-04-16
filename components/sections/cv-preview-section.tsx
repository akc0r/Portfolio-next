"use client"

import { motion, useInView } from "framer-motion"
import { useRef, useState } from "react"
import { FileText, Download, ZoomIn, ZoomOut, ExternalLink, Eye } from "lucide-react"
import { useLanguage } from "@/contexts/language-context"
import personalData from "@/data/personal.json"
import navigationData from "@/data/navigation.json"

export function CVPreviewSection() {
  const { t } = useLanguage()
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })
  const [isZoomed, setIsZoomed] = useState(false)

  return (
    <section id="cv-preview" className="py-24 px-6 relative z-10" ref={ref}>
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass text-sm text-muted-foreground mb-4">
            <FileText className="w-4 h-4 text-primary" />
            <span className="font-mono">{t({ fr: "Document officiel", en: "Official Document" })}</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4">
            {t({ fr: "Mon CV", en: "My Resume" })}
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            {t({
              fr: "Consultez mon curriculum vitae pour une vue d'ensemble de mon parcours professionnel",
              en: "View my resume for an overview of my professional background"
            })}
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.2, duration: 0.6 }}
          className="relative"
        >
          {/* CV Preview Container */}
          <div className="glass rounded-2xl p-6 md:p-8">
            {/* Actions Bar */}
            <div className="flex flex-wrap items-center justify-between gap-4 mb-6">
              <div className="flex items-center gap-2">
                <Eye className="w-5 h-5 text-primary" />
                <span className="font-medium">{t({ fr: "Apercu du CV", en: "CV Preview" })}</span>
              </div>
              <div className="flex items-center gap-3">
                <button
                  onClick={() => setIsZoomed(!isZoomed)}
                  className="flex items-center gap-2 px-4 py-2 rounded-xl glass text-sm text-muted-foreground hover:text-primary transition-colors"
                >
                  {isZoomed ? <ZoomOut className="w-4 h-4" /> : <ZoomIn className="w-4 h-4" />}
                  <span className="hidden sm:inline">{isZoomed ? t({ fr: "Reduire", en: "Zoom Out" }) : t({ fr: "Agrandir", en: "Zoom In" })}</span>
                </button>
                <a
                  href={personalData.personal.cvUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 px-4 py-2 rounded-xl glass text-sm text-muted-foreground hover:text-primary transition-colors"
                >
                  <ExternalLink className="w-4 h-4" />
                  <span className="hidden sm:inline">{t({ fr: "Ouvrir", en: "Open" })}</span>
                </a>
                <a
                  href={personalData.personal.cvUrl}
                  download
                  className="flex items-center gap-2 px-4 py-2.5 rounded-xl bg-primary text-primary-foreground hover:bg-primary/90 transition-colors font-medium text-sm"
                >
                  <Download className="w-4 h-4" />
                  <span>{t(navigationData.ui.downloadCv)}</span>
                </a>
              </div>
            </div>

            {/* PDF Preview */}
            <motion.div
              animate={{ height: isZoomed ? "80vh" : "600px" }}
              transition={{ duration: 0.3 }}
              className="relative rounded-xl overflow-hidden bg-secondary/30 border border-border"
            >
              {/* PDF Embed */}
              <iframe
                src={`${personalData.personal.cvUrl}#view=FitH`}
                className="w-full h-full"
                title="CV Preview"
              />
              
              {/* Fallback overlay for when PDF doesn't load */}
              <div className="absolute inset-0 flex flex-col items-center justify-center bg-secondary/80 backdrop-blur-sm opacity-0 hover:opacity-100 transition-opacity pointer-events-none">
                <div className="pointer-events-auto text-center p-8">
                  <div className="w-20 h-20 rounded-2xl bg-primary/10 flex items-center justify-center mx-auto mb-6">
                    <FileText className="w-10 h-10 text-primary" />
                  </div>
                  <h3 className="text-xl font-bold mb-2">
                    {t({ fr: "Visualiser mon CV", en: "View my Resume" })}
                  </h3>
                  <p className="text-muted-foreground mb-6 max-w-md">
                    {t({ 
                      fr: "Cliquez sur le bouton ci-dessous pour telecharger ou ouvrir mon CV complet", 
                      en: "Click the button below to download or open my full resume" 
                    })}
                  </p>
                  <div className="flex flex-col sm:flex-row gap-3 justify-center">
                    <a
                      href={personalData.personal.cvUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center justify-center gap-2 px-6 py-3 rounded-xl glass text-foreground hover:text-primary transition-colors"
                    >
                      <ExternalLink className="w-4 h-4" />
                      <span>{t({ fr: "Ouvrir le PDF", en: "Open PDF" })}</span>
                    </a>
                    <a
                      href={personalData.personal.cvUrl}
                      download
                      className="flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-primary text-primary-foreground hover:bg-primary/90 transition-colors font-medium"
                    >
                      <Download className="w-4 h-4" />
                      <span>{t(navigationData.ui.downloadCv)}</span>
                    </a>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Quick Info */}
            <div className="mt-6 grid grid-cols-1 sm:grid-cols-3 gap-4">
              <div className="flex items-center gap-3 p-4 rounded-xl bg-secondary/30">
                <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                  <FileText className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">{t({ fr: "Format", en: "Format" })}</p>
                  <p className="font-medium">PDF</p>
                </div>
              </div>
              <div className="flex items-center gap-3 p-4 rounded-xl bg-secondary/30">
                <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                  <Eye className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">{t({ fr: "Derniere mise a jour", en: "Last Updated" })}</p>
                  <p className="font-medium">{t({ fr: "Avril 2025", en: "April 2025" })}</p>
                </div>
              </div>
              <div className="flex items-center gap-3 p-4 rounded-xl bg-secondary/30">
                <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                  <Download className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">{t({ fr: "Langue", en: "Language" })}</p>
                  <p className="font-medium">{t({ fr: "Francais / Anglais", en: "French / English" })}</p>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
