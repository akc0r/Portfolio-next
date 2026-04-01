import type { Education, Experience } from "@/types/portfolio";

interface ExperienceSectionCopy {
  eyebrow: string;
  title: string;
  description: string;
  educationEyebrow: string;
  educationTitle: string;
  emptyMission: string;
}

interface ExperienceSectionProps {
  experiences: Experience[];
  education: Education[];
  copy: ExperienceSectionCopy;
}

export function ExperienceSection({ experiences, education, copy }: ExperienceSectionProps) {
  return (
    <section id="experience" className="grid gap-12 lg:grid-cols-[1.15fr_0.85fr]">
      <div className="space-y-6">
        <div className="space-y-2">
          <p className="text-xs uppercase tracking-[0.3em] text-orange-500 dark:text-orange-300">{copy.eyebrow}</p>
          <h3 className="text-heading-theme text-3xl font-semibold">{copy.title}</h3>
          <p className="text-muted-theme max-w-2xl text-sm">
            {copy.description}
          </p>
        </div>
        <div className="relative space-y-8 border-l border-slate-200/80 pl-6 dark:border-slate-500/45">
          <span
            className="absolute left-[-6px] top-0 h-4 w-4 rounded-full border-2 border-orange-400 bg-white dark:border-orange-300 dark:bg-[#0b1528]"
            aria-hidden
          />
          {experiences.map((experience) => (
            <article
              key={experience.title}
              className="surface-card rounded-[1.75rem] p-6 transition-colors"
            >
              <p className="text-soft-theme text-xs uppercase tracking-[0.25em]">{experience.period}</p>
              <h4 className="text-heading-theme mt-2 text-lg font-semibold">{experience.title}</h4>
              <p className="text-muted-theme text-sm font-medium">
                {experience.company} · {experience.location}
              </p>
              {experience.bullets.length > 0 ? (
                <ul className="text-muted-theme mt-4 space-y-2 text-sm">
                  {experience.bullets.map((bullet) => (
                    <li key={bullet} className="flex gap-2">
                      <span aria-hidden className="mt-1 h-1.5 w-1.5 rounded-full bg-orange-500" />
                      <span>{bullet}</span>
                    </li>
                  ))}
                </ul>
              ) : (
                <p className="text-muted-theme mt-4 text-sm">
                  {copy.emptyMission}
                </p>
              )}
            </article>
          ))}
        </div>
      </div>
      <div className="space-y-6">
        <div className="space-y-2">
          <p className="text-xs uppercase tracking-[0.3em] text-orange-500 dark:text-orange-300">{copy.educationEyebrow}</p>
          <h3 className="text-heading-theme text-3xl font-semibold">{copy.educationTitle}</h3>
        </div>
        <div className="space-y-6">
          {education.map((item) => (
            <article
              key={item.title}
              className="surface-card rounded-[1.75rem] p-6 transition-colors"
            >
              <p className="text-soft-theme text-xs uppercase tracking-[0.25em]">{item.period}</p>
              <h4 className="text-heading-theme mt-2 text-lg font-semibold">{item.title}</h4>
              <p className="text-muted-theme text-sm font-medium">{item.school}</p>
              <p className="text-muted-theme mt-3 text-sm">{item.description}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
