import type { Interest } from "@/types/portfolio";

interface InterestsSectionProps {
  interests: Interest[];
}

export function InterestsSection({ interests }: InterestsSectionProps) {
  return (
  <section className="rounded-3xl border border-slate-200/70 bg-white/90 p-8 shadow-sm transition-colors dark:border-white/20 dark:bg-[#080c1e]">
      <p className="text-xs uppercase tracking-[0.3em] text-orange-500 dark:text-orange-300">Off-track interests</p>
      <h3 className="mt-2 text-2xl font-semibold text-slate-900 dark:text-white">Centres d&apos;intérêt</h3>
      <p className="mt-3 text-sm text-slate-600 dark:text-white/70">
        Ces activités nourrissent ma vision produit, mon sens du collectif et ma capacité à rester concentré sous
        pression.
      </p>
      <div className="mt-6 space-y-4">
        {interests.map((interest) => (
          <article
            key={interest.title}
            className="flex gap-4 rounded-2xl border border-slate-200/70 bg-white/95 p-4 transition-colors dark:border-white/20 dark:bg-[#101634]"
          >
            <div className="flex h-12 w-12 items-center justify-center rounded-full bg-orange-500/10 text-lg text-orange-600 dark:bg-orange-500/15 dark:text-orange-200">
              {interest.icon}
            </div>
            <div>
              <p className="text-sm font-semibold text-slate-900 dark:text-white">{interest.title}</p>
              <p className="mt-1 text-sm text-slate-600 dark:text-white/70">{interest.detail}</p>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
