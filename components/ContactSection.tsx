import Link from "next/link";

import { Button } from "@/components/ui/button";
import type { ContactLink } from "@/types/portfolio";

interface ContactSectionCopy {
  eyebrow: string;
  title: string;
  description: string;
  channelsLabel: string;
}

interface ContactSectionProps {
  links: ContactLink[];
  copy: ContactSectionCopy;
}

function isExternal(href: string) {
  return href.startsWith("http");
}

export function ContactSection({ links, copy }: ContactSectionProps) {
  return (
    <section id="contact" aria-labelledby="contact-heading" className="surface-panel text-heading-theme rounded-[2.3rem] p-8 transition-colors sm:p-10">
      <div className="grid gap-8 lg:grid-cols-[1.2fr_0.8fr] lg:items-end">
        <div className="space-y-4">
          <p className="text-xs uppercase tracking-[0.3em] text-orange-500 dark:text-orange-300">{copy.eyebrow}</p>
          <h3 id="contact-heading" className="text-heading-theme text-3xl font-semibold leading-tight">
            {copy.title}
          </h3>
          <p className="text-muted-theme max-w-2xl text-sm">
            {copy.description}
          </p>
        </div>

        <div className="surface-card rounded-2xl p-5">
          <p className="text-soft-theme text-xs uppercase tracking-[0.25em]">{copy.channelsLabel}</p>
          <div className="mt-4 flex flex-wrap gap-3">
            {links.map((link) => (
              <Button
                key={link.label}
                asChild
                variant="outline"
                className="text-sm font-medium text-slate-900 transition-all duration-300 hover:-translate-y-0.5 dark:text-slate-100"
              >
                <Link
                  href={link.href}
                  target={isExternal(link.href) ? "_blank" : undefined}
                  rel={isExternal(link.href) ? "noreferrer" : undefined}
                >
                  {link.label}
                  <span aria-hidden className="ml-2">↗</span>
                </Link>
              </Button>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
