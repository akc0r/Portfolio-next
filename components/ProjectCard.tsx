"use client";

import Image from "next/image";
import { useState } from "react";

import type { Project } from "@/types/portfolio";

import { Card, CardContent, CardHeader } from "./ui/card";

const originStyles: Record<Project["origin"], string> = {
  University: "bg-sky-500/90 text-white",
  Personal: "bg-amber-400/90 text-black",
  Professional: "bg-orange-500/90 text-white",
};

interface ProjectCardProps {
  project: Project;
}

export function ProjectCard({ project }: ProjectCardProps) {
  const [imageSrc, setImageSrc] = useState(
    project.image && project.image.trim().length > 0 ? project.image : "/project-placeholder.svg",
  );

  return (
    <Card className="group flex h-full flex-col overflow-hidden">
      <div className="relative h-48 w-full overflow-hidden">
        <Image
          src={imageSrc}
          alt={`${project.title} showcase visual`}
          fill
          sizes="(min-width: 1280px) 33vw, (min-width: 640px) 50vw, 100vw"
          className="object-cover transition-transform duration-300 group-hover:scale-[1.03]"
          onError={() => {
            if (imageSrc !== "/project-placeholder.svg") {
              setImageSrc("/project-placeholder.svg");
            }
          }}
        />
        <div className="absolute left-4 top-4 flex flex-col gap-2">
          <span
            className={`rounded-full px-3 py-1 text-[11px] font-semibold uppercase tracking-widest ${originStyles[project.origin]}`}
          >
            {project.origin}
          </span>
          <span className="w-fit rounded-full bg-slate-900/70 px-3 py-1 text-[11px] uppercase tracking-widest text-white/70 dark:bg-[#0c1230]">
            {project.category}
          </span>
        </div>
        <span className="absolute inset-x-0 bottom-0 h-1 bg-gradient-to-r from-orange-400 via-white/60 to-transparent opacity-70 transition-opacity duration-300 group-hover:opacity-90" />
      </div>
      <CardHeader className="pb-0">
        <h4 className="text-lg font-semibold text-slate-900 dark:text-white">{project.title}</h4>
        <p className="text-sm text-slate-600 dark:text-white/70">{project.description}</p>
      </CardHeader>
      <CardContent className="flex flex-1 flex-col gap-4">
        <div className="flex flex-wrap gap-2 text-xs uppercase tracking-widest text-slate-500 dark:text-white/50">
          {project.stack.map((tech) => (
            <span key={tech} className="rounded-full border border-slate-200/80 px-3 py-1 transition-colors dark:border-white/25 dark:bg-[#0c1230]">
              {tech}
            </span>
          ))}
        </div>
      </CardContent>
    </Card>
  );
}
