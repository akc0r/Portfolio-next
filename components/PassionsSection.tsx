import type { Passion } from "@/types/portfolio";

interface PassionsSectionProps {
  passions: Passion[];
}

export function PassionsSection({ passions }: PassionsSectionProps) {
  return (
    <section className="rounded-3xl border border-white/10 bg-white/5 p-8">
      <h3 className="text-2xl font-semibold text-white">En dehors du code</h3>
      <p className="mt-2 text-sm text-white/60">
        Ces passions nourrissent ma vision produit, mon sens du collectif et ma capacité à rester concentré sous pression.
      </p>
      <div className="mt-6 space-y-4">
        {passions.map((passion) => (
          <article key={passion.title} className="flex gap-4 rounded-2xl border border-white/10 bg-black/30 p-4">
            <div className="flex h-12 w-12 items-center justify-center rounded-full bg-white/10 text-lg">
              {passion.icon}
            </div>
            <div>
              <p className="text-sm font-semibold text-white">{passion.title}</p>
              <p className="mt-1 text-sm text-white/60">{passion.detail}</p>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
