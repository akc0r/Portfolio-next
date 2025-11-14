export interface Experience {
  id: string;
  title: string;
  company: string;
  location: string;
  startDate: Date;
  endDate: Date | null; // null si en cours
  description: string;
  achievements: string[];
  technologies: string[];
  logo?: string;
}

export const experiences: Experience[] = [
  {
    id: "elipce",
    title: "Intern Developer",
    company: "Elipce",
    location: "Valence, France",
    startDate: new Date("2024-09-01"),
    endDate: new Date("2025-01-31"),
    description:
      "Full-stack development on test management platform and blacklisted card system",
    achievements: [
      "Developed web-based test management platform with collaborative features similar to Google Docs (React.js, Node.js, PostgreSQL)",
      "Created blacklisted card visualization system for Thessaloniki metro in C# with ASP.NET",
      "Drafted precise technical documents including functional specifications and test logs",
      "Conducted comprehensive project review leading to complete redesign of specifications and database schema optimization",
      "Ensured smooth collaboration between developers and efficient deployment of 100% of planned functionalities",
    ],
    technologies: [
      "React.js",
      "Node.js",
      "PostgreSQL",
      "Docker",
      "Git",
      "C#",
      "ASP.NET",
    ],
    logo: "/logos/elipce.png",
  },
  {
    id: "ingurop",
    title: "Intern Developer",
    company: "Ing'Europ",
    location: "Valence, France",
    startDate: new Date("2023-04-01"),
    endDate: new Date("2023-06-30"),
    description: "Development and optimization of business management tools",
    achievements: [
      "Created automated backup system with Windev for rapid data recovery",
      "Optimized management tool developed in Windev and PHP",
      "Integrated responsive design functionalities into existing web platform",
    ],
    technologies: ["Windev", "PHP", "Web Development"],
    logo: "/logos/ingurop.png",
  },
];
