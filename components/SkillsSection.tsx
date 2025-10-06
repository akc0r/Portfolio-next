import type { SkillGroup } from "@/types/portfolio";

interface SkillsSectionProps {
  skillGroups: SkillGroup[];
}

export function SkillsSection({ skillGroups }: SkillsSectionProps) {
  return (
    <section id="skills" className="space-y-10">
      <div className="space-y-3">
        <p className="text-xs uppercase tracking-[0.3em] text-white/40">On-track skills</p>
        <h3 className="text-2xl font-semibold text-white">Engineering craft & technical stack</h3>
        <p className="max-w-2xl text-sm text-white/70">
          Day-to-day coding expertise across front-end, back-end, automation, and performance tuning. These
          ratings capture how I fine-tune the car when hands are on the wheel.
        </p>
      </div>
      <div className="grid gap-8 lg:grid-cols-2">
        {skillGroups.map((group) => (
          <div key={group.title} className="rounded-3xl border border-white/10 bg-white/5 p-6">
            <h4 className="text-lg font-semibold text-white">{group.title}</h4>
            <div className="mt-6 space-y-5">
              {group.items.map((skill) => (
                <div key={skill.name} className="space-y-2">
                  <div className="flex items-center justify-between text-sm text-white/70">
                    <span className="font-medium text-white">{skill.name}</span>
                    <span>{skill.level}%</span>
                  </div>
                  <div className="h-2 rounded-full bg-white/10">
                    <div
                      className="h-full rounded-full bg-gradient-to-r from-red-500 to-orange-400"
                      style={{ width: `${skill.level}%` }}
                    />
                  </div>
                  <p className="text-xs text-white/60">{skill.comment}</p>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
