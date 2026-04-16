export type ProjectCategory = "Application" | "Web" | "Data Science";
export type ProjectOrigin = "University" | "Personal" | "Professional";

export interface Stat {
  value: string;
  label: { fr: string; en: string };
  detail: { fr: string; en: string };
}

export interface Skill {
  name: string;
}

export interface SkillGroup {
  title: { fr: string; en: string };
  items: Skill[];
}

export interface Experience {
  title: { fr: string; en: string };
  company: string;
  period: string;
  location: string;
  bullets: { fr: string; en: string }[];
}

export interface Education {
  title: { fr: string; en: string };
  school: string;
  period: string;
  description: { fr: string; en: string };
}

export interface Project {
  id: string;
  origin: ProjectOrigin;
  category: ProjectCategory;
  stack: string[];
  image?: string;
  title: { fr: string; en: string };
  description: { fr: string; en: string };
  github?: string;
  demo?: string;
}

export interface Interest {
  title: { fr: string; en: string };
  detail: { fr: string; en: string };
  icon: string;
}

export interface ContactLink {
  label: string;
  href: string;
  icon: string;
}

export interface PortfolioData {
  personal: {
    name: string;
    title: { fr: string; en: string };
    tagline: { fr: string; en: string };
    email: string;
    cvUrl: string;
    avatar?: string;
    location: string;
    contacts: ContactLink[];
  };
  about: { fr: string; en: string };
  stats: Stat[];
  skillGroups: SkillGroup[];
  experiences: Experience[];
  education: Education[];
  projects: Project[];
  interests: Interest[];
  navigation: {
    [key: string]: { fr: string; en: string };
  };
  ui: {
    [key: string]: { fr: string; en: string };
  };
}
