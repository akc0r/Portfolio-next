/**
 * Palette bridge — connects the WebGL 3D scenes to the CSS palette config.
 *
 * The single source of truth for the site's colors is the `:root` block in
 * `app/globals.css` (the `--h-primary / --h-accent / --h-tertiary` hues).
 * Three.js can't read OKLCH directly, so this module reads those same hues at
 * runtime and converts them to hex. Result: editing a hue in globals.css
 * re-themes the CSS *and* the 3D content together — nothing else to touch.
 *
 * The lightness/chroma presets below are just "how vivid the 3D looks" knobs;
 * the color identity always comes from the CSS hues.
 */

/** Linear-light channel → 8-bit sRGB, clamped to the displayable range. */
function toByte(linear: number): number {
  const v =
    linear <= 0.0031308
      ? 12.92 * linear
      : 1.055 * Math.pow(linear, 1 / 2.4) - 0.055
  return Math.round(Math.min(1, Math.max(0, v)) * 255)
}

/** Convert an OKLCH color (L 0–1, C chroma, H degrees) to a `#rrggbb` string. */
export function oklchToHex(L: number, C: number, hDeg: number): string {
  const h = (hDeg * Math.PI) / 180
  const a = C * Math.cos(h)
  const b = C * Math.sin(h)

  // OKLab → LMS (cube roots), per Björn Ottosson's reference transform.
  const l = (L + 0.3963377774 * a + 0.2158037573 * b) ** 3
  const m = (L - 0.1055613458 * a - 0.0638541728 * b) ** 3
  const s = (L - 0.0894841775 * a - 1.291485548 * b) ** 3

  // LMS → linear sRGB
  const r = toByte(4.0767416621 * l - 3.3077115913 * m + 0.2309699292 * s)
  const g = toByte(-1.2684380046 * l + 2.6097574011 * m - 0.3413193965 * s)
  const bl = toByte(-0.0041960863 * l - 0.7034186147 * m + 1.707614701 * s)

  return "#" + [r, g, bl].map((n) => n.toString(16).padStart(2, "0")).join("")
}

/** Read a numeric CSS custom property off :root (falls back on the server). */
function cssHue(name: string, fallback: number): number {
  if (typeof window === "undefined") return fallback
  const raw = getComputedStyle(document.documentElement).getPropertyValue(name)
  const n = parseFloat(raw)
  return Number.isFinite(n) ? n : fallback
}

export interface BrandHexes {
  /** Vivid brand color — lights, primary lightformer. */
  primary: string
  /** Deep brand color — the crystal body / floor lightformer. */
  primaryDeep: string
  /** Cool accent — cyan-family lights and shapes. */
  accent: string
  /** Warm highlight — magenta-family ring. */
  tertiary: string
  /** Drifting starfield tint. */
  star: string
}

/**
 * Brand colors for the 3D scenes, derived from the live CSS hues.
 * Lightness/chroma are tuned per theme so the scene reads well on both
 * backgrounds; only the hue comes from globals.css.
 */
export function brandHexes(isLight: boolean): BrandHexes {
  const hP = cssHue("--h-primary", 292)
  const hA = cssHue("--h-accent", 207)
  const hT = cssHue("--h-tertiary", 332)

  return {
    primary: oklchToHex(isLight ? 0.55 : 0.7, 0.21, hP),
    primaryDeep: oklchToHex(isLight ? 0.5 : 0.45, 0.2, hP),
    accent: oklchToHex(isLight ? 0.62 : 0.82, 0.15, hA),
    tertiary: oklchToHex(isLight ? 0.6 : 0.76, 0.22, hT),
    star: oklchToHex(isLight ? 0.55 : 0.82, isLight ? 0.2 : 0.1, hP),
  }
}
