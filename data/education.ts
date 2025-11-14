export interface Education {
  id: string;
  degree: string;
  institution: string;
  location: string;
  startDate: Date;
  endDate: Date;
  description?: string;
  achievements?: string[];
  logo?: string;
}

export const education: Education[] = [
  {
    id: "epita",
    degree: "Master of Science (MSc), Diplôme d'ingénieur",
    institution: "EPITA",
    location: "Paris, France",
    startDate: new Date("2023-09-01"),
    endDate: new Date("2026-06-30"),
    description:
      "Computer Science Engineering - French engineering degree (equivalent to MSc)",
    achievements: [
      '"Future Industry" specialization (IoT, Big Data, AI, Industrial Engineering, Cybersecurity, Industrial networks)',
      "Looking for 26-week paid internship starting March 2026",
    ],
    logo: "/logos/epita.png",
  },
  {
    id: "iut-valence",
    degree: "BUT (Bachelor universitaire de technologie)",
    institution: "IUT de Valence",
    location: "Valence, France",
    startDate: new Date("2021-09-01"),
    endDate: new Date("2023-06-30"),
    description: "Bachelor in Computer Science",
    achievements: [],
    logo: "/logos/iut-valence.png",
  },
  {
    id: "bac",
    degree: "Baccalauréat Général - Science",
    institution: "Institut Notre Dame",
    location: "Valence, France",
    startDate: new Date("2018-09-01"),
    endDate: new Date("2021-06-30"),
    description: "Scientific baccalaureate",
    achievements: [],
    logo: "/logos/notre-dame.png",
  },
];
