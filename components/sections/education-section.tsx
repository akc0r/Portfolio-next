"use client"

import { motion, useInView } from "framer-motion"
import { useRef } from "react"
import { GraduationCap, Calendar } from "lucide-react"
import { useLanguage } from "@/contexts/language-context"
import educationData from "@/data/education.json"
import navigationData from "@/data/navigation.json"

export function EducationSection() {
  const { t } = useLanguage()
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section id="education" className="py-24 px-6 relative z-10" ref={ref}>
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass text-sm text-muted-foreground mb-4">
            <GraduationCap className="w-4 h-4 text-primary" />
            <span className="font-mono">{t({ fr: "Formation academique", en: "Academic Background" })}</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4">
            {t(navigationData.navigation.education)}
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            {t({
              fr: "Les fondations academiques qui ont construit mon expertise technique",
              en: "The academic foundations that built my technical expertise"
            })}
          </p>
        </motion.div>

        <div className="space-y-6">
          {[...educationData.education]
            .sort((a, b) => b.sortDate.localeCompare(a.sortDate))
            .map((edu, index) => (
              <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: index * 0.2, duration: 0.6 }}
              whileHover={{ scale: 1.01 }}
              className="glass rounded-2xl p-6 md:p-8 relative overflow-hidden group"
            >
              {/* Decorative gradient */}
              <div className="absolute top-0 right-0 w-32 h-32 bg-primary/5 rounded-full blur-2xl opacity-0 group-hover:opacity-100 transition-opacity" />

              <div className="relative z-10 flex flex-col md:flex-row gap-6">
                {/* Icon */}
                <div className="shrink-0">
                  <motion.div
                    initial={{ scale: 0 }}
                    animate={isInView ? { scale: 1 } : {}}
                    transition={{ delay: index * 0.2 + 0.3, type: "spring" }}
                    className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center"
                  >
                    <GraduationCap className="w-8 h-8 text-primary" />
                  </motion.div>
                </div>

                {/* Content */}
                <div className="flex-1">
                  <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-2 mb-4">
                    <div>
                      <h3 className="font-bold text-xl mb-1">{edu.school}</h3>
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
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
