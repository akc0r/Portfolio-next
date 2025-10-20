import type { SkillGroup } from "@/types/portfolio";

interface SkillsSectionProps {
  skillGroups: SkillGroup[];
}

export function SkillsSection({ skillGroups }: SkillsSectionProps) {
  return (
    <section id="skills" className="space-y-10">
      <div className="space-y-3">
        <p className="text-xs uppercase tracking-[0.3em] text-orange-500 dark:text-orange-300">Skillset</p>
        <h3 className="text-2xl font-semibold text-slate-900 dark:text-white">Engineering craft & telemetry mindset</h3>
        <p className="max-w-2xl text-sm text-slate-600 dark:text-white/70">
          Daily stack across front-end, back-end, automation, and data. Each bar is a lap time indicator—how fast I can
          react when the product needs a performance boost.
        </p>
      </div>
      <div className="grid gap-6 lg:grid-cols-2">
        {skillGroups.map((group) => (
          <div
            key={group.title}
            className="rounded-3xl border border-slate-200/70 bg-white/95 p-6 shadow-sm transition-colors dark:border-white/20 dark:bg-[#101634]"
          >
            <h4 className="text-lg font-semibold text-slate-900 dark:text-white">{group.title}</h4>
            <div className="mt-6 space-y-5">
              {group.items.map((skill) => (
                <div key={skill.name} className="space-y-3">
                  <div className="flex items-center justify-between text-sm text-slate-600 dark:text-white/70">
                    <span className="font-medium text-slate-900 dark:text-white">{skill.name}</span>
                    <span>{skill.level}%</span>
                  </div>
                  <div className="h-2 rounded-full bg-slate-200 dark:bg-white/10">
                    <div
                      className="h-full rounded-full bg-gradient-to-r from-orange-500 to-amber-400"
                      style={{ width: `${skill.level}%` }}
                    />
                  </div>
                  <p className="text-xs text-slate-600 dark:text-white/60">{skill.comment}</p>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
