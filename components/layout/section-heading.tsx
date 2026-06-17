type AccentKey = "primary" | "accent" | "tertiary"

const ACCENT: Record<AccentKey, string> = {
  primary: "var(--primary)",
  accent: "var(--accent)",
  tertiary: "var(--tertiary)",
}

interface SectionHeadingProps {
  index: number
  eyebrow: string
  title: string
  subtitle?: string
  accent?: AccentKey
}

/**
 * The single, unified section header used across the whole site — a numbered
 * monospace eyebrow flanked by aurora hairlines, an oversized title, and a
 * giant ghost index behind it. One consistent "voice" from start to finish;
 * the per-section accent ties each section to its color identity.
 */
export function SectionHeading({ index, eyebrow, title, subtitle, accent = "primary" }: SectionHeadingProps) {
  const color = ACCENT[accent]
  const nn = String(index).padStart(2, "0")

  return (
    <div className="relative text-center mb-12 md:mb-16">
      {/* Ghost index watermark */}
      <span
        aria-hidden
        className="pointer-events-none absolute left-1/2 -translate-x-1/2 -top-9 md:-top-12 font-mono font-bold text-[6rem] md:text-[9rem] leading-none text-foreground/[0.035] select-none"
      >
        {nn}
      </span>

      {/* Numbered eyebrow */}
      <div className="relative inline-flex items-center gap-3 mb-5">
        <span className="h-px w-8 md:w-12" style={{ background: `linear-gradient(to right, transparent, ${color})` }} />
        <span className="font-mono text-xs uppercase tracking-[0.25em] text-muted-foreground">
          <span style={{ color }}>{nn}</span>
          <span className="mx-2 text-muted-foreground/40">/</span>
          {eyebrow}
        </span>
        <span className="h-px w-8 md:w-12" style={{ background: `linear-gradient(to left, transparent, ${color})` }} />
      </div>

      <h2 className="relative text-3xl md:text-5xl font-bold tracking-tight mb-4 text-balance">{title}</h2>

      {subtitle && (
        <p className="relative text-muted-foreground max-w-2xl mx-auto text-pretty">{subtitle}</p>
      )}
    </div>
  )
}
