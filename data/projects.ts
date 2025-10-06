import type { Project } from "@/types/portfolio";

export const projects: Project[] = [
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
