export type ProjectCategory = "Application" | "Web" | "Data Science";
export type ProjectOrigin = "University" | "Personal" | "Professional";

export interface Stat {
  value: string;
  label: string;
  detail: string;
}

export interface Skill {
  name: string;
  level: number;
  comment: string;
}

export interface SkillGroup {
  title: string;
  items: Skill[];
}

export interface Experience {
  title: string;
  company: string;
  period: string;
  location: string;
  bullets: string[];
}

export interface Education {
  title: string;
  school: string;
  period: string;
  description: string;
}

export interface Project {
  id: string;
  origin: ProjectOrigin;
  category: ProjectCategory;
  stack: string[];
  image: string;
  title?: string; // Legacy support
  description?: string; // Legacy support
}

export interface Interest {
  title: string;
  detail: string;
  icon: string;
}

export interface ContactLink {
  label: string;
  href: string;
}
