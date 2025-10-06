import type { Experience } from "@/types/portfolio";

export const experiences: Experience[] = [
  {
    title: "Full-stack developer intern (final-year placement)",
    company: "Elipce",
    period: "September 2024 — January 2025",
    location: "Valence, France",
    bullets: [
      "Gathered requirements, authored functional specs, and designed the test plan",
      "Built a collaborative document editor (React, Node.js, WebSockets) with real-time sync",
      "Hardened deployment with Docker images, CI pipelines, and security best practices",
    ],
  },
  {
    title: "PING project — Java IDE for athletes switching careers",
    company: "EPITA Lyon",
    period: "June 2024",
    location: "Lyon, France",
    bullets: [
      "Designed an interface focused on performance metrics and goal-based learning",
      "Implemented Git commands (clone, commit, push) directly inside the IDE",
      "Delivered a Paris 2024 themed dashboard with live stats and presentation mode",
    ],
  },
  {
    title: "42sh project — POSIX-compliant shell",
    company: "EPITA Lyon",
    period: "January 2024",
    location: "Lyon, France",
    bullets: [
      "Parsed and executed complex command trees with advanced process management",
      "Implemented built-ins, environment variables, and piping mechanics",
      "Optimised memory usage and reached high unit-test coverage",
    ],
  },
  {
    title: "Software developer intern",
    company: "ING'EUROP",
    period: "March 2023 — June 2023",
    location: "Valence, France",
    bullets: [
      "Created a Windev backup system and monitoring scripts",
      "Refactored a business intranet for responsive web (PHP, Bootstrap)",
      "Provided user support and produced technical documentation",
    ],
  },
];
