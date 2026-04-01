"use client";

import { useMemo, useState } from "react";

import { cn } from "@/lib/utils";
import type { Project, ProjectCategory, ProjectOrigin } from "@/types/portfolio";
import { ProjectCard } from "./ProjectCard";
import T from "./T";
import { useTranslation } from "@/hooks/useTranslation";

interface ProjectsSectionProps {
  projects: Project[];
}

export function ProjectsSection({ projects }: ProjectsSectionProps) {
  const { t, mounted } = useTranslation();
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
  const baseFilterClass =
    "rounded-full border px-4 py-2 text-xs font-semibold uppercase tracking-[0.22em] transition-all duration-200";
  const inactiveFilterClass =
    "surface-chip text-slate-600 hover:-translate-y-0.5 hover:border-slate-300 hover:text-slate-900 dark:text-slate-200/82 dark:hover:border-slate-300/65 dark:hover:bg-slate-800/80 dark:hover:text-white";
  const activeFilterClass =
    "border-orange-500 bg-orange-500 text-white shadow-[0_8px_20px_rgba(249,115,22,0.35)] dark:border-orange-300 dark:bg-orange-500 dark:text-white";

  const originLabel = (origin: ProjectOrigin | "All") => {
    if (origin === "All") {
      return t("projects.filters.all");
    }
    return t(`projects.filters.origin.${origin}`) ?? origin;
  };

  const categoryLabel = (category: ProjectCategory | "All") => {
    if (category === "All") {
      return t("projects.filters.all");
    }
    return t(`projects.filters.category.${category}`) ?? category;
  };

  if (!mounted) return null;

  const shownLabel = t("projects.shownLabel").replace("{count}", `${filteredProjects.length}`);

  return (
    <section id="projects" className="space-y-10">
      <div className="flex flex-wrap items-end justify-between gap-4">
        <div className="space-y-3">
          <p className="text-xs uppercase tracking-[0.3em] text-orange-500 dark:text-orange-300">
            <T id="projects.eyebrow" />
          </p>
          <h3 className="text-heading-theme text-3xl font-semibold">
            <T id="projects.title" />
          </h3>
          <p className="text-muted-theme max-w-2xl text-sm">
            <T id="projects.description" />
          </p>
        </div>
        <p className="surface-chip text-soft-theme rounded-full px-4 py-2 text-xs font-semibold uppercase tracking-[0.22em]">
          {shownLabel}
        </p>
      </div>

      <div className="surface-card flex flex-wrap gap-6 rounded-[1.8rem] p-6 transition-colors">
        <div className="space-y-3">
          <p className="text-soft-theme text-xs uppercase tracking-[0.3em]">
            <T id="projects.contextLabel" />
          </p>
          <div className="flex flex-wrap gap-2">
            {["All", ...uniqueOrigins].map((origin) => (
              <button
                key={origin}
                onClick={() => setOriginFilter(origin as typeof originFilter)}
                className={cn(baseFilterClass, originFilter === origin ? activeFilterClass : inactiveFilterClass)}
              >
                {originLabel(origin as ProjectOrigin | "All")}
              </button>
            ))}
          </div>
        </div>
        <div className="space-y-3">
          <p className="text-soft-theme text-xs uppercase tracking-[0.3em]">
            <T id="projects.surfaceLabel" />
          </p>
          <div className="flex flex-wrap gap-2">
            {["All", ...uniqueCategories].map((category) => (
              <button
                key={category}
                onClick={() => setCategoryFilter(category as typeof categoryFilter)}
                className={cn(baseFilterClass, categoryFilter === category ? activeFilterClass : inactiveFilterClass)}
              >
                {categoryLabel(category as ProjectCategory | "All")}
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
            className="surface-chip text-soft-theme self-end rounded-full px-4 py-2 text-xs font-semibold uppercase tracking-[0.22em] transition-colors hover:border-slate-400 hover:text-slate-800 dark:hover:border-slate-300/65 dark:hover:bg-slate-800/80 dark:hover:text-white"
          >
            <T id="projects.resetFilters" />
          </button>
        )}
      </div>

      {filteredProjects.length > 0 ? (
        <div className="grid gap-6 sm:grid-cols-2 xl:grid-cols-3">
          {filteredProjects.map((project) => (
            <ProjectCard
              key={project.id}
              project={project}
              labels={{
                origin: originLabel(project.origin),
                category: categoryLabel(project.category),
                caseStudySnapshot: t("projects.caseStudySnapshot"),
                imageAltSuffix: t("projects.imageAltSuffix"),
              }}
            />
          ))}
        </div>
      ) : (
        <div className="flex items-center justify-center rounded-2xl border border-dashed border-slate-300 bg-slate-50 py-16 dark:border-slate-700 dark:bg-slate-900/40">
          <p className="text-soft-theme text-center">
            <T id="projects.noResult" />
          </p>
        </div>
      )}
    </section>
  );
}
