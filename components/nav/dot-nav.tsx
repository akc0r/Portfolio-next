"use client"

import { useLanguage } from "@/contexts/language-context"
import { SECTIONS, SECTION_IDS } from "./sections"
import { useActiveSection } from "./use-active-section"

/**
 * Vertical dot navigation pinned to the right edge (desktop only). The active
 * section's dot blooms into an aurora gradient; labels reveal on hover.
 */
export function DotNav() {
  const { t } = useLanguage()
  const active = useActiveSection(SECTION_IDS)

  const go = (id: string) =>
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" })

  return (
    <nav
      aria-label="Sections"
      className="hidden lg:flex fixed right-6 top-1/2 -translate-y-1/2 z-50 flex-col items-end gap-4"
    >
      {SECTIONS.map((s) => {
        const isActive = active === s.id
        return (
          <button
            key={s.id}
            onClick={() => go(s.id)}
            className="group flex items-center gap-3 cursor-pointer"
            aria-label={t(s.label)}
            aria-current={isActive ? "true" : undefined}
          >
            <span
              className={`font-mono text-[11px] uppercase tracking-[0.2em] transition-all duration-300 ${
                isActive
                  ? "opacity-100 text-foreground"
                  : "opacity-0 -translate-x-2 group-hover:opacity-70 group-hover:translate-x-0 text-muted-foreground"
              }`}
            >
              {t(s.label)}
            </span>
            <span className="relative flex h-3 w-3 items-center justify-center">
              <span
                className={`rounded-full transition-all duration-300 ${
                  isActive
                    ? "h-3 w-3 bg-gradient-to-br from-primary via-tertiary to-accent"
                    : "h-2 w-2 bg-muted-foreground/40 group-hover:bg-muted-foreground"
                }`}
              />
              {isActive && (
                <span className="absolute h-3 w-3 rounded-full bg-primary/50 blur-[5px]" />
              )}
            </span>
          </button>
        )
      })}
    </nav>
  )
}
