import type { Interest } from "@/types/portfolio";

interface InterestsSectionCopy {
  eyebrow: string;
  title: string;
  description: string;
}

interface InterestsSectionProps {
  interests: Interest[];
  copy: InterestsSectionCopy;
}

export function InterestsSection({ interests, copy }: InterestsSectionProps) {
  return (
    <section className="surface-panel rounded-[2rem] p-8 transition-colors">
      <p className="text-xs uppercase tracking-[0.3em] text-orange-500 dark:text-orange-300">{copy.eyebrow}</p>
      <h3 className="text-heading-theme mt-2 text-3xl font-semibold">{copy.title}</h3>
      <p className="text-muted-theme mt-3 text-sm">
        {copy.description}
      </p>
      <div className="mt-6 space-y-4">
        {interests.map((interest) => (
          <article key={interest.title} className="surface-card flex gap-4 rounded-2xl p-4 transition-colors">
            <div className="flex h-12 w-12 items-center justify-center rounded-full bg-orange-500/10 text-lg text-orange-600 dark:bg-orange-500/15 dark:text-orange-200">
              {interest.icon}
            </div>
            <div>
              <p className="text-heading-theme text-sm font-semibold">{interest.title}</p>
              <p className="text-muted-theme mt-1 text-sm">{interest.detail}</p>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
