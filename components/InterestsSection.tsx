import type { Interest } from "@/types/portfolio";

interface InterestsSectionProps {
  interests: Interest[];
}

export function InterestsSection({ interests }: InterestsSectionProps) {
  return (
    <section className="rounded-3xl border border-white/10 bg-white/5 p-8">
      <p className="text-xs uppercase tracking-[0.3em] text-white/40">Off-track interests</p>
      <h3 className="mt-2 text-2xl font-semibold text-white">Centres d&apos;intérêt</h3>
      <p className="mt-3 text-sm text-white/60">
        Ces activités nourrissent ma vision produit, mon sens du collectif et ma capacité à rester concentré sous
        pression.
      </p>
      <div className="mt-6 space-y-4">
        {interests.map((interest) => (
          <article key={interest.title} className="flex gap-4 rounded-2xl border border-white/10 bg-black/30 p-4">
            <div className="flex h-12 w-12 items-center justify-center rounded-full bg-white/10 text-lg">
              {interest.icon}
            </div>
            <div>
              <p className="text-sm font-semibold text-white">{interest.title}</p>
              <p className="mt-1 text-sm text-white/60">{interest.detail}</p>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
