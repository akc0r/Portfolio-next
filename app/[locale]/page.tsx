import { notFound } from "next/navigation";

import { AboutSection } from "@/components/AboutSection";
import { ContactSection } from "@/components/ContactSection";
import { ExperienceSection } from "@/components/ExperienceSection";
import { Footer } from "@/components/Footer";
import { HeaderNav } from "@/components/HeaderNav";
import { HeroSection } from "@/components/HeroSection";
import { InterestsSection } from "@/components/InterestsSection";
import { ProjectsSection } from "@/components/ProjectsSection";
import { Reveal } from "@/components/Reveal";
import { SkillsSection } from "@/components/SkillsSection";

import { contactLinks } from "@/data/contactLinks";
import { education } from "@/data/education";
import { experiences } from "@/data/experiences";
import { interests } from "@/data/interests";
import { projects } from "@/data/projects";
import { skillGroups } from "@/data/skills";
import { stats } from "@/data/stats";
import { isLocale } from "@/lib/i18n";
import enTranslations from "@/lang/en";
import frTranslations from "@/lang/fr";

interface LocalizedPageProps {
  params: Promise<{
    locale: string;
  }>;
}

export default async function Home({ params }: LocalizedPageProps) {
  const { locale } = await params;

  if (!isLocale(locale)) {
    notFound();
  }

  const translations = locale === "en" ? enTranslations : frTranslations;

  const profileImage = "/profile-img.jpg";

  // Helper to get translated values by key
  const t = (key: string): string => {
    return (translations as Record<string, string>)[key] || key;
  };

  // Build translation objects for components
  const headerCopy = {
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
    },
    language: {
      label: t("header.language"),
      fr: t("header.language.fr"),
      en: t("header.language.en"),
    },
  };

  const themeCopy = {
    toggleLabel: t("theme.toggleLabel"),
    toggleAriaLabel: t("theme.toggleAriaLabel"),
    switchToLight: t("theme.switchToLight"),
    switchToDark: t("theme.switchToDark"),
    lightMode: t("theme.lightMode"),
    darkMode: t("theme.darkMode"),
  };

  const heroCopy = {
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
    stats: stats.map((stat, i) => ({
      ...stat,
      label: t(`hero.stat.${i + 1}.label`),
      detail: t(`hero.stat.${i + 1}.detail`),
    })),
  };

  const aboutCopy = {
    eyebrow: t("about.eyebrow"),
    title: t("about.title"),
    paragraphOne: t("about.paragraphOne"),
    paragraphTwo: t("about.paragraphTwo"),
    highlights: [
      t("about.highlight.1"),
      t("about.highlight.2"),
      t("about.highlight.3"),
      t("about.highlight.4"),
    ],
  };

  const skillsCopy = {
    eyebrow: t("skills.eyebrow"),
    title: t("skills.title"),
    description: t("skills.description"),
    skillCountLabel: t("skills.skillCountLabel"),
    groups: skillGroups.map((group, groupIdx) => ({
      title: t(`skills.group.${groupIdx + 1}.title`),
      items: group.items.map((_, itemIdx) => ({
        name: t(`skills.group.${groupIdx + 1}.item.${itemIdx + 1}.name`),
        comment: t(`skills.group.${groupIdx + 1}.item.${itemIdx + 1}.comment`),
      })),
    })),
  };

  const experienceCopy = {
    title: t("experience.title"),
    educationTitle: t("experience.educationTitle"),
    emptyMission: t("experience.emptyMission"),
    items: experiences.map((_, idx) => ({
      title: t(`experience.item.${idx + 1}.title`),
      company: t(`experience.item.${idx + 1}.company`),
      period: t(`experience.item.${idx + 1}.period`),
      location: t(`experience.item.${idx + 1}.location`),
      bullets: experiences[idx]?.bullets?.map((_, bIdx) =>
        t(`experience.item.${idx + 1}.bullet.${bIdx + 1}`)
      ) || [],
    })),
    educationItems: education.map((_, idx) => ({
      title: t(`experience.educationItem.${idx + 1}.title`),
      school: t(`experience.educationItem.${idx + 1}.school`),
      period: t(`experience.educationItem.${idx + 1}.period`),
      description: t(`experience.educationItem.${idx + 1}.description`),
    })),
  };

  const interestsCopy = {
    eyebrow: t("interests.eyebrow"),
    title: t("interests.title"),
    description: t("interests.description"),
    items: [
      {
        title: t("interest.1.title"),
        detail: t("interest.1.detail"),
      },
      {
        title: t("interest.2.title"),
        detail: t("interest.2.detail"),
      },
      {
        title: t("interest.3.title"),
        detail: t("interest.3.detail"),
      },
    ],
  };

  const contactCopy = {
    eyebrow: t("contact.eyebrow"),
    title: t("contact.title"),
    description: t("contact.description"),
    channelsLabel: t("contact.channelsLabel"),
    links: contactLinks.map((_, idx) => ({
      label: t(`contact.link.${idx + 1}.label`),
    })),
  };

  const footerCopy = {
    text: t("footer.text"),
  };

  return (
    <div className="mx-auto flex min-h-screen w-full max-w-7xl flex-col gap-16 px-4 pb-24 pt-8 sm:px-8 lg:px-10 lg:pt-10">
      <HeaderNav locale={locale} copy={headerCopy} themeCopy={themeCopy} />
      <Reveal>
        <HeroSection stats={heroCopy.stats} profileImage={profileImage} copy={heroCopy} />
      </Reveal>
      <Reveal delay={120}>
        <AboutSection copy={aboutCopy} />
      </Reveal>
      <Reveal delay={160}>
        <SkillsSection skillGroups={skillGroups} copy={skillsCopy} />
      </Reveal>
      <Reveal delay={200}>
        <ExperienceSection experiences={experiences} education={education} copy={experienceCopy} />
      </Reveal>
      <Reveal delay={240}>
        <ProjectsSection projects={projects} />
      </Reveal>
      <Reveal delay={280}>
        <InterestsSection interests={interests} copy={interestsCopy} />
      </Reveal>
      <Reveal delay={320}>
        <ContactSection links={contactLinks} copy={contactCopy} />
      </Reveal>
      <Footer copy={footerCopy} />
    </div>
  );
}
