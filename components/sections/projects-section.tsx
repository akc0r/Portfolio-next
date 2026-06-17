"use client"

import { motion, useInView } from "framer-motion"
import { useRef, useState } from "react"
import { Github, ExternalLink, FolderGit2, Filter } from "lucide-react"
import { useLanguage } from "@/contexts/language-context"
import { SignatureCard } from "@/components/ui/signature-card"
import { SectionHeading } from "@/components/layout/section-heading"
import { SECTION_ACCENT } from "@/components/nav/sections"
import projectsData from "@/data/projects.json"
import navigationData from "@/data/navigation.json"
import type { ProjectCategory, ProjectOrigin, Project } from "@/types/portfolio"

const categoryAccent: Record<ProjectCategory, "primary" | "accent" | "tertiary"> = {
  Web: "primary",
  Application: "accent",
  "Data Science": "tertiary",
}

const originLabels: Record<ProjectOrigin, { fr: string; en: string }> = {
  Personal: { fr: "Personnel", en: "Personal" },
  University: { fr: "Universitaire", en: "University" },
  Professional: { fr: "Professionnel", en: "Professional" },
}

export function ProjectsSection() {
  const { t } = useLanguage()
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })
  const [filter, setFilter] = useState<ProjectCategory | "all">("all")
  const [showAll, setShowAll] = useState(false)

  const allProjects = projectsData.projects as unknown as Project[]
  const filteredProjects = filter === "all"
    ? allProjects
    : allProjects.filter(p => p.category === filter)

  const INITIAL_COUNT = 6
  const displayedProjects = showAll ? filteredProjects : filteredProjects.slice(0, INITIAL_COUNT)
  const hasMore = filteredProjects.length > INITIAL_COUNT

  const categories: (ProjectCategory | "all")[] = ["all", "Web", "Application", "Data Science"]

  return (
    <section id="projects" className="w-full px-6 py-20 relative z-10" ref={ref}>
      <div className="max-w-6xl mx-auto">
        <SectionHeading
          index={5}
          eyebrow={t({ fr: "Realisations", en: "Achievements" })}
          accent={SECTION_ACCENT.projects}
          title={t(navigationData.navigation.projects)}
          subtitle={t({
            fr: "Une selection de projets qui illustrent ma capacite a transformer des idees en solutions concretes",
            en: "A selection of projects that illustrate my ability to transform ideas into concrete solutions",
          })}
        />

        {/* Filter buttons */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-12">
          <Filter className="w-4 h-4 text-muted-foreground mr-2" />
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => {
                setFilter(cat)
                setShowAll(false)
              }}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
                filter === cat
                  ? "bg-primary text-primary-foreground glow-sm"
                  : "glass text-muted-foreground hover:text-foreground"
              }`}
            >
              {cat === "all" ? t({ fr: "Tous", en: "All" }) : cat}
            </button>
          ))}
        </div>

        <motion.div
          layout
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 perspective-2000"
        >
          {displayedProjects.map((project, index) => {
            const accent = categoryAccent[project.category as ProjectCategory]
            return (
              <motion.div
                key={project.id}
                layout
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: index * 0.05, duration: 0.4 }}
                className="h-full"
              >
                <SignatureCard className="h-full rounded-2xl" accent={accent} intensity={7}>
                  <div className="group flex h-full flex-col">
                    {/* Editorial header */}
                    <div className="relative h-28 shrink-0 overflow-hidden border-b border-border/40">
                      {/* Dotted texture */}
                      <div
                        className="absolute inset-0 opacity-[0.18]"
                        style={{
                          backgroundImage: "radial-gradient(var(--card-accent) 1px, transparent 1px)",
                          backgroundSize: "14px 14px",
                        }}
                      />
                      {/* Accent wash */}
                      <div
                        className="absolute inset-0"
                        style={{
                          background:
                            "linear-gradient(135deg, color-mix(in oklch, var(--card-accent) 22%, transparent), transparent 70%)",
                        }}
                      />
                      {/* Index watermark */}
                      <span className="absolute right-3 top-0 font-mono text-6xl font-bold text-foreground/5 select-none leading-none">
                        {String(index + 1).padStart(2, "0")}
                      </span>
                      {/* Icon */}
                      <div className="absolute left-5 top-5 w-12 h-12 rounded-xl glass flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                        <FolderGit2 className="w-6 h-6" style={{ color: "var(--card-accent)" }} />
                      </div>
                      {/* Category / origin tag */}
                      <div className="absolute left-5 bottom-2.5 flex items-center gap-2 font-mono text-[10px] uppercase tracking-[0.15em]">
                        <span style={{ color: "var(--card-accent)" }}>{project.category}</span>
                        <span className="text-muted-foreground/60">/ {t(originLabels[project.origin as ProjectOrigin])}</span>
                      </div>
                    </div>

                    {/* Body */}
                    <div className="p-6 flex flex-col flex-1">
                      <div className="flex items-start justify-between gap-4 mb-3">
                        <h3 className="font-bold text-lg accent-on-hover line-clamp-1">
                          {t(project.title)}
                        </h3>
                        <div className="flex items-center gap-2 shrink-0">
                          {project.github && (
                            <a
                              href={project.github}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="w-9 h-9 rounded-xl glass flex items-center justify-center text-muted-foreground hover:text-primary transition-colors"
                              aria-label="GitHub"
                            >
                              <Github className="w-4 h-4" />
                            </a>
                          )}
                          {project.demo && (
                            <a
                              href={project.demo}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="w-9 h-9 rounded-xl glass flex items-center justify-center text-muted-foreground hover:text-primary transition-colors"
                              aria-label="Demo"
                            >
                              <ExternalLink className="w-4 h-4" />
                            </a>
                          )}
                        </div>
                      </div>

                      <p className="text-muted-foreground text-sm mb-4 leading-relaxed line-clamp-2 min-h-[2.5rem]">
                        {t(project.description)}
                      </p>

                      <div className="mt-auto flex flex-wrap gap-2">
                        {project.stack.map((tech) => (
                          <span
                            key={tech}
                            className="px-3 py-1 rounded-lg text-xs font-mono bg-secondary/50 text-secondary-foreground"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </SignatureCard>
              </motion.div>
            )
          })}
        </motion.div>

        {hasMore && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="mt-12 text-center"
          >
            <button
              onClick={() => setShowAll(!showAll)}
              className="px-8 py-3 rounded-full glass hover:bg-primary hover:text-primary-foreground transition-all font-medium"
            >
              {showAll ? (
                t({ fr: "Voir moins", en: "Show less" })
              ) : (
                t({ fr: `Voir les ${filteredProjects.length - INITIAL_COUNT} autres projets`, en: `Show ${filteredProjects.length - INITIAL_COUNT} more projects` })
              )}
            </button>
          </motion.div>
        )}
      </div>
    </section>
  )
}
