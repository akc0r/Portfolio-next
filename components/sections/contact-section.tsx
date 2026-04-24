"use client"

import { motion, useInView } from "framer-motion"
import { useRef } from "react"
import { Mail, Download, Send, MessageSquare } from "lucide-react"
import { useLanguage } from "@/contexts/language-context"
import { contactIconMap } from "@/lib/icons"
import personalData from "@/data/personal.json"
import navigationData from "@/data/navigation.json"

export function ContactSection() {
  const { t } = useLanguage()
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section id="contact" className="py-24 px-6 relative z-10" ref={ref}>
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass text-sm text-muted-foreground mb-4">
            <MessageSquare className="w-4 h-4 text-primary" />
            <span className="font-mono">{t(navigationData.ui.getInTouch)}</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4">
            {t(navigationData.navigation.contact)}
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            {t({
              fr: "Vous avez un projet ou une opportunite ? N'hesitez pas a me contacter.",
              en: "Have a project or an opportunity? Don't hesitate to reach out."
            })}
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.15, duration: 0.5 }}
          className="glass rounded-3xl p-8 md:p-12 relative overflow-hidden"
        >
          {/* Background decorations */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-primary/5 rounded-full blur-3xl" />
          <div className="absolute bottom-0 left-0 w-48 h-48 bg-accent/5 rounded-full blur-3xl" />

          <div className="relative z-10 space-y-8">
            {/* Message */}
            <div className="text-center max-w-lg mx-auto">
              <p className="text-muted-foreground leading-relaxed">
                {t({
                  fr: "Je suis actuellement a la recherche de nouvelles opportunites. Que vous ayez un projet innovant ou une offre interessante, je serai ravi d'en discuter avec vous.",
                  en: "I'm currently looking for new opportunities. Whether you have an innovative project or an interesting offer, I'd be happy to discuss it with you."
                })}
              </p>
            </div>

            {/* Email card */}
            <a
              href={`mailto:${personalData.personal.email}`}
              className="flex items-center gap-4 p-4 rounded-2xl glass hover:border-primary/30 transition-colors max-w-md mx-auto"
            >
              <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center shrink-0">
                <Mail className="w-6 h-6 text-primary" />
              </div>
              <div>
                <p className="text-sm text-muted-foreground">{t({ fr: "Email", en: "Email" })}</p>
                <p className="font-medium">{personalData.personal.email}</p>
              </div>
            </a>

            {/* Social links */}
            <div className="flex justify-center gap-3">
              {personalData.personal.contacts.map((contact) => {
                const Icon = contactIconMap[contact.icon]
                return (
                  <a
                    key={contact.label}
                    href={contact.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 px-5 py-3 rounded-2xl glass hover:border-primary/30 transition-colors"
                  >
                    {Icon && <Icon className="w-5 h-5 text-primary" />}
                    <span className="font-medium">{contact.label}</span>
                  </a>
                )
              })}
            </div>

            {/* CTA buttons */}
            <div className="flex flex-wrap justify-center gap-4">
              <a
                href={`mailto:${personalData.personal.email}`}
                className="flex items-center gap-3 px-8 py-4 rounded-2xl bg-primary text-primary-foreground font-semibold hover:opacity-90 transition-opacity glow-sm text-lg"
              >
                <Send className="w-5 h-5" />
                {t(navigationData.ui.contactMe)}
              </a>
              <a
                href={personalData.personal.cvUrl}
                download
                className="flex items-center gap-3 px-8 py-4 rounded-2xl glass hover:glass-strong transition-all font-semibold text-lg"
              >
                <Download className="w-5 h-5" />
                {t(navigationData.ui.downloadCv)}
              </a>
            </div>

            {/* Availability status */}
            <p className="text-center text-sm text-muted-foreground font-mono">
              {t({ fr: "Disponible immediatement", en: "Available immediately" })}
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
