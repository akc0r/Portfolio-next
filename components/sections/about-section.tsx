"use client"

import { motion, useInView } from "framer-motion"
import { useRef } from "react"
import { Target, Zap, Compass, Rocket, CarFront, CircleDot } from "lucide-react"
import { useLanguage } from "@/contexts/language-context"
import aboutData from "@/data/about.json"
import personalData from "@/data/personal.json"
import navigationData from "@/data/navigation.json"

export function AboutSection() {
  const { t } = useLanguage()
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section id="about" className="py-24 px-6 relative z-10" ref={ref}>
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="glass rounded-3xl p-8 md:p-12 relative overflow-hidden"
        >
          {/* Decorative elements */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-primary/5 rounded-full blur-3xl" />
          <div className="absolute bottom-0 left-0 w-48 h-48 bg-accent/5 rounded-full blur-3xl" />

          <div className="relative z-10">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ delay: 0.2, duration: 0.6 }}
              className="flex items-center gap-3 mb-6"
            >
              <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center">
                <Target className="w-6 h-6 text-primary" />
              </div>
              <h2 className="text-3xl md:text-4xl font-bold tracking-tight">
                {t(navigationData.navigation.about)}
              </h2>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={isInView ? { opacity: 1 } : {}}
              transition={{ delay: 0.4, duration: 0.6 }}
              className="relative mb-10"
            >
              <div className="absolute -left-4 top-0 bottom-0 w-1 bg-gradient-to-b from-primary via-accent to-transparent rounded-full" />
              <p className="text-lg text-muted-foreground leading-relaxed pl-6 text-pretty">
                {t(aboutData.about)}
              </p>
            </motion.div>

            {/* Stats grid */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.6, duration: 0.6 }}
              className="grid grid-cols-1 sm:grid-cols-3 gap-4"
            >
              {personalData.stats.map((stat, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={isInView ? { opacity: 1, scale: 1 } : {}}
                  transition={{ delay: 0.7 + index * 0.1, duration: 0.4 }}
                  whileHover={{ scale: 1.03, y: -2 }}
                  className="glass rounded-2xl p-6 text-center group cursor-default"
                >
                  <motion.p
                    className="text-4xl font-bold text-primary mb-1"
                    initial={{ opacity: 0 }}
                    animate={isInView ? { opacity: 1 } : {}}
                    transition={{ delay: 0.8 + index * 0.1 }}
                  >
                    {stat.value}
                  </motion.p>
                  <p className="font-semibold text-foreground">{t(stat.label)}</p>
                  <p className="text-sm text-muted-foreground">{t(stat.detail)}</p>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </motion.div>

        {/* Interests/Passions section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.8, duration: 0.6 }}
          className="mt-8 grid grid-cols-2 md:grid-cols-4 gap-4"
        >
          {aboutData.interests.map((interest, index) => {
            const icons: Record<string, React.ComponentType<{ className?: string }>> = {
              rocket: Rocket,
              car: CarFront,
              cpu: Zap,
              volleyball: CircleDot,
            }
            const Icon = icons[interest.icon] || Compass
            
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.9 + index * 0.1, duration: 0.4 }}
                whileHover={{ scale: 1.02 }}
                className="glass rounded-2xl p-6 flex items-start gap-4"
              >
                <div className="w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center shrink-0">
                  <Icon className="w-6 h-6 text-accent" />
                </div>
                <div>
                  <h3 className="font-semibold mb-1">{t(interest.title)}</h3>
                  <p className="text-sm text-muted-foreground">{t(interest.detail)}</p>
                </div>
              </motion.div>
            )
          })}
        </motion.div>
      </div>
    </section>
  )
}
