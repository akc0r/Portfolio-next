export interface Skill {
  id: string;
  name: string;
  category: "technical" | "soft";
  description?: string;
}

export const skills: Skill[] = [
  // Programming Languages
  {
    id: "typescript",
    name: "TypeScript",
    category: "technical",
    description: "JavaScript/TypeScript development",
  },
  {
    id: "python",
    name: "Python",
    category: "technical",
    description: "Python programming",
  },
  {
    id: "c",
    name: "C",
    category: "technical",
    description: "C programming",
  },
  {
    id: "java",
    name: "Java",
    category: "technical",
    description: "Java development",
  },
  {
    id: "csharp",
    name: "C#",
    category: "technical",
    description: "C# & .NET",
  },
  {
    id: "sql",
    name: "SQL",
    category: "technical",
    description: "Database management",
  },

  // Frameworks
  {
    id: "react",
    name: "React",
    category: "technical",
    description: "React.js development",
  },
  {
    id: "nodejs",
    name: "Node.js",
    category: "technical",
    description: "Backend development",
  },
  {
    id: "tailwindcss",
    name: "Tailwind CSS",
    category: "technical",
    description: "CSS framework",
  },
  {
    id: "django",
    name: "Django",
    category: "technical",
    description: "Python web framework",
  },
  {
    id: "dotnet",
    name: ".NET",
    category: "technical",
    description: "ASP.NET framework",
  },

  // Tools & DevOps
  {
    id: "docker",
    name: "Docker",
    category: "technical",
    description: "Containerization",
  },
  {
    id: "kubernetes",
    name: "Kubernetes",
    category: "technical",
    description: "Container orchestration",
  },
  {
    id: "git",
    name: "Git",
    category: "technical",
    description: "Version control",
  },
  {
    id: "postgresql",
    name: "PostgreSQL",
    category: "technical",
    description: "Relational database",
  },
  {
    id: "mongodb",
    name: "MongoDB",
    category: "technical",
    description: "NoSQL database",
  },
  {
    id: "redis",
    name: "Redis",
    category: "technical",
    description: "In-memory data store",
  },

  // Soft Skills
  {
    id: "project-management",
    name: "Project Management",
    category: "soft",
    description: "Technical project management & Scrum",
  },
  {
    id: "teamwork",
    name: "Teamwork",
    category: "soft",
    description: "Collaborative work in teams of 4-10",
  },
  {
    id: "problem-solving",
    name: "Problem Solving",
    category: "soft",
    description: "Analytical thinking & technical challenges",
  },
  {
    id: "documentation",
    name: "Documentation",
    category: "soft",
    description: "Technical specifications & reports",
  },
];
