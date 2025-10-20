import type { Education, Experience } from "@/types/portfolio";

interface ExperienceSectionProps {
  experiences: Experience[];
  education: Education[];
}

export function ExperienceSection({ experiences, education }: ExperienceSectionProps) {
  return (
    <section id="experience" className="grid gap-12 lg:grid-cols-[1.15fr_0.85fr]">
      <div className="space-y-6">
  <div className="space-y-2">
          <p className="text-xs uppercase tracking-[0.3em] text-orange-500 dark:text-orange-300">Experience</p>
          <h3 className="text-2xl font-semibold text-slate-900 dark:text-white">Roles that kept me track-side.</h3>
        </div>
        <div className="relative space-y-8 border-l border-slate-200/70 pl-6 dark:border-white/20">
          <span className="absolute left-[-5px] top-0 h-4 w-4 rounded-full border-2 border-orange-400 bg-white dark:border-orange-300 dark:bg-[#080c1e]" aria-hidden />
          {experiences.map((experience) => (
            <article
              key={experience.title}
              className="rounded-3xl border border-slate-200/70 bg-white/95 p-6 shadow-sm transition-colors dark:border-white/20 dark:bg-[#101634]"
            >
              <p className="text-xs uppercase tracking-[0.25em] text-slate-500 dark:text-white/60">{experience.period}</p>
              <h4 className="mt-2 text-lg font-semibold text-slate-900 dark:text-white">{experience.title}</h4>
              <p className="text-sm font-medium text-slate-600 dark:text-white/70">
                {experience.company} · {experience.location}
              </p>
              <ul className="mt-4 space-y-2 text-sm text-slate-600 dark:text-white/65">
                {experience.bullets.map((bullet) => (
                  <li key={bullet} className="flex gap-2">
                    <span aria-hidden className="mt-1 h-1.5 w-1.5 rounded-full bg-orange-500" />
                    <span>{bullet}</span>
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </div>
      <div className="space-y-6">
        <div className="space-y-2">
          <p className="text-xs uppercase tracking-[0.3em] text-orange-500 dark:text-orange-300">Education</p>
          <h3 className="text-2xl font-semibold text-slate-900 dark:text-white">Formation</h3>
        </div>
        <div className="space-y-6">
          {education.map((item) => (
            <article
              key={item.title}
              className="rounded-3xl border border-slate-200/70 bg-white/95 p-6 shadow-sm transition-colors dark:border-white/20 dark:bg-[#101634]"
            >
              <p className="text-xs uppercase tracking-[0.25em] text-slate-500 dark:text-white/60">{item.period}</p>
              <h4 className="mt-2 text-lg font-semibold text-slate-900 dark:text-white">{item.title}</h4>
              <p className="text-sm font-medium text-slate-600 dark:text-white/70">{item.school}</p>
              <p className="mt-3 text-sm text-slate-600 dark:text-white/65">{item.description}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
