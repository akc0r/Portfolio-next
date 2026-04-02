"use client";

import { usePathname, useRouter } from "next/navigation";

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
  const router = useRouter();
  const pathname = usePathname();

  const options: Record<Locale, { flag: string; name: string }> = {
    fr: {
      flag: "🇫🇷",
      name: labels.fr,
    },
    en: {
      flag: "🇬🇧",
      name: labels.en,
    },
  };

  return (
    <div className="relative" aria-label={labels.label}>
      <label htmlFor="language-select" className="sr-only">
        {labels.label}
      </label>
      <select
        id="language-select"
        defaultValue={currentLocale}
        onChange={(event) => {
          const locale = event.target.value as Locale;
          const segments = pathname.split("/");

          if (segments[1] === "fr" || segments[1] === "en") {
            segments[1] = locale;
          } else {
            segments.splice(1, 0, locale);
          }

          const nextPath = segments.join("/") || `/${locale}`;

          router.push(nextPath);
        }}
        className="surface-chip min-w-[158px] appearance-none rounded-full py-2 pl-3 pr-10 text-xs font-semibold tracking-[0.12em] text-slate-700 transition-colors hover:border-slate-400 hover:text-slate-900 focus:outline-none focus-visible:ring-2 focus-visible:ring-orange-400 dark:text-slate-100 dark:hover:border-slate-300/65 dark:hover:bg-slate-800/80"
      >
        {languageOptions.map((locale) => (
          <option key={locale} value={locale}>
            {options[locale].flag} {options[locale].name}
          </option>
        ))}
      </select>
      <span
        className="pointer-events-none absolute right-3 top-1/2 -translate-y-1/2 text-[11px] text-slate-500 dark:text-slate-300"
        aria-hidden
      >
        ▾
      </span>
    </div>
  );
}
