"use client";

import * as React from "react";
import { useTranslations } from "next-intl";
import { IconBrandGithub, IconExternalLink } from "@tabler/icons-react";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { projects } from "@/data/projects";
import { motion } from "framer-motion";

export function ProjectsSection() {
  const t = useTranslations("projects");

  // -----------------------
  // CATEGORY FILTER LOGIC
  // -----------------------
  const categories = Array.from(
    new Set(projects.map((project) => project.category))
  );

  const [selectedCategory, setSelectedCategory] = React.useState<string>("all");
  const [showAll, setShowAll] = React.useState(false);

  const featuredProjects = projects.filter((project) => project.featured);

  const filteredProjects =
    selectedCategory === "all"
      ? projects
      : projects.filter((p) => p.category === selectedCategory);

  const displayProjects = showAll
    ? filteredProjects
    : filteredProjects.filter((p) => p.featured);

  return (
    <section id="projects" className="py-20 sm:py-32">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* ----- TITLE ----- */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4">
            <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
              {t("title")}
            </span>
          </h2>
          <p className="text-lg text-slate-600 dark:text-slate-400">
            {t("subtitle")}
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4 }}
          className="flex flex-wrap justify-center gap-3 mb-12"
        >
          <Button
            variant={selectedCategory === "all" ? "default" : "outline"}
            onClick={() => setSelectedCategory("all")}
          >
            All
          </Button>

          {categories.map((cat) => (
            <Button
              key={cat}
              variant={selectedCategory === cat ? "default" : "outline"}
              onClick={() => setSelectedCategory(cat)}
              className="capitalize"
            >
              {cat}
            </Button>
          ))}
        </motion.div>

        {/* GRID */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {displayProjects.map((project, index) => {
            const thumbnail =
              project.images && project.images.length > 0
                ? project.images[0]
                : null;

            return (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Card className="overflow-hidden hover:shadow-lg hover:border-primary/50 transition-all group">
                  {/* IMAGE */}
                  <div className="aspect-video bg-gradient-to-br from-primary-light to-secondary relative overflow-hidden">
                    {thumbnail ? (
                      <img
                        src={thumbnail}
                        alt={project.title}
                        className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                      />
                    ) : (
                      <div className="absolute inset-0 flex items-center justify-center bg-black/20">
                        <span className="text-4xl font-bold text-white">
                          {project.title.charAt(0)}
                        </span>
                      </div>
                    )}
                  </div>

                  {/* CONTENT */}
                  <div className="p-6 space-y-4">
                    <div>
                      <h3 className="text-xl font-bold text-tertiary-dark dark:text-slate-100 mb-2">
                        {project.title}
                      </h3>
                      <p className="text-sm text-slate-600 dark:text-slate-400">
                        {project.description}
                      </p>
                    </div>

                    {/* TECHNOLOGIES */}
                    <div className="flex flex-wrap gap-2">
                      {project.technologies.slice(0, 3).map((tech) => (
                        <Badge
                          key={tech}
                          variant="secondary"
                          className="text-xs"
                        >
                          {tech}
                        </Badge>
                      ))}
                      {project.technologies.length > 3 && (
                        <Badge variant="secondary" className="text-xs">
                          +{project.technologies.length - 3}
                        </Badge>
                      )}
                    </div>

                    {/* ACTIONS */}
                    {(project.demoUrl || project.githubUrl) && (
                      <div className="flex gap-2 pt-2">
                        {project.demoUrl && (
                          <Button size="sm" asChild className="flex-1">
                            <a
                              href={project.demoUrl}
                              target="_blank"
                              rel="noopener noreferrer"
                            >
                              <IconExternalLink className="mr-1 h-3 w-3" />
                              {t("viewDemo")}
                            </a>
                          </Button>
                        )}
                        {project.githubUrl && (
                          <Button
                            size="sm"
                            variant="outline"
                            asChild
                            className="flex-1"
                          >
                            <a
                              href={project.githubUrl}
                              target="_blank"
                              rel="noopener noreferrer"
                            >
                              <IconBrandGithub className="mr-1 h-3 w-3" />
                              {t("viewCode")}
                            </a>
                          </Button>
                        )}
                      </div>
                    )}
                  </div>
                </Card>
              </motion.div>
            );
          })}
        </div>

        {/* SHOW ALL */}
        {filteredProjects.length > featuredProjects.length && (
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="text-center mt-12"
          >
            <Button
              size="lg"
              variant="outline"
              onClick={() => setShowAll(!showAll)}
            >
              {showAll ? t("featured") : t("all")}
            </Button>
          </motion.div>
        )}
      </div>
    </section>
  );
}
