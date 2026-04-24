export type ProjectCategory = "Application" | "Web" | "Data Science";
export type ProjectOrigin = "University" | "Personal" | "Professional";

export interface Project {
  id: string;
  origin: ProjectOrigin;
  category: ProjectCategory;
  stack: string[];
  image: string;
  title: { fr: string; en: string };
  description: { fr: string; en: string };
  github?: string;
  demo?: string;
}
