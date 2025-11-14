export interface ContactMethod {
  id: string;
  type: "email" | "phone" | "linkedin" | "github" | "other";
  label: string;
  value: string;
  url?: string;
  icon?: string;
}

export const contacts: ContactMethod[] = [
  {
    id: "email",
    type: "email",
    label: "Email",
    value: "julien.glin@epita.fr",
    url: "mailto:julien.glin@epita.fr",
  },
  {
    id: "linkedin",
    type: "linkedin",
    label: "LinkedIn",
    value: "julien-glin",
    url: "https://linkedin.com/in/julien-glin",
  },
  {
    id: "github",
    type: "github",
    label: "GitHub",
    value: "akc0r",
    url: "https://github.com/akc0r",
  },
];
