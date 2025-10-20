"use client";

import { useMemo, useState } from "react";

import type { Project, ProjectCategory, ProjectOrigin } from "@/types/portfolio";
import { ProjectCard } from "./ProjectCard";

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
    <section id="projects" className="space-y-10">
      <div className="space-y-3">
        <p className="text-xs uppercase tracking-[0.3em] text-orange-500 dark:text-orange-300">Selected work</p>
        <h3 className="text-2xl font-semibold text-slate-900 dark:text-white">Projects that ran like clockwork.</h3>
        <p className="max-w-2xl text-sm text-slate-600 dark:text-white/70">
          Filter by origin or surface to jump straight into the build lap that matches your needs.
        </p>
      </div>
      <div className="flex flex-wrap gap-6 rounded-3xl border border-slate-200/70 bg-white/95 p-6 shadow-sm transition-colors dark:border-white/20 dark:bg-[#101634]">
        <div className="space-y-3">
          <p className="text-xs uppercase tracking-[0.3em] text-slate-500 dark:text-white/60">Context</p>
          <div className="flex flex-wrap gap-2">
            {["All", ...uniqueOrigins].map((origin) => (
              <button
                key={origin}
                onClick={() => setOriginFilter(origin as typeof originFilter)}
                className={`rounded-full border px-4 py-2 text-xs font-semibold uppercase tracking-[0.25em] transition-colors ${originFilter === origin ? "border-slate-900 bg-slate-900 text-white dark:border-white dark:bg-white dark:text-slate-900" : "border-slate-200 bg-slate-100 text-slate-600 hover:bg-slate-200 dark:border-white/25 dark:bg-transparent dark:text-white/70 dark:hover:border-white/40 dark:hover:text-white"}`}
              >
                {origin}
              </button>
            ))}
          </div>
        </div>
        <div className="space-y-3">
          <p className="text-xs uppercase tracking-[0.3em] text-slate-500 dark:text-white/60">Surface</p>
          <div className="flex flex-wrap gap-2">
            {["All", ...uniqueCategories].map((category) => (
              <button
                key={category}
                onClick={() => setCategoryFilter(category as typeof categoryFilter)}
                className={`rounded-full border px-4 py-2 text-xs font-semibold uppercase tracking-[0.25em] transition-colors ${categoryFilter === category ? "border-orange-500 bg-orange-500 text-white dark:border-orange-400 dark:bg-orange-500 dark:text-white" : "border-slate-200 bg-slate-100 text-slate-600 hover:bg-slate-200 dark:border-white/25 dark:bg-transparent dark:text-white/70 dark:hover:border-white/40 dark:hover:text-white"}`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>
        {hasActiveFilter && (
          <button
            onClick={() => {
              setOriginFilter("All");
              setCategoryFilter("All");
            }}
            className="self-end rounded-full border border-slate-200/70 px-4 py-2 text-xs font-semibold uppercase tracking-[0.25em] text-slate-500 transition-colors hover:border-slate-400 hover:text-slate-800 dark:border-white/35 dark:text-white/70 dark:hover:border-white/45 dark:hover:text-white"
          >
            Reset filters
          </button>
        )}
      </div>
      <div className="grid gap-6 sm:grid-cols-2 xl:grid-cols-3">
        {filteredProjects.map((project) => (
          <ProjectCard key={project.title} project={project} />
        ))}
        {filteredProjects.length === 0 && (
          <p className="col-span-full rounded-3xl border border-slate-200/70 bg-white/95 p-10 text-center text-slate-500 transition-colors dark:border-white/20 dark:bg-[#101634] dark:text-white/70">
            No project matches this race setup yet.
          </p>
        )}
      </div>
    </section>
  );
}
