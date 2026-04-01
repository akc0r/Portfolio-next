import Link from "next/link";

import type { Locale } from "@/lib/i18n";

interface LanguageSwitcherProps {
  currentLocale: Locale;
  labels: {
    label: string;
    fr: string;
    en: string;
  };
}

const languageOptions: Locale[] = ["fr", "en"];

export function LanguageSwitcher({ currentLocale, labels }: LanguageSwitcherProps) {
  return (
    <div className="flex items-center gap-1" aria-label={labels.label}>
      {languageOptions.map((locale) => {
        const isActive = locale === currentLocale;

        return (
          <Link
            key={locale}
            href={`/${locale}`}
            className={`surface-chip rounded-full px-3 py-2 text-[11px] font-semibold uppercase tracking-[0.2em] transition-colors ${
              isActive
                ? "border-orange-400 bg-orange-500 text-white dark:border-orange-300 dark:bg-orange-500 dark:text-white"
                : "text-soft-theme hover:border-slate-300 hover:text-slate-900 dark:hover:border-slate-300/65 dark:hover:bg-slate-800/80 dark:hover:text-white"
            }`}
          >
            {labels[locale]}
          </Link>
        );
      })}
    </div>
  );
}
