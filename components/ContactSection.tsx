import Link from "next/link";

import type { ContactLink } from "@/types/portfolio";

interface ContactSectionProps {
  links: ContactLink[];
}

export function ContactSection({ links }: ContactSectionProps) {
  return (
    <section
      id="contact"
      className="rounded-3xl border border-white/10 bg-gradient-to-r from-black/40 via-black/30 to-red-500/10 p-10 text-white"
    >
      <div className="flex flex-col gap-6 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <p className="text-xs uppercase tracking-[0.3em] text-white/50">Prêt à prendre le départ ?</p>
          <h3 className="mt-2 text-3xl font-semibold">Bâtissons votre prochain produit.</h3>
          <p className="mt-2 max-w-xl text-sm text-white/70">
            Que ce soit pour un stage, un projet freelance ou un side-project ambitieux, je suis partant pour un échange. Parlons besoins, contraintes et objectifs.
          </p>
        </div>
        <div className="flex flex-wrap gap-3 text-sm">
          {links.map((link) => (
            <Link
              key={link.label}
              href={link.href}
              className="inline-flex items-center gap-2 rounded-full border border-white/30 px-5 py-3 text-white/80 transition-colors hover:border-white hover:text-white"
            >
              {link.label}
              <span aria-hidden>↗</span>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
