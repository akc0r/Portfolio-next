import navigationData from "@/data/navigation.json"

/** Ordered list of full-screen sections used by the snap layout and nav. */
export const SECTIONS = [
  { id: "hero", label: { fr: "Accueil", en: "Home" } },
  { id: "about", label: navigationData.navigation.about },
  { id: "skills", label: navigationData.navigation.skills },
  { id: "experience", label: navigationData.navigation.experience },
  { id: "education", label: navigationData.navigation.education },
  { id: "projects", label: navigationData.navigation.projects },
  { id: "cv-preview", label: { fr: "CV", en: "CV" } },
  { id: "contact", label: navigationData.navigation.contact },
] as const

export const SECTION_IDS: string[] = SECTIONS.map((s) => s.id)

/** Each section's signature hue — rotates so adjacent sections never repeat. */
export const SECTION_ACCENT: Record<string, "primary" | "accent" | "tertiary"> = {
  about: "primary",
  skills: "accent",
  experience: "tertiary",
  education: "primary",
  projects: "accent",
  "cv-preview": "tertiary",
  contact: "primary",
}
