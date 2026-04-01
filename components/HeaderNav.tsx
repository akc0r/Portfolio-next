import type { Locale } from "@/lib/i18n";

import { LanguageSwitcher } from "./LanguageSwitcher";
import { ThemeToggle, type ThemeToggleCopy } from "./ThemeToggle";

interface HeaderNavCopy {
  name: string;
  role: string;
  availability: string;
  headline: string;
  nav: {
    about: string;
    skills: string;
    experience: string;
    projects: string;
    contact: string;
  };
  language: {
    label: string;
    fr: string;
    en: string;
  };
}

interface HeaderNavProps {
  locale: Locale;
  copy: HeaderNavCopy;
  themeCopy: ThemeToggleCopy;
}

export function HeaderNav({ locale, copy, themeCopy }: HeaderNavProps) {
  const navLinks = [
    { label: copy.nav.about, href: "#about" },
    { label: copy.nav.skills, href: "#skills" },
    { label: copy.nav.experience, href: "#experience" },
    { label: copy.nav.projects, href: "#projects" },
    { label: copy.nav.contact, href: "#contact" },
  ];

  return (
    <header className="space-y-6">
      <div className="surface-panel rounded-[2rem] p-6 transition-colors sm:p-8">
        <div className="flex flex-wrap items-center justify-between gap-4">
          <div className="flex flex-wrap items-center gap-2 text-[11px] font-semibold uppercase tracking-[0.28em] sm:gap-3">
            <span className="rounded-full border border-orange-300/60 bg-orange-50 px-3 py-1 text-orange-700 dark:border-orange-400/50 dark:bg-orange-500/12 dark:text-orange-200">
              {copy.name}
            </span>
            <span className="text-soft-theme">{copy.role}</span>
            <span className="rounded-full border border-teal-400/40 bg-teal-400/10 px-3 py-1 text-teal-700 dark:border-teal-300/35 dark:bg-teal-300/10 dark:text-teal-200">
              {copy.availability}
            </span>
          </div>
          <div className="flex flex-wrap items-center gap-2">
            <LanguageSwitcher currentLocale={locale} labels={copy.language} />
            <ThemeToggle copy={themeCopy} />
          </div>
        </div>

        <div className="mt-6 flex flex-col gap-5 lg:flex-row lg:items-end lg:justify-between">
          <h1 className="text-heading-theme max-w-3xl text-3xl font-semibold leading-tight sm:text-[2.35rem]">
            {copy.headline}
          </h1>
          <nav className="text-muted-theme flex flex-wrap items-center gap-2 text-sm font-medium">
            {navLinks.map((link) => (
              <a
                key={link.href}
                className="surface-chip rounded-full px-4 py-2 transition-all hover:-translate-y-0.5 hover:border-slate-300 hover:text-slate-900 dark:hover:border-slate-300/65 dark:hover:bg-slate-800/80 dark:hover:text-white"
                href={link.href}
              >
                {link.label}
              </a>
            ))}
          </nav>
        </div>
      </div>
    </header>
  );
}
