import Image from "next/image";
import Link from "next/link";

import type { Project } from "@/types/portfolio";

import { Card, CardContent, CardFooter, CardHeader } from "./ui/card";

interface ProjectCardProps {
  project: Project;
}

export function ProjectCard({ project }: ProjectCardProps) {
  return (
    <Card className="group flex h-full flex-col overflow-hidden">
      <div className="relative h-48 w-full overflow-hidden">
        <Image
          src={project.image}
          alt={`${project.title} showcase visual`}
          className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-[1.03]"
        />
        <span className="absolute left-4 top-4 rounded-full bg-black/60 px-3 py-1 text-xs uppercase tracking-widest text-white/70">
          {project.category}
        </span>
      </div>
      <CardHeader className="pb-0">
        <h4 className="text-lg font-semibold text-white">{project.title}</h4>
        <p className="text-sm text-white/60">{project.description}</p>
      </CardHeader>
      <CardContent className="flex flex-1 flex-col gap-4">
        <div className="flex flex-wrap gap-2 text-xs uppercase tracking-widest text-white/50">
          {project.stack.map((tech) => (
            <span key={tech} className="rounded-full border border-white/10 px-3 py-1">
              {tech}
            </span>
          ))}
        </div>
        <p className="text-xs text-white/60">{project.highlight}</p>
      </CardContent>
      <CardFooter className="mt-auto">
        <Link
          href={`mailto:julien.glin@icloud.com?subject=${encodeURIComponent(`Interest in project ${project.title}`)}`}
          className="inline-flex items-center gap-2 text-sm font-semibold text-red-400 transition-colors hover:text-red-300"
        >
          Explore the deliverables
          <span aria-hidden>→</span>
        </Link>
      </CardFooter>
    </Card>
  );
}
