import type { StaticImageData } from "next/image";

export type ProjectCategory = "Application" | "Web";

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
  title: string;
  category: ProjectCategory;
  description: string;
  stack: string[];
  image: StaticImageData;
  highlight: string;
}

export interface Service {
  title: string;
  description: string;
}

export interface Passion {
  title: string;
  detail: string;
  icon: string;
}

export interface ContactLink {
  label: string;
  href: string;
}
