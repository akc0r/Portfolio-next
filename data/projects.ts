export interface Project {
  id: string;
  title: string;
  description: string;
  longDescription?: string;
  technologies: string[];
  images: string[];
  demoUrl?: string;
  githubUrl?: string;
  featured: boolean;
  startDate: Date;
  endDate?: Date;
}

export const projects: Project[] = [
  {
    id: "project1",
    title: "Racing Dashboard",
    description:
      "Real-time telemetry dashboard for motorsport data visualization",
    longDescription:
      "A comprehensive dashboard application that provides real-time telemetry data visualization for racing teams. Features include live timing, sector analysis, and performance metrics.",
    technologies: [
      "Next.js",
      "TypeScript",
      "React",
      "Tailwind CSS",
      "WebSocket",
      "D3.js",
    ],
    images: [
      "/projects/racing-dashboard-1.png",
      "/projects/racing-dashboard-2.png",
    ],
    demoUrl: "https://racing-dashboard.demo.com",
    githubUrl: "https://github.com/yourusername/racing-dashboard",
    featured: true,
    startDate: new Date("2024-01-01"),
    endDate: new Date("2024-06-30"),
  },
  {
    id: "project2",
    title: "E-Commerce Platform",
    description: "Full-stack e-commerce solution with payment integration",
    longDescription:
      "Modern e-commerce platform with Stripe integration, inventory management, and admin dashboard.",
    technologies: ["React", "Node.js", "Express", "MongoDB", "Stripe", "Redux"],
    images: ["/projects/ecommerce-1.png", "/projects/ecommerce-2.png"],
    demoUrl: "https://ecommerce-demo.com",
    githubUrl: "https://github.com/yourusername/ecommerce",
    featured: true,
    startDate: new Date("2023-06-01"),
    endDate: new Date("2023-12-31"),
  },
  {
    id: "project3",
    title: "Task Management App",
    description: "Collaborative task management tool with real-time updates",
    technologies: ["Vue.js", "Firebase", "Tailwind CSS"],
    images: ["/projects/task-app-1.png"],
    demoUrl: "https://task-app.demo.com",
    githubUrl: "https://github.com/yourusername/task-app",
    featured: false,
    startDate: new Date("2023-01-01"),
    endDate: new Date("2023-03-31"),
  },
];
