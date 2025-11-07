import type { Project } from "@/types/portfolio";

export const projects: Project[] = [
  {
    title: "LEACH Protocol Simulation",
    origin: "University",
    category: "Data Science",
    description: "Simulation and analysis of the LEACH, LEACH-C, W-LEACH protocols for wireless sensor networks.",
    stack: ["Python", "Simpy", "nextjs"],
    image: "/leach.png"
  },
  {
    title: "ML Ops Pipeline",
    origin: "University",
    category: "Data Science",
    description: "End-to-end ML Ops pipeline for model training, evaluation, and deployment.",
    stack: ["LakeFS", "Dataiku"],
    image: "/mlops.png"
  },
  {
    title: "EDA on Formula 1 Dataset",
    origin: "University",
    category: "Data Science",
    description: "Exploratory Data Analysis on a dataset containing Formula 1 race data.",
    stack: ["Python", "Pandas", "Altair"],
    image: "/EDA.png"
  },
  {
    title: "TinyX",
    origin: "University", 
    category: "Application",
    description:
      "Backend of a minimalist X (Twitter-like) social media platform",
    stack: ["Java", "Redis", "Kubernetes", "Maven", "MongoDB", "Elasticsearch", "Neo4j"],
    image: "/tinyx.png"
  },
  {
    title: "Testing platform",
    origin: "Professional",
    category: "Web",
    description:
      "Internal platform for creating and managing technical tests for developers and testers.",
    stack: ["React", "TypeScript", "Node.js", "PostgreSQL"],
    image: "/tests.png"
  },
  {
    title: "SkiExplorer",
    origin: "Personal",
    category: "Web",
    description:
      "Ski resort recommendation platform powered by live weather data and a multi-criteria filtering engine.",
    stack: ["Next.js", "Tailwind", "Weather APIs"],
    image: "/SkiExplorer.png"
  },
  {
    title: "Tiger Compiler",
    origin: "University",
    category: "Application",
    description:
      "End-to-end compiler for the Tiger language: lexical/syntax analysis, AST generation, and memory optimisation.",
    stack: ["C", "Flex/Bison", "LLVM"],
    image: "/images.png"
  },
  {
    title: "42sh",
    origin: "University",
    category: "Application",
    description:
      "Robust POSIX shell with pipes, redirections, and job control designed for system maintenance.",
    stack: ["C", "Make", "Unit testing"],
    image: "/42sh.png"
  },
  {
    title: "Mini Projects",
    origin: "University",
    category: "Application",
    description:
      "Series of C mini-projects to strengthen fundamentals: data structures, networking, and algorithms.",
    stack: ["C", "Sockets", "Valgrind"],
    image: "/C_Programming_Language.png"
  },
  {
    title: "Intranet ING'EUROP",
    origin: "Professional",
    category: "Web",
    description:
      "Responsive redesign of the intranet with new real-time reporting modules for operational teams.",
    stack: ["PHP", "Symfony", "Bootstrap"],
    image: "/homePage.png"
  },
  {
    title: "GGHB Performance",
    origin: "Professional",
    category: "Web",
    description:
      "E-commerce performance sprint: Core Web Vitals audit, caching, and conversion-oriented UX redesign.",
    stack: ["Laravel", "MySQL", "Redis"],
    image: "/hand.png"
  },
  {
    title: "MS Motors",
    origin: "Professional",
    category: "Web",
    description:
      "Fleet management app for a performance car dealership: orders tracking, CRM, and financial exports.",
    stack: ["Windev", "SQL Server", "Docker"],
    image: "/home_page.png"
  },
];
