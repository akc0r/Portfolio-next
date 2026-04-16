"use client"

import { motion, useInView } from "framer-motion"
import { useRef } from "react"
import { Code2 } from "lucide-react"
import { useLanguage } from "@/contexts/language-context"
import skillsData from "@/data/skills.json"
import navigationData from "@/data/navigation.json"
import Image from "next/image"

// Map skill names to their icon paths
const skillLogos: Record<string, string> = {
  "React": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
  "Next.js": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg",
  "TypeScript": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg",
  "Tailwind CSS": "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-original.svg",
  "Node.js": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg",
  "Python": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg",
  "PostgreSQL": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg",
  "MongoDB": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg",
  "Docker": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg",
  "Kubernetes": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/kubernetes/kubernetes-plain.svg",
  "Git": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg",
  "FastAPI": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/fastapi/fastapi-original.svg",
  "Django": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/django/django-plain.svg",
  ".NET": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/dot-net/dot-net-original.svg",
  "Jenkins": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/jenkins/jenkins-original.svg",
  "Elasticsearch": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/elasticsearch/elasticsearch-original.svg",
  "Redis": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/redis/redis-original.svg",
  "Linux": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/linux/linux-original.svg",
  "Proxmox": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/proxmox/proxmox-original.svg",
  "C": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/c/c-original.svg",
  "C++": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/cplusplus/cplusplus-original.svg",
  "C#": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/csharp/csharp-original.svg",
  "Java": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg",
  "Rust": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/rust/rust-original.svg",
}

export function SkillsSection() {
  const { t } = useLanguage()
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section id="skills" className="py-24 px-6 relative z-10" ref={ref}>
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass text-sm text-muted-foreground mb-4">
            <Code2 className="w-4 h-4 text-primary" />
            <span className="font-mono">{t({ fr: "Stack technique", en: "Tech Stack" })}</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4">
            {t(navigationData.navigation.skills)}
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            {t({
              fr: "Les technologies que je maitrise pour construire des solutions performantes et scalables",
              en: "The technologies I master to build performant and scalable solutions"
            })}
          </p>
        </motion.div>

        {/* Categorized skills */}
        <div className="space-y-8">
          {skillsData.categories.map((category, catIndex) => (
            <motion.div
              key={catIndex}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: catIndex * 0.1, duration: 0.6 }}
              className="glass rounded-2xl p-6 md:p-8"
            >
              <h3 className="text-sm font-mono text-primary uppercase tracking-wider mb-6">
                {t(category.title)}
              </h3>
              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4 md:gap-6">
                {category.skills.map((skill, index) => {
                  const logoUrl = skillLogos[skill.name]
                  return (
                    <motion.div
                      key={skill.name}
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={isInView ? { opacity: 1, scale: 1 } : {}}
                      transition={{ delay: catIndex * 0.1 + index * 0.05, duration: 0.4 }}
                      whileHover={{ scale: 1.05, y: -4 }}
                      className="group relative flex flex-col items-center gap-3 p-4 rounded-xl bg-secondary/20 hover:bg-secondary/40 border border-border/50 hover:border-primary/30 transition-all cursor-default"
                    >
                      <div className="relative w-12 h-12 rounded-lg bg-background/50 flex items-center justify-center group-hover:bg-background/80 transition-colors">
                        {logoUrl ? (
                          <Image
                            src={logoUrl}
                            alt={skill.name}
                            width={32}
                            height={32}
                            className="w-8 h-8 object-contain"
                            unoptimized
                          />
                        ) : (
                          <Code2 className="w-7 h-7 text-primary/70" />
                        )}
                      </div>

                      <span className="relative text-xs font-semibold text-center tracking-tight">
                        {skill.name}
                      </span>
                    </motion.div>
                  )
                })}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}