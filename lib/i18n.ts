export const locales = ["fr", "en"] as const;
export type Locale = (typeof locales)[number];
export const defaultLocale: Locale = "fr";

export function isLocale(value: string): value is Locale {
  return (locales as readonly string[]).includes(value);
}

export function detectLocaleFromHeader(acceptLanguage: string | null): Locale {
  if (!acceptLanguage) {
    return defaultLocale;
  }

  const orderedPreferences = acceptLanguage
    .split(",")
    .map((part) => part.trim().split(";")[0]?.toLowerCase() ?? "")
    .filter(Boolean);

  for (const preference of orderedPreferences) {
    if (preference.startsWith("fr")) {
      return "fr";
    }

    if (preference.startsWith("en")) {
      return "en";
    }
  }

  return defaultLocale;
}
