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

  // Helper to get translated values
  const t = (key: string): string => {
    return (translations as Record<string, string>)[key] || key;
  };

  return (
    <div className="mx-auto flex min-h-screen w-full max-w-7xl flex-col gap-16 px-4 pb-24 pt-8 sm:px-8 lg:px-10 lg:pt-10">
      <HeaderNav locale={locale} copy={{
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
      }} themeCopy={{
        toggleLabel: t("theme.toggleLabel"),
        toggleAriaLabel: t("theme.toggleAriaLabel"),
        switchToLight: t("theme.switchToLight"),
        switchToDark: t("theme.switchToDark"),
        lightMode: t("theme.lightMode"),
        darkMode: t("theme.darkMode"),
      }} />
      <Reveal>
        <HeroSection stats={stats.map((stat, i) => ({
          ...stat,
          label: t(`hero.stat.${i + 1}.label`),
          detail: t(`hero.stat.${i + 1}.detail`),
        }))} profileImage={profileImage} copy={{
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
        }} />
      </Reveal>
      <Reveal delay={120}>
        <AboutSection copy={{
          eyebrow: t("about.eyebrow"),
          title: t("about.title"),
          paragraphOne: t("about.paragraphOne"),
          paragraphTwo: t("about.paragraphTwo"),
          currentFocusLabel: "Currently focused on",
          currentFocusTitle: "End-of-studies internship",
          currentFocusDetail: "6-month sprint starting February 2026",
          locationLabel: "Based in",
          locationTitle: "France",
          locationDetail: "Primarily remote, open to travel",
          approachLabel: "Approach",
          approachTitle: "Product-led engineering",
          approachDetail: "Clear intent, measurable quality, pragmatic delivery",
          highlightsLabel: "Key strengths",
          highlights: [
            t("about.highlight.1"),
            t("about.highlight.2"),
            t("about.highlight.3"),
            t("about.highlight.4"),
          ],
        }} />
      </Reveal>
      <Reveal delay={160}>
        <SkillsSection skillGroups={skillGroups} copy={{
          eyebrow: t("skills.eyebrow"),
          title: t("skills.title"),
          description: t("skills.description"),
          skillCountLabel: t("skills.skillCountLabel"),
        }} />
      </Reveal>
      <Reveal delay={200}>
        <ExperienceSection experiences={experiences} education={education} copy={{
          eyebrow: t("experience.eyebrow") || "Experience",
          title: t("experience.title"),
          description: t("experience.description") || "",
          educationEyebrow: t("experience.educationEyebrow") || "Education",
          educationTitle: t("experience.educationTitle"),
          emptyMission: t("experience.emptyMission"),
        }} />
      </Reveal>
      <Reveal delay={240}>
        <ProjectsSection projects={projects} />
      </Reveal>
      <Reveal delay={280}>
        <InterestsSection interests={interests} copy={{
          eyebrow: t("interests.eyebrow"),
          title: t("interests.title"),
          description: t("interests.description"),
        }} />
      </Reveal>
      <Reveal delay={320}>
        <ContactSection links={contactLinks} copy={{
          eyebrow: t("contact.eyebrow"),
          title: t("contact.title"),
          description: t("contact.description"),
          channelsLabel: t("contact.channelsLabel"),
        }} />
      </Reveal>
      <Footer copy={{
        text: t("footer.text"),
      }} />
    </div>
  );
}
