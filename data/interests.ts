export interface Interest {
  id: string;
  title: string;
  description: string;
  icon?: string;
  image?: string;
}

export const interests: Interest[] = [
  {
    id: "formula1",
    title: "Formula 1",
    description:
      "Passionate about Formula 1 racing. Follow the championship, analyze race strategies and technical innovations in motorsport.",
    icon: "racing",
    image: "/interests/formula1.jpg",
  },
  {
    id: "sportcars",
    title: "Sport Cars",
    description:
      "Enthusiast of sport cars and automotive engineering. Interest in performance vehicles and racing technology.",
    icon: "racing",
    image: "/interests/sportcars.jpg",
  },
  {
    id: "volleyball",
    title: "Volleyball",
    description: "Active volleyball player. Team sport enthusiast.",
    icon: "barbell",
    image: "/interests/volleyball.jpg",
  },
  {
    id: "skiing",
    title: "Skiing",
    description:
      "Skiing enthusiast. Enjoy winter sports and mountain activities.",
    icon: "barbell",
    image: "/interests/skiing.jpg",
  },
];
