"use client"

import { motion, useInView } from "framer-motion"
import { useRef } from "react"
import { GraduationCap, Calendar } from "lucide-react"
import { useLanguage } from "@/contexts/language-context"
import { SignatureCard } from "@/components/ui/signature-card"
import { SectionHeading } from "@/components/layout/section-heading"
import { SECTION_ACCENT } from "@/components/nav/sections"
import educationData from "@/data/education.json"
import navigationData from "@/data/navigation.json"

export function EducationSection() {
  const { t } = useLanguage()
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })
  const accent = SECTION_ACCENT.education

  const sortedEducation = [...educationData.education]
    .sort((a, b) => b.sortDate.localeCompare(a.sortDate))

  return (
    <section id="education" className="w-full px-6 py-20 relative z-10" ref={ref}>
      <div className="max-w-4xl mx-auto">
        <SectionHeading
          index={4}
          eyebrow={t({ fr: "Formation", en: "Education" })}
          accent={accent}
          title={t(navigationData.navigation.education)}
          subtitle={t({
            fr: "Les fondations academiques qui ont construit mon expertise technique",
            en: "The academic foundations that built my technical expertise",
          })}
        />

        <div className="space-y-6 perspective-2000">
          {sortedEducation.map((edu, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: index * 0.15, duration: 0.5 }}
            >
              <SignatureCard
                className="rounded-2xl"
                accent={accent}
                intensity={5}
                label={edu.period}
                index={sortedEducation.length - index}
              >
                <div className="group p-6 md:p-8 pt-4">
                  <div className="relative z-10 flex flex-col md:flex-row gap-6">
                    {/* Icon */}
                    <div className="shrink-0">
                      <div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center group-hover:scale-105 transition-transform">
                        <GraduationCap className="w-8 h-8 text-primary" />
                      </div>
                    </div>

                    {/* Content */}
                    <div className="flex-1">
                      <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-2 mb-4">
                        <div>
                          <h3 className="font-bold text-xl mb-1 accent-on-hover">{edu.school}</h3>
                          <p className="text-primary font-medium">{t(edu.title)}</p>
                        </div>
                        <div className="flex items-center gap-2 text-sm text-muted-foreground">
                          <Calendar className="w-4 h-4" />
                          <span className="font-mono">{edu.period}</span>
                        </div>
                      </div>

                      <p className="text-muted-foreground leading-relaxed">
                        {t(edu.description)}
                      </p>
                    </div>
                  </div>
                </div>
              </SignatureCard>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
