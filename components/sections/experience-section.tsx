"use client"

import { motion, useInView } from "framer-motion"
import { useRef } from "react"
import { Briefcase, MapPin, Calendar } from "lucide-react"
import { useLanguage } from "@/contexts/language-context"
import experienceData from "@/data/experience.json"
import navigationData from "@/data/navigation.json"

export function ExperienceSection() {
  const { t } = useLanguage()
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section id="experience" className="py-24 px-6 relative z-10" ref={ref}>
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass text-sm text-muted-foreground mb-4">
            <Briefcase className="w-4 h-4 text-primary" />
            <span className="font-mono">{t({ fr: "Parcours pro", en: "Career Path" })}</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4">
            {t(navigationData.navigation.experience)}
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            {t({
              fr: "Les missions qui ont forge mon expertise et ma vision du developpement",
              en: "The missions that forged my expertise and vision of development"
            })}
          </p>
        </motion.div>

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-6 md:left-8 top-0 bottom-0 w-px bg-gradient-to-b from-primary via-accent to-transparent" />

          <div className="space-y-8">
            {[...experienceData.experiences]
              .sort((a, b) => b.sortDate.localeCompare(a.sortDate))
              .map((experience, index) => (
                <motion.div
                key={index}
                initial={{ opacity: 0, x: -30 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ delay: index * 0.2, duration: 0.6 }}
                className="relative pl-16 md:pl-20"
              >
                {/* Timeline dot */}
                <motion.div
                  initial={{ scale: 0 }}
                  animate={isInView ? { scale: 1 } : {}}
                  transition={{ delay: index * 0.2 + 0.3, type: "spring" }}
                  className="absolute left-4 md:left-6 w-4 h-4 rounded-full bg-primary glow-sm"
                />

                <motion.div
                  whileHover={{ scale: 1.01, x: 5 }}
                  className="glass rounded-2xl p-6 md:p-8 hover:glow-sm transition-all"
                >
                  {/* Header */}
                  <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4 mb-4">
                    <div>
                      <h3 className="font-bold text-xl mb-1">{t(experience.title)}</h3>
                      <p className="text-primary font-semibold">{experience.company}</p>
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
                      <motion.li
                        key={bulletIndex}
                        initial={{ opacity: 0, x: -10 }}
                        animate={isInView ? { opacity: 1, x: 0 } : {}}
                        transition={{ delay: index * 0.2 + bulletIndex * 0.1 + 0.4, duration: 0.4 }}
                        className="flex items-start gap-3 text-muted-foreground"
                      >
                        <span className="w-1.5 h-1.5 rounded-full bg-primary mt-2 shrink-0" />
                        <span>{t(bullet)}</span>
                      </motion.li>
                    ))}
                  </ul>
                </motion.div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
