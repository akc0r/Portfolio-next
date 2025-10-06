"use client";

import { useMemo, useState } from "react";

import type { Project, ProjectCategory, ProjectOrigin } from "@/types/portfolio";
import { ProjectCard } from "./ProjectCard";
import { Button } from "./ui/button";

interface ProjectsSectionProps {
  projects: Project[];
}

export function ProjectsSection({ projects }: ProjectsSectionProps) {
  const uniqueOrigins = useMemo(
    () => Array.from(new Set<ProjectOrigin>(projects.map((project) => project.origin))).sort(),
    [projects],
  );
  const uniqueCategories = useMemo(
    () => Array.from(new Set<ProjectCategory>(projects.map((project) => project.category))).sort(),
    [projects],
  );

  const [originFilter, setOriginFilter] = useState<ProjectOrigin | "All">("All");
  const [categoryFilter, setCategoryFilter] = useState<ProjectCategory | "All">("All");

  const filteredProjects = useMemo(
    () =>
      projects.filter((project) => {
        const matchesOrigin = originFilter === "All" || project.origin === originFilter;
        const matchesCategory = categoryFilter === "All" || project.category === categoryFilter;
        return matchesOrigin && matchesCategory;
      }),
    [projects, originFilter, categoryFilter],
  );

  const hasActiveFilter = originFilter !== "All" || categoryFilter !== "All";

  return (
    <section id="projects" className="space-y-8">
      <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
        <div className="space-y-3">
          <h3 className="text-2xl font-semibold text-white">Projects</h3>
          <p className="max-w-2xl text-sm text-white/60">
            Navigate by racing category or by build context to zoom into the right delivery lap.
          </p>
        </div>
        {hasActiveFilter && (
          <Button variant="ghost" onClick={() => { setOriginFilter("All"); setCategoryFilter("All"); }}>
            Reset filters
          </Button>
        )}
      </div>
      <div className="flex flex-wrap gap-6 rounded-3xl border border-white/10 bg-white/5 p-6">
        <div className="space-y-3">
          <p className="text-xs uppercase tracking-[0.3em] text-white/40">Context</p>
          <div className="flex flex-wrap gap-2">
            <Button
              variant={originFilter === "All" ? "default" : "outline"}
              onClick={() => setOriginFilter("All")}
            >
              All
            </Button>
            {uniqueOrigins.map((origin) => (
              <Button
                key={origin}
                variant={originFilter === origin ? "default" : "outline"}
                onClick={() => setOriginFilter(origin)}
              >
                {origin}
              </Button>
            ))}
          </div>
        </div>
        <div className="space-y-3">
          <p className="text-xs uppercase tracking-[0.3em] text-white/40">Surface</p>
          <div className="flex flex-wrap gap-2">
            <Button
              variant={categoryFilter === "All" ? "default" : "outline"}
              onClick={() => setCategoryFilter("All")}
            >
              All
            </Button>
            {uniqueCategories.map((category) => (
              <Button
                key={category}
                variant={categoryFilter === category ? "default" : "outline"}
                onClick={() => setCategoryFilter(category)}
              >
                {category}
              </Button>
            ))}
          </div>
        </div>
      </div>
      <div className="grid gap-6 sm:grid-cols-2 xl:grid-cols-3">
        {filteredProjects.map((project) => (
          <ProjectCard key={project.title} project={project} />
        ))}
        {filteredProjects.length === 0 && (
          <p className="col-span-full rounded-3xl border border-white/10 bg-white/5 p-10 text-center text-white/60">
            No project matches this race setup yet.
          </p>
        )}
      </div>
    </section>
  );
}
