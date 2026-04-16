"use client"

import { motion, useInView } from "framer-motion"
import { useRef, useState } from "react"
import { Github, ExternalLink, FolderGit2, Filter } from "lucide-react"
import { useLanguage } from "@/contexts/language-context"
import projectsData from "@/data/projects.json"
import navigationData from "@/data/navigation.json"
import type { ProjectCategory, ProjectOrigin } from "@/types/portfolio"

const categoryColors: Record<ProjectCategory, string> = {
  Web: "bg-blue-500/20 text-blue-400",
  Application: "bg-green-500/20 text-green-400",
  "Data Science": "bg-purple-500/20 text-purple-400",
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

  const filteredProjects = filter === "all" 
    ? projectsData.projects 
    : projectsData.projects.filter(p => p.category === filter)

  const categories: (ProjectCategory | "all")[] = ["all", "Web", "Application", "Data Science"]

  return (
    <section id="projects" className="py-24 px-6 relative z-10" ref={ref}>
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass text-sm text-muted-foreground mb-4">
            <FolderGit2 className="w-4 h-4 text-primary" />
            <span className="font-mono">{t({ fr: "Realisations", en: "Achievements" })}</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4">
            {t(navigationData.navigation.projects)}
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto mb-8">
            {t({
              fr: "Une selection de projets qui illustrent ma capacite a transformer des idees en solutions concretes",
              en: "A selection of projects that illustrate my ability to transform ideas into concrete solutions"
            })}
          </p>

          {/* Filter buttons */}
          <div className="flex flex-wrap items-center justify-center gap-2">
            <Filter className="w-4 h-4 text-muted-foreground mr-2" />
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setFilter(cat)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
                  filter === cat
                    ? "bg-primary text-primary-foreground"
                    : "glass text-muted-foreground hover:text-foreground"
                }`}
              >
                {cat === "all" ? t({ fr: "Tous", en: "All" }) : cat}
              </button>
            ))}
          </div>
        </motion.div>

        <motion.div
          layout
          className="grid md:grid-cols-2 gap-6"
        >
          {filteredProjects.map((project, index) => (
            <motion.div
              key={project.id}
              layout
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              whileHover={{ scale: 1.02, y: -5 }}
              className="glass rounded-2xl overflow-hidden group"
            >
              {/* Project header with gradient */}
              <div className="h-32 bg-gradient-to-br from-primary/20 via-accent/10 to-transparent relative overflow-hidden">
                <div className="absolute inset-0 flex items-center justify-center">
                  <motion.div
                    initial={{ rotate: 0 }}
                    whileHover={{ rotate: 15 }}
                    className="w-16 h-16 rounded-2xl glass flex items-center justify-center"
                  >
                    <FolderGit2 className="w-8 h-8 text-primary/70" />
                  </motion.div>
                </div>
                
                {/* Category badge */}
                <div className="absolute top-4 left-4">
                  <span className={`px-3 py-1 rounded-full text-xs font-medium ${categoryColors[project.category as ProjectCategory]}`}>
                    {project.category}
                  </span>
                </div>

                {/* Origin badge */}
                <div className="absolute top-4 right-4">
                  <span className="px-3 py-1 rounded-full text-xs font-medium bg-secondary text-secondary-foreground">
                    {t(originLabels[project.origin as ProjectOrigin])}
                  </span>
                </div>
              </div>

              <div className="p-6">
                <div className="flex items-start justify-between gap-4 mb-4">
                  <h3 className="font-bold text-xl group-hover:text-primary transition-colors">
                    {t(project.title)}
                  </h3>
                  <div className="flex items-center gap-2 shrink-0">
                    {project.github && (
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-9 h-9 rounded-xl glass flex items-center justify-center text-muted-foreground hover:text-primary hover:scale-110 transition-all"
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
                        className="w-9 h-9 rounded-xl glass flex items-center justify-center text-muted-foreground hover:text-primary hover:scale-110 transition-all"
                        aria-label="Demo"
                      >
                        <ExternalLink className="w-4 h-4" />
                      </a>
                    )}
                  </div>
                </div>

                <p className="text-muted-foreground text-sm mb-4 leading-relaxed line-clamp-2">
                  {t(project.description)}
                </p>

                <div className="flex flex-wrap gap-2">
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
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
