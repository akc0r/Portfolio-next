import skiExplorerImage from "@/Portfolio-ancient/assets/img/portfolio/SkiExplorer/SkiExplorer.png";
import tigerImage from "@/Portfolio-ancient/assets/img/portfolio/tiger/images.png";
import shellImage from "@/Portfolio-ancient/assets/img/portfolio/42sh/42sh.png";
import miniProjectImage from "@/Portfolio-ancient/assets/img/portfolio/miniProject/C_Programming_Language.png";
import intranetImage from "@/Portfolio-ancient/assets/img/portfolio/ing-europ/homePage.png";
import gghbImage from "@/Portfolio-ancient/assets/img/portfolio/gghb/hand.png";
import msMotorsImage from "@/Portfolio-ancient/assets/img/portfolio/msMotors/home_page.png";

import type { Project } from "@/types/portfolio";

export const projects: Project[] = [
  {
    title: "SkiExplorer",
    category: "Web",
    description:
      "Ski resort recommendation platform powered by live weather data and a multi-criteria filtering engine.",
    stack: ["Next.js", "Tailwind", "Weather APIs"],
    image: skiExplorerImage,
    highlight: "+30% time spent in the discovery journey.",
  },
  {
    title: "Tiger Compiler",
    category: "Application",
    description:
      "End-to-end compiler for the Tiger language: lexical/syntax analysis, AST generation, and memory optimisation.",
    stack: ["C", "Flex/Bison", "LLVM"],
    image: tigerImage,
    highlight: "2× faster execution on benchmark programs.",
  },
  {
    title: "42sh",
    category: "Application",
    description:
      "Robust POSIX shell with pipes, redirections, and job control designed for system maintenance.",
    stack: ["C", "Make", "Unit testing"],
    image: shellImage,
    highlight: "95% functional coverage across POSIX test suites.",
  },
  {
    title: "Mini Projects",
    category: "Application",
    description:
      "Series of C mini-projects to strengthen fundamentals: data structures, networking, and algorithms.",
    stack: ["C", "Sockets", "Valgrind"],
    image: miniProjectImage,
    highlight: "Documented deliverables shipped in under 48 hours.",
  },
  {
    title: "Intranet ING'EUROP",
    category: "Web",
    description:
      "Responsive redesign of the intranet with new real-time reporting modules for operational teams.",
    stack: ["PHP", "Symfony", "Bootstrap"],
    image: intranetImage,
    highlight: "40% drop in support tickets related to UX issues.",
  },
  {
    title: "GGHB Performance",
    category: "Web",
    description:
      "E-commerce performance sprint: Core Web Vitals audit, caching, and conversion-oriented UX redesign.",
    stack: ["Laravel", "MySQL", "Redis"],
    image: gghbImage,
    highlight: "+18% conversion rate after overhaul.",
  },
  {
    title: "MS Motors",
    category: "Web",
    description:
      "Fleet management app for a performance car dealership: orders tracking, CRM, and financial exports.",
    stack: ["Windev", "SQL Server", "Docker"],
    image: msMotorsImage,
    highlight: "Live sales tracking with simplified reporting.",
  },
];
