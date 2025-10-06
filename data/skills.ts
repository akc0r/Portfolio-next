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
        level: 90,
        comment: "Systems projects (42sh, Tiger compiler)",
      },
      {
        name: "Python",
        level: 80,
        comment: "Fast data scripts and APIs",
      },
      {
        name: "SQL",
        level: 78,
        comment: "Data modelling and performance",
      },
    ],
  },
  {
    title: "Frameworks & tooling",
    items: [
      {
        name: "React & Next.js",
        level: 82,
        comment: "UX-heavy front-end applications",
      },
      {
        name: "Symfony & PHP",
        level: 80,
        comment: "Business refactors and integrations",
      },
      {
        name: "Node.js",
        level: 78,
        comment: "Real-time APIs and services",
      },
      {
        name: "Docker",
        level: 72,
        comment: "Reproducible environments",
      },
    ],
  },
];
