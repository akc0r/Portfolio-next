export interface Project {
  id: string;
  title: string;
  origin: string; // University, Professional, Personal
  category: string; // Data Science, Web, Application...
  description: string;
  longDescription?: string;
  technologies: string[];
  images?: string[];
  demoUrl?: string;
  githubUrl?: string;
  featured?: boolean;
  startDate?: Date;
  endDate?: Date;
}

export const projects: Project[] = [
  {
    id: "leach-protocol-simulation",
    title: "LEACH Protocol Simulation",
    origin: "University",
    category: "Data Science",
    description:
      "Simulation and analysis of the LEACH, LEACH-C, W-LEACH protocols for wireless sensor networks.",
    technologies: ["Python", "Simpy", "Next.js"],
    images: ["/leach.png"],
    featured: true,
  },
  {
    id: "ml-ops-pipeline",
    title: "ML Ops Pipeline",
    origin: "University",
    category: "Data Science",
    description:
      "End-to-end ML Ops pipeline for model training, evaluation, and deployment.",
    technologies: ["LakeFS", "Dataiku"],
    images: ["/mlops.png"],
  },
  {
    id: "eda-formula1",
    title: "EDA on Formula 1 Dataset",
    origin: "University",
    category: "Data Science",
    description:
      "Exploratory Data Analysis on a dataset containing Formula 1 race data.",
    technologies: ["Python", "Pandas", "Altair"],
    images: ["/EDA.png"],
  },
  {
    id: "tinyx",
    title: "TinyX",
    origin: "University",
    category: "Application",
    description:
      "Backend of a minimalist X (Twitter-like) social media platform.",
    technologies: [
      "Java",
      "Redis",
      "Kubernetes",
      "Maven",
      "MongoDB",
      "Elasticsearch",
      "Neo4j",
    ],
    featured: true,
    images: ["/tinyx.png"],
  },
  {
    id: "testing-platform",
    title: "Testing platform",
    origin: "Professional",
    category: "Web",
    description:
      "Internal platform for creating and managing technical tests for developers and testers.",
    technologies: ["React", "TypeScript", "Node.js", "PostgreSQL"],
    images: ["/tests.png"],
  },
  {
    id: "skiexplorer",
    title: "SkiExplorer",
    origin: "Personal",
    category: "Web",
    description:
      "Ski resort recommendation platform powered by live weather data and a multi-criteria filtering engine.",
    technologies: ["Next.js", "Tailwind", "Weather APIs"],
    images: ["/SkiExplorer.png"],
  },
  {
    id: "tiger-compiler",
    title: "Tiger Compiler",
    origin: "University",
    category: "Application",
    description:
      "End-to-end compiler for the Tiger language: lexical/syntax analysis, AST generation, and memory optimisation.",
    technologies: ["C", "Flex/Bison", "LLVM"],
    images: ["/images.png"],
  },
  {
    id: "42sh",
    title: "42sh",
    origin: "University",
    category: "Application",
    description:
      "Robust POSIX shell with pipes, redirections, and job control designed for system maintenance.",
    technologies: ["C", "Make", "Unit testing"],
    images: ["/42sh.png"],
    featured: true,
  },
  {
    id: "mini-projects-c",
    title: "Mini Projects",
    origin: "University",
    category: "Application",
    description:
      "Series of C mini-projects to strengthen fundamentals: data structures, networking, and algorithms.",
    technologies: ["C", "Sockets", "Valgrind"],
    images: ["/C_Programming_Language.png"],
  },
  {
    id: "intranet-ingeurop",
    title: "Intranet ING'EUROP",
    origin: "Professional",
    category: "Web",
    description:
      "Responsive redesign of the intranet with new real-time reporting modules for operational teams.",
    technologies: ["PHP", "Symfony", "Bootstrap"],
    images: ["/homePage.png"],
  },
  {
    id: "gghb-performance",
    title: "GGHB Performance",
    origin: "Professional",
    category: "Web",
    description:
      "E-commerce performance sprint: Core Web Vitals audit, caching, and conversion-oriented UX redesign.",
    technologies: ["Laravel", "MySQL", "Redis"],
    images: ["/hand.png"],
  },
  {
    id: "ms-motors",
    title: "MS Motors",
    origin: "Professional",
    category: "Web",
    description:
      "Fleet management app for a performance car dealership: orders tracking, CRM, and financial exports.",
    technologies: ["Windev", "SQL Server", "Docker"],
    images: ["/home_page.png"],
  },
];
