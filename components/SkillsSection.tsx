import type { IconType } from "react-icons";
import {
  SiC,
  SiCplusplus,
  SiDocker,
  SiJavascript,
  SiNextdotjs,
  SiNodedotjs,
  SiPhp,
  SiPostgresql,
  SiPython,
  SiReact,
  SiSymfony,
  SiTypescript,
} from "react-icons/si";

import { cn } from "@/lib/utils";
import type { SkillGroup } from "@/types/portfolio";

interface SkillsSectionCopy {
  eyebrow: string;
  title: string;
  description: string;
  skillCountLabel: string;
  technologiesTitle: string;
  technologiesDescription: string;
  technologiesCountLabel: string;
}

interface SkillsSectionProps {
  skillGroups: SkillGroup[];
  copy: SkillsSectionCopy;
}

interface TechnologyCard {
  name: string;
  icon: IconType;
  iconClassName: string;
}

const technologyCards: TechnologyCard[] = [
  { name: "TypeScript", icon: SiTypescript, iconClassName: "bg-sky-500/18 text-sky-700 dark:bg-sky-400/20 dark:text-sky-200" },
  { name: "JavaScript", icon: SiJavascript, iconClassName: "bg-yellow-300/30 text-yellow-800 dark:bg-yellow-300/20 dark:text-yellow-200" },
  { name: "React", icon: SiReact, iconClassName: "bg-cyan-400/16 text-cyan-700 dark:bg-cyan-300/20 dark:text-cyan-200" },
  { name: "Next.js", icon: SiNextdotjs, iconClassName: "bg-slate-500/18 text-slate-800 dark:bg-slate-300/16 dark:text-slate-100" },
  { name: "Node.js", icon: SiNodedotjs, iconClassName: "bg-emerald-400/18 text-emerald-700 dark:bg-emerald-300/20 dark:text-emerald-200" },
  { name: "Python", icon: SiPython, iconClassName: "bg-blue-400/18 text-blue-700 dark:bg-blue-300/20 dark:text-blue-200" },
  { name: "PostgreSQL", icon: SiPostgresql, iconClassName: "bg-indigo-400/18 text-indigo-700 dark:bg-indigo-300/20 dark:text-indigo-200" },
  { name: "Docker", icon: SiDocker, iconClassName: "bg-sky-400/20 text-sky-700 dark:bg-sky-300/22 dark:text-sky-200" },
  { name: "PHP", icon: SiPhp, iconClassName: "bg-violet-400/16 text-violet-700 dark:bg-violet-300/18 dark:text-violet-200" },
  { name: "Symfony", icon: SiSymfony, iconClassName: "bg-slate-500/18 text-slate-800 dark:bg-slate-300/16 dark:text-slate-100" },
  { name: "C", icon: SiC, iconClassName: "bg-orange-400/16 text-orange-700 dark:bg-orange-300/20 dark:text-orange-200" },
  { name: "C++", icon: SiCplusplus, iconClassName: "bg-blue-500/16 text-blue-700 dark:bg-blue-300/20 dark:text-blue-200" },
];

export function SkillsSection({ skillGroups, copy }: SkillsSectionProps) {
  return (
    <section id="skills" aria-labelledby="skills-heading" className="space-y-10">
      <div className="space-y-3">
        <p className="text-xs uppercase tracking-[0.3em] text-orange-500 dark:text-orange-300">{copy.eyebrow}</p>
        <h3 id="skills-heading" className="text-heading-theme text-3xl font-semibold">
          {copy.title}
        </h3>
        <p className="text-muted-theme max-w-2xl text-sm">
          {copy.description}
        </p>
      </div>
      <div className="grid gap-6 lg:grid-cols-2">
        {skillGroups.map((group) => (
          <article
            key={group.title}
            className="surface-card rounded-[1.9rem] p-6 transition-all duration-300 hover:-translate-y-0.5"
          >
            <div className="flex items-center justify-between gap-3">
              <h4 className="text-heading-theme text-lg font-semibold">{group.title}</h4>
              <span className="surface-chip text-soft-theme rounded-full px-3 py-1 text-[11px] uppercase tracking-[0.2em]">
                {copy.skillCountLabel.replace("{count}", `${group.items.length}`)}
              </span>
            </div>
            <div className="mt-6 space-y-5">
              {group.items.map((skill) => (
                <div key={skill.name} className="space-y-3">
                  <div className="text-muted-theme flex items-center justify-between text-sm">
                    <span className="text-heading-theme font-medium">{skill.name}</span>
                    <span>{skill.level}%</span>
                  </div>
                  <div className="h-2.5 rounded-full bg-slate-200/80 dark:bg-slate-700/60">
                    <div
                      className="h-full rounded-full bg-gradient-to-r from-orange-500 via-orange-400 to-amber-300 shadow-[0_6px_16px_rgba(249,115,22,0.32)] transition-all duration-500"
                      style={{ width: `${skill.level}%` }}
                    />
                  </div>
                  <p className="text-soft-theme text-xs">{skill.comment}</p>
                </div>
              ))}
            </div>
          </article>
        ))}
      </div>

      <article className="surface-card rounded-[1.9rem] p-6 transition-all duration-300 hover:-translate-y-0.5">
        <div className="flex flex-wrap items-center justify-between gap-3">
          <h4 className="text-heading-theme text-lg font-semibold">{copy.technologiesTitle}</h4>
          <span className="surface-chip text-soft-theme rounded-full px-3 py-1 text-[11px] uppercase tracking-[0.2em]">
            {copy.technologiesCountLabel.replace("{count}", `${technologyCards.length}`)}
          </span>
        </div>
        <p className="text-muted-theme mt-3 max-w-3xl text-sm">{copy.technologiesDescription}</p>

        <div className="mt-6 grid gap-3 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {technologyCards.map(({ name, icon: Icon, iconClassName }) => (
            <div
              key={name}
              className="surface-chip flex items-center gap-3 rounded-2xl px-3 py-2.5 transition-all duration-300 hover:-translate-y-0.5 hover:border-slate-400 hover:shadow-[0_10px_20px_rgba(15,23,42,0.12)] dark:hover:border-slate-300/65 dark:hover:bg-slate-800/80"
            >
              <span
                className={cn(
                  "inline-flex h-9 w-9 items-center justify-center rounded-xl border border-white/20 text-[17px]",
                  iconClassName,
                )}
                aria-hidden
              >
                <Icon />
              </span>
              <span className="text-heading-theme text-sm font-medium">{name}</span>
            </div>
          ))}
        </div>
      </article>
    </section>
  );
}
