import { useTranslations } from "next-intl";

export function useExperienceTranslations(experienceId: string) {
  const t = useTranslations(`experiences.${experienceId}`);
  return {
    title: t("title"),
    company: t("company"),
    location: t("location"),
    description: t("description"),
    achievements: t.raw("achievements") as string[],
  };
}

export function useEducationTranslations(educationId: string) {
  const t = useTranslations(`education.${educationId}`);
  return {
    degree: t("degree"),
    institution: t("institution"),
    location: t("location"),
    description: t("description"),
    achievements: t.raw("achievements") as string[],
  };
}

export function useProjectTranslations(projectId: string) {
  const t = useTranslations(`projects.${projectId}`);
  return {
    title: t("title"),
    description: t("description"),
    longDescription: t("longDescription"),
  };
}

export function useInterestTranslations(interestId: string) {
  const t = useTranslations(`interests.${interestId}`);
  return {
    title: t("title"),
    description: t("description"),
  };
}
