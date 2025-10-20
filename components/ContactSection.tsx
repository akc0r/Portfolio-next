import Link from "next/link";

import { Button } from "@/components/ui/button";
import type { ContactLink } from "@/types/portfolio";

interface ContactSectionProps {
  links: ContactLink[];
}

function isExternal(href: string) {
  return href.startsWith("http");
}

export function ContactSection({ links }: ContactSectionProps) {
  return (
    <section
      id="contact"
      className="rounded-3xl border border-slate-200/70 bg-white/90 p-10 text-slate-900 shadow-xl shadow-orange-200/30 transition-colors dark:border-white/20 dark:bg-[#080c1e] dark:text-white"
    >
      <div className="space-y-6">
        <div className="space-y-3">
          <p className="text-xs uppercase tracking-[0.3em] text-orange-500 dark:text-orange-300">Let’s talk</p>
          <h3 className="text-3xl font-semibold text-slate-900 dark:text-white">Open to build your next product.</h3>
          <p className="max-w-2xl text-sm text-slate-600 dark:text-white/70">
            I’m available for a 6-month end-of-studies internship starting February 2025. Drop me a line and we’ll
            schedule a short call to scope the mission, the stack, and the performance you expect.
          </p>
        </div>
        <div className="flex flex-wrap gap-3">
          {links.map((link) => (
            <Button
              key={link.label}
              asChild
              variant="outline"
              className="text-sm font-medium text-slate-900 dark:text-white"
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
    </section>
  );
}
