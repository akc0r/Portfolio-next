import Link from "next/link";

import type { Project } from "@/types/portfolio";
import { ProjectCard } from "./ProjectCard";
import { Button } from "./ui/button";

interface ProjectsSectionProps {
  projects: Project[];
}

export function ProjectsSection({ projects }: ProjectsSectionProps) {
  return (
    <section id="projects" className="space-y-8">
      <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
        <div>
          <h3 className="text-2xl font-semibold text-white">Projects</h3>
          <p className="mt-2 max-w-2xl text-sm text-white/60">
            A curated list of academic and professional builds, covering application development, data workflows, and experience optimisation.
          </p>
        </div>
        <Button asChild variant="outline">
          <Link href="mailto:julien.glin@icloud.com?subject=Project%20demo%20request">Request a demo</Link>
        </Button>
      </div>
      <div className="grid gap-6 sm:grid-cols-2 xl:grid-cols-3">
        {projects.map((project) => (
          <ProjectCard key={project.title} project={project} />
        ))}
      </div>
    </section>
  );
}
