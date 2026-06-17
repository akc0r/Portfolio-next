"use client"

import { motion, useInView } from "framer-motion"
import { useRef } from "react"
import { MapPin, Calendar } from "lucide-react"
import { useLanguage } from "@/contexts/language-context"
import { SignatureCard } from "@/components/ui/signature-card"
import { SectionHeading } from "@/components/layout/section-heading"
import { SECTION_ACCENT } from "@/components/nav/sections"
import experienceData from "@/data/experience.json"
import navigationData from "@/data/navigation.json"

export function ExperienceSection() {
  const { t } = useLanguage()
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })
  const accent = SECTION_ACCENT.experience

  const sortedExperiences = [...experienceData.experiences]
    .sort((a, b) => b.sortDate.localeCompare(a.sortDate))

  return (
    <section id="experience" className="w-full px-6 py-20 relative z-10" ref={ref}>
      <div className="max-w-4xl mx-auto">
        <SectionHeading
          index={3}
          eyebrow={t({ fr: "Parcours pro", en: "Career Path" })}
          accent={accent}
          title={t(navigationData.navigation.experience)}
          subtitle={t({
            fr: "Les missions qui ont forge mon expertise et ma vision du developpement",
            en: "The missions that forged my expertise and vision of development",
          })}
        />

        <div className="relative perspective-2000">
          {/* Timeline line */}
          <div className="absolute left-6 md:left-8 top-0 bottom-0 w-px bg-gradient-to-b from-tertiary via-primary to-transparent" />

          <div className="space-y-8">
            {sortedExperiences.map((experience, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ delay: index * 0.15, duration: 0.5 }}
                className="relative pl-16 md:pl-20"
              >
                {/* Timeline dot */}
                <div className="absolute left-4 md:left-6 top-7 w-4 h-4 rounded-full bg-tertiary glow-sm ring-4 ring-background z-10" />

                <SignatureCard
                  className="rounded-2xl"
                  accent={accent}
                  intensity={4}
                  label={experience.company}
                  index={sortedExperiences.length - index}
                >
                  <div className="group p-6 md:p-8 pt-4">
                    {/* Header */}
                    <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4 mb-4">
                      <div>
                        <h3 className="font-bold text-xl mb-1 accent-on-hover">{t(experience.title)}</h3>
                        <p className="text-tertiary font-semibold">{experience.company}</p>
                      </div>
                      <div className="flex flex-col items-start md:items-end gap-1 text-sm text-muted-foreground">
                        <div className="flex items-center gap-2">
                          <Calendar className="w-4 h-4" />
                          <span className="font-mono">{experience.period}</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <MapPin className="w-4 h-4" />
                          <span>{experience.location}</span>
                        </div>
                      </div>
                    </div>

                    {/* Bullets */}
                    <ul className="space-y-2">
                      {experience.bullets.map((bullet, bulletIndex) => (
                        <li
                          key={bulletIndex}
                          className="flex items-start gap-3 text-muted-foreground"
                        >
                          <span className="w-1.5 h-1.5 rounded-full bg-tertiary mt-2 shrink-0" />
                          <span>{t(bullet)}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </SignatureCard>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
