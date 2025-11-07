import type { SkillGroup } from "@/types/portfolio";

export const skillGroups: SkillGroup[] = [
  {
    title: "Languages & fundamentals",
    items: [
      {
        name: "TypeScript / JavaScript",
        level: 85,
        comment: "Reactive interfaces and modern tooling",
      },
      {
        name: "C & C++",
        level: 65,
        comment: "Systems projects (42sh, Tiger compiler)",
      },
      {
        name: "Python",
        level: 80,
        comment: "Fast data scripts and APIs",
      },
      {
        name: "SQL",
        level: 95,
        comment: "Data modelling and performance",
      },
    ],
  },
  {
    title: "Frameworks & tooling",
    items: [
      {
        name: "React & Next.js",
        level: 80,
        comment: "UX-heavy front-end applications",
      },
      {
        name: "Symfony & PHP",
        level: 60,
        comment: "Business refactors and integrations",
      },
      {
        name: "Node.js",
        level: 80,
        comment: "Real-time APIs and services",
      },
      {
        name: "Docker",
        level: 75,
        comment: "Reproducible environments",
      },
    ],
  },
];
