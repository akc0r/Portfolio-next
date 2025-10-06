import type { Education, Experience } from "@/types/portfolio";

interface ExperienceSectionProps {
  experiences: Experience[];
  education: Education[];
}

export function ExperienceSection({ experiences, education }: ExperienceSectionProps) {
  return (
    <section id="experience" className="grid gap-12 lg:grid-cols-[1.1fr_0.9fr]">
      <div>
        <h3 className="text-2xl font-semibold text-white">Work experiences</h3>
        <div className="mt-6 space-y-8">
          {experiences.map((experience) => (
            <article key={experience.title} className="relative rounded-3xl border border-white/10 bg-white/5 p-6">
              <span className="absolute -left-4 top-6 h-8 w-0.5 bg-gradient-to-b from-red-500 to-transparent" />
              <p className="text-xs uppercase text-white/50">{experience.period}</p>
              <h4 className="mt-1 text-lg font-semibold text-white">{experience.title}</h4>
              <p className="text-sm font-medium text-white/70">
                {experience.company} · {experience.location}
              </p>
              <ul className="mt-4 space-y-2 text-sm text-white/70">
                {experience.bullets.map((bullet) => (
                  <li key={bullet} className="flex gap-2">
                    <span aria-hidden className="mt-1 h-1 w-1 rounded-full bg-white/50" />
                    <span>{bullet}</span>
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </div>
      <div>
        <h3 className="text-2xl font-semibold text-white">Formation</h3>
        <div className="mt-6 space-y-6">
          {education.map((item) => (
            <article key={item.title} className="rounded-3xl border border-white/10 bg-white/5 p-6">
              <p className="text-xs uppercase text-white/50">{item.period}</p>
              <h4 className="mt-1 text-lg font-semibold text-white">{item.title}</h4>
              <p className="text-sm font-medium text-white/70">{item.school}</p>
              <p className="mt-3 text-sm text-white/60">{item.description}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
