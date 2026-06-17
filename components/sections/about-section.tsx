"use client"

import { motion, useInView } from "framer-motion"
import { useRef } from "react"
import { Rocket, CarFront, Zap, CircleDot, Compass } from "lucide-react"
import { useLanguage } from "@/contexts/language-context"
import { SignatureCard } from "@/components/ui/signature-card"
import { SectionHeading } from "@/components/layout/section-heading"
import { SECTION_ACCENT } from "@/components/nav/sections"
import aboutData from "@/data/about.json"
import personalData from "@/data/personal.json"
import navigationData from "@/data/navigation.json"

const fade = {
  hidden: { opacity: 0, y: 20 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.1, duration: 0.5 },
  }),
}

export function AboutSection() {
  const { t } = useLanguage()
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })
  const accent = SECTION_ACCENT.about

  return (
    <section id="about" className="w-full px-6 py-20 relative z-10" ref={ref}>
      <div className="max-w-5xl mx-auto">
        <SectionHeading
          index={1}
          eyebrow={t({ fr: "Profil", en: "Profile" })}
          accent={accent}
          title={t(navigationData.navigation.about)}
          subtitle={t({
            fr: "Ingenieur passionne par les systemes performants, du backend a l'infrastructure",
            en: "Engineer passionate about performant systems, from backend to infrastructure",
          })}
        />

        <motion.div
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          variants={fade}
          custom={0}
          className="glass rounded-3xl p-8 md:p-12 relative overflow-hidden gradient-border"
        >
          {/* Decorative elements */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-primary/8 rounded-full blur-3xl" />
          <div className="absolute bottom-0 left-0 w-48 h-48 bg-accent/8 rounded-full blur-3xl" />

          <div className="relative z-10">
            <motion.div variants={fade} custom={1} className="relative mb-10">
              <div className="absolute -left-4 top-0 bottom-0 w-1 bg-gradient-to-b from-primary via-tertiary to-transparent rounded-full" />
              <p className="text-lg text-muted-foreground leading-relaxed pl-6 text-pretty">
                {t(aboutData.about)}
              </p>
            </motion.div>

            {/* Stats grid */}
            <motion.div
              variants={fade}
              custom={2}
              className="grid grid-cols-1 sm:grid-cols-3 gap-4 perspective-1000"
            >
              {personalData.stats.map((stat, index) => (
                <SignatureCard key={index} className="rounded-2xl" accent={accent} intensity={10}>
                  <div className="p-6 text-center h-full flex flex-col justify-center">
                    <p className="text-4xl font-bold text-aurora mb-1">{stat.value}</p>
                    <p className="font-semibold text-foreground">{t(stat.label)}</p>
                    <p className="text-sm text-muted-foreground">{t(stat.detail)}</p>
                  </div>
                </SignatureCard>
              ))}
            </motion.div>
          </div>
        </motion.div>

        {/* Interests section */}
        <motion.div
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          variants={fade}
          custom={3}
          className="mt-8 grid grid-cols-2 md:grid-cols-4 gap-4 perspective-1000"
        >
          {aboutData.interests.map((interest, index) => {
            const icons: Record<string, React.ComponentType<{ className?: string; style?: React.CSSProperties }>> = {
              rocket: Rocket,
              car: CarFront,
              cpu: Zap,
              volleyball: CircleDot,
            }
            const Icon = icons[interest.icon] || Compass

            return (
              <SignatureCard key={index} className="rounded-2xl" accent={accent} intensity={9}>
                <div className="group p-6 flex items-start gap-4 h-full">
                  <div
                    className="w-12 h-12 rounded-xl flex items-center justify-center shrink-0"
                    style={{ background: "color-mix(in oklch, var(--card-accent) 14%, transparent)" }}
                  >
                    <Icon className="w-6 h-6" style={{ color: "var(--card-accent)" }} />
                  </div>
                  <div>
                    <h3 className="font-semibold mb-1 accent-on-hover">{t(interest.title)}</h3>
                    <p className="text-sm text-muted-foreground">{t(interest.detail)}</p>
                  </div>
                </div>
              </SignatureCard>
            )
          })}
        </motion.div>
      </div>
    </section>
  )
}
