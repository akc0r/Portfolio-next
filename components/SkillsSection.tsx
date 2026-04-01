import type { SkillGroup } from "@/types/portfolio";

interface SkillsSectionCopy {
  eyebrow: string;
  title: string;
  description: string;
  skillCountLabel: string;
}

interface SkillsSectionProps {
  skillGroups: SkillGroup[];
  copy: SkillsSectionCopy;
}

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
    </section>
  );
}
