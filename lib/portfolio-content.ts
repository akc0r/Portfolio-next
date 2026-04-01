import { contactLinks } from "@/data/contactLinks";
import { education } from "@/data/education";
import { experiences } from "@/data/experiences";
import { interests } from "@/data/interests";
import { projects } from "@/data/projects";
import { skillGroups } from "@/data/skills";
import { stats } from "@/data/stats";
import en from "@/lang/en";
import fr from "@/lang/fr";
import type { Locale } from "@/lib/i18n";
import type { Project, ProjectCategory, ProjectOrigin } from "@/types/portfolio";

type Dictionary = Record<string, string>;

const dictionaries: Record<Locale, Dictionary> = {
  en,
  fr,
};

function createTranslator(dictionary: Dictionary) {
  return (key: string, fallback?: string): string => dictionary[key] ?? fallback ?? key;
}

export interface LocalizedProject extends Project {
  title: string;
  description: string;
}

export interface ProjectsSectionCopy {
  eyebrow: string;
  title: string;
  description: string;
  shownLabel: string;
  contextLabel: string;
  surfaceLabel: string;
  resetFilters: string;
  noResult: string;
  allLabel: string;
  originLabels: Record<ProjectOrigin, string>;
  categoryLabels: Record<ProjectCategory, string>;
  caseStudySnapshot: string;
  imageAltSuffix: string;
}

export function getPortfolioContent(locale: Locale) {
  const t = createTranslator(dictionaries[locale]);

  const localizedStats = stats.map((stat, index) => ({
    ...stat,
    label: t(`hero.stat.${index + 1}.label`, stat.label),
    detail: t(`hero.stat.${index + 1}.detail`, stat.detail),
  }));

  const localizedProjects: LocalizedProject[] = projects.map((project) => ({
    ...project,
    title: t(`project.${project.id}.title`, project.title ?? project.id),
    description: t(`project.${project.id}.description`, project.description ?? ""),
  }));

  const localizedInterests = interests.map((interest, index) => ({
    ...interest,
    title: t(`interest.${index + 1}.title`, interest.title),
    detail: t(`interest.${index + 1}.detail`, interest.detail),
  }));

  const localizedContactLinks = contactLinks.map((link, index) => ({
    ...link,
    label: t(`contact.link.${index + 1}.label`, link.label),
  }));

  const localizedSkillGroups = skillGroups.map((group, groupIndex) => ({
    ...group,
    title: t(`skills.group.${groupIndex + 1}.title`, group.title),
    items: group.items.map((item, itemIndex) => ({
      ...item,
      name: t(`skills.group.${groupIndex + 1}.item.${itemIndex + 1}.name`, item.name),
      comment: t(`skills.group.${groupIndex + 1}.item.${itemIndex + 1}.comment`, item.comment),
    })),
  }));

  const localizedExperiences = experiences.map((experience, experienceIndex) => ({
    ...experience,
    title: t(`experience.item.${experienceIndex + 1}.title`, experience.title),
    company: t(`experience.item.${experienceIndex + 1}.company`, experience.company),
    period: t(`experience.item.${experienceIndex + 1}.period`, experience.period),
    location: t(`experience.item.${experienceIndex + 1}.location`, experience.location),
    bullets: experience.bullets.map((bullet, bulletIndex) =>
      t(`experience.item.${experienceIndex + 1}.bullet.${bulletIndex + 1}`, bullet),
    ),
  }));

  const localizedEducation = education.map((item, itemIndex) => ({
    ...item,
    title: t(`experience.educationItem.${itemIndex + 1}.title`, item.title),
    school: t(`experience.educationItem.${itemIndex + 1}.school`, item.school),
    period: t(`experience.educationItem.${itemIndex + 1}.period`, item.period),
    description: t(`experience.educationItem.${itemIndex + 1}.description`, item.description),
  }));

  const projectsCopy: ProjectsSectionCopy = {
    eyebrow: t("projects.eyebrow"),
    title: t("projects.title"),
    description: t("projects.description"),
    shownLabel: t("projects.shownLabel"),
    contextLabel: t("projects.contextLabel"),
    surfaceLabel: t("projects.surfaceLabel"),
    resetFilters: t("projects.resetFilters"),
    noResult: t("projects.noResult"),
    allLabel: t("projects.filters.all"),
    originLabels: {
      University: t("projects.filters.origin.University", "University"),
      Personal: t("projects.filters.origin.Personal", "Personal"),
      Professional: t("projects.filters.origin.Professional", "Professional"),
    },
    categoryLabels: {
      Application: t("projects.filters.category.Application", "Application"),
      Web: t("projects.filters.category.Web", "Web"),
      "Data Science": t("projects.filters.category.Data Science", "Data Science"),
    },
    caseStudySnapshot: t("projects.caseStudySnapshot"),
    imageAltSuffix: t("projects.imageAltSuffix"),
  };

  return {
    headerCopy: {
      name: t("header.name"),
      role: t("header.role"),
      availability: t("header.availability"),
      headline: t("header.headline"),
      nav: {
        about: t("header.nav.about"),
        skills: t("header.nav.skills"),
        experience: t("header.nav.experience"),
        projects: t("header.nav.projects"),
        contact: t("header.nav.contact"),
        ariaLabel: t("header.nav.ariaLabel"),
      },
      language: {
        label: t("header.language"),
        fr: t("header.language.fr"),
        en: t("header.language.en"),
      },
    },
    themeCopy: {
      toggleLabel: t("theme.toggleLabel"),
      toggleAriaLabel: t("theme.toggleAriaLabel"),
      switchToLight: t("theme.switchToLight"),
      switchToDark: t("theme.switchToDark"),
      lightMode: t("theme.lightMode"),
      darkMode: t("theme.darkMode"),
    },
    heroCopy: {
      eyebrow: t("hero.eyebrow"),
      title: t("hero.title"),
      description: t("hero.description"),
      ctaPrimary: t("hero.ctaPrimary"),
      ctaSecondary: t("hero.ctaSecondary"),
      downloadFileName: t("hero.downloadFileName"),
      profileName: t("hero.profileName"),
      profileRole: t("hero.profileRole"),
      profileImageAlt: t("hero.profileImageAlt"),
      tags: [t("hero.tag.1"), t("hero.tag.2"), t("hero.tag.3")],
    },
    aboutCopy: {
      eyebrow: t("about.eyebrow"),
      title: t("about.title"),
      paragraphOne: t("about.paragraphOne"),
      paragraphTwo: t("about.paragraphTwo"),
      currentFocusLabel: t("about.currentFocusLabel"),
      currentFocusTitle: t("about.currentFocusTitle"),
      currentFocusDetail: t("about.currentFocusDetail"),
      locationLabel: t("about.locationLabel"),
      locationTitle: t("about.locationTitle"),
      locationDetail: t("about.locationDetail"),
      approachLabel: t("about.approachLabel"),
      approachTitle: t("about.approachTitle"),
      approachDetail: t("about.approachDetail"),
      highlightsLabel: t("about.highlightsLabel"),
      highlights: [
        t("about.highlight.1"),
        t("about.highlight.2"),
        t("about.highlight.3"),
        t("about.highlight.4"),
      ],
    },
    skillsCopy: {
      eyebrow: t("skills.eyebrow"),
      title: t("skills.title"),
      description: t("skills.description"),
      skillCountLabel: t("skills.skillCountLabel"),
    },
    experienceCopy: {
      eyebrow: t("experience.eyebrow"),
      title: t("experience.title"),
      description: t("experience.description"),
      educationEyebrow: t("experience.educationEyebrow"),
      educationTitle: t("experience.educationTitle"),
      emptyMission: t("experience.emptyMission"),
    },
    interestsCopy: {
      eyebrow: t("interests.eyebrow"),
      title: t("interests.title"),
      description: t("interests.description"),
    },
    contactCopy: {
      eyebrow: t("contact.eyebrow"),
      title: t("contact.title"),
      description: t("contact.description"),
      channelsLabel: t("contact.channelsLabel"),
    },
    footerCopy: {
      text: t("footer.text"),
    },
    a11yCopy: {
      skipToContent: t("a11y.skipToContent"),
    },
    projectsCopy,
    localizedStats,
    localizedProjects,
    localizedInterests,
    localizedContactLinks,
    localizedExperiences,
    localizedEducation,
    localizedSkillGroups,
  };
}
