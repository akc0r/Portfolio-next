import Link from "next/link";

import type { ContactLink } from "@/types/portfolio";

interface ContactSectionProps {
  links: ContactLink[];
}

export function ContactSection({ links }: ContactSectionProps) {
  return (
    <section
      id="contact"
  className="rounded-3xl border border-slate-200/70 bg-white/80 p-10 text-slate-900 shadow-xl shadow-slate-200/40 transition-colors dark:border-white/10 dark:bg-gradient-to-r dark:from-black/40 dark:via-black/30 dark:to-orange-500/10 dark:text-white"
    >
      <div className="flex flex-col gap-6 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <p className="text-xs uppercase tracking-[0.3em] text-white/50">Prêt à prendre le départ ?</p>
          <h3 className="mt-2 text-3xl font-semibold text-white">Bâtissons votre prochain produit.</h3>
          <p className="mt-2 max-w-xl text-sm text-white/70">
            Que ce soit pour un stage, un projet freelance ou un side-project ambitieux, je suis partant pour un échange. Parlons besoins, contraintes et objectifs.
          </p>
        </div>
        <div className="flex flex-wrap gap-3 text-sm">
          {links.map((link) => (
            <Link
              key={link.label}
              href={link.href}
              className="inline-flex items-center gap-2 rounded-full border border-slate-300 px-5 py-3 text-slate-700 transition-colors hover:border-slate-500 hover:text-slate-900 dark:border-white/30 dark:text-white/80 dark:hover:border-white dark:hover:text-white"
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
