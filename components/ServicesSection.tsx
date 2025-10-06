import type { Service } from "@/types/portfolio";

interface ServicesSectionProps {
  services: Service[];
}

export function ServicesSection({ services }: ServicesSectionProps) {
  return (
    <section className="rounded-3xl border border-white/10 bg-white/5 p-8">
      <h3 className="text-2xl font-semibold text-white">Services & valeur ajoutée</h3>
      <div className="mt-6 space-y-5 text-sm text-white/70">
        {services.map((service) => (
          <article key={service.title} className="rounded-2xl border border-white/10 bg-black/30 p-4">
            <p className="text-sm font-semibold text-white">{service.title}</p>
            <p className="mt-2 text-sm text-white/60">{service.description}</p>
          </article>
        ))}
      </div>
    </section>
  );
}
