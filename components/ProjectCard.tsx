"use client";

import Image from "next/image";
import { useState } from "react";

import type { Project } from "@/types/portfolio";
import T from "./T";
import { Card, CardContent, CardHeader } from "./ui/card";

const originStyles: Record<Project["origin"], string> = {
  University: "bg-sky-500/90 text-white",
  Personal: "bg-amber-300/90 text-amber-950",
  Professional: "bg-orange-500/90 text-white",
};

interface ProjectCardProps {
  project: Project;
  labels: {
    origin: string;
    category: string;
    caseStudySnapshot: string;
    imageAltSuffix: string;
  };
}

export function ProjectCard({ project, labels }: ProjectCardProps) {
  const [imageSrc, setImageSrc] = useState(
    project.image && project.image.trim().length > 0 ? project.image : "/project-placeholder.svg",
  );

  const projectTitleKey = `project.${project.id}.title`;
  const projectDescKey = `project.${project.id}.description`;

  return (
    <Card className="group flex h-full flex-col overflow-hidden">
      <div className="relative h-52 w-full overflow-hidden">
        <Image
          src={imageSrc}
          alt={`${project.id} ${labels.imageAltSuffix}`}
          fill
          sizes="(min-width: 1280px) 33vw, (min-width: 640px) 50vw, 100vw"
          className="object-cover transition-transform duration-500 group-hover:scale-[1.06]"
          onError={() => {
            if (imageSrc !== "/project-placeholder.svg") {
              setImageSrc("/project-placeholder.svg");
            }
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-slate-950/55 via-slate-900/10 to-transparent dark:from-slate-950/70" />
        <div className="absolute left-4 top-4 flex flex-col gap-2">
          <span
            className={`rounded-full px-3 py-1 text-[11px] font-semibold uppercase tracking-widest ${originStyles[project.origin]}`}
          >
            {labels.origin}
          </span>
          <span className="w-fit rounded-full border border-white/20 bg-slate-900/65 px-3 py-1 text-[11px] uppercase tracking-widest text-white/85 backdrop-blur dark:bg-slate-950/70">
            {labels.category}
          </span>
        </div>
        <span className="absolute inset-x-0 bottom-0 h-1 bg-gradient-to-r from-orange-400 via-amber-300 to-transparent opacity-80 transition-opacity duration-300 group-hover:opacity-100" />
      </div>
      <CardHeader className="pb-2">
        <h4 className="text-heading-theme text-lg font-semibold">
          <T id={projectTitleKey} defaultValue={project.title || project.id} />
        </h4>
        <p className="text-muted-theme text-sm leading-relaxed">
          <T id={projectDescKey} defaultValue={project.description || ""} />
        </p>
      </CardHeader>
      <CardContent className="flex flex-1 flex-col gap-4">
        <div className="text-soft-theme flex flex-wrap gap-2 text-[11px] uppercase tracking-[0.18em]">
          {project.stack.map((tech) => (
            <span key={tech} className="surface-chip rounded-full px-3 py-1 transition-colors">
              {tech}
            </span>
          ))}
        </div>
        <p className="text-soft-theme mt-auto text-xs uppercase tracking-[0.2em]">{labels.caseStudySnapshot}</p>
      </CardContent>
    </Card>
  );
}
