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
import { getPortfolioContent } from "@/lib/portfolio-content";
import { isLocale } from "@/lib/i18n";

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

  const content = getPortfolioContent(locale);
  const profileImage = "/profile-img.jpg";

  return (
    <main
      id="main-content"
      tabIndex={-1}
      className="relative mx-auto min-h-screen w-full max-w-[1200px] px-4 pb-24 pt-8 focus:outline-none sm:px-8 lg:px-10 lg:pt-12"
    >
      <a
        href="#main-content"
        className="sr-only absolute left-4 top-4 z-50 rounded-full bg-slate-950 px-4 py-2 text-sm font-semibold text-white focus:not-sr-only"
      >
        {content.a11yCopy.skipToContent}
      </a>

      <div className="pointer-events-none absolute inset-x-0 top-0 -z-10 h-[520px] overflow-hidden">
        <div className="ambient-orb ambient-orb-left" />
        <div className="ambient-orb ambient-orb-right" />
      </div>

      <div className="flex flex-col gap-16 lg:gap-20">
        <HeaderNav locale={locale} copy={content.headerCopy} themeCopy={content.themeCopy} />

        <Reveal>
          <HeroSection stats={content.localizedStats} profileImage={profileImage} copy={content.heroCopy} />
        </Reveal>

        <Reveal delay={120}>
          <AboutSection copy={content.aboutCopy} />
        </Reveal>

        <Reveal delay={160}>
          <SkillsSection skillGroups={content.localizedSkillGroups} copy={content.skillsCopy} />
        </Reveal>

        <Reveal delay={200}>
          <ExperienceSection
            experiences={content.localizedExperiences}
            education={content.localizedEducation}
            copy={content.experienceCopy}
          />
        </Reveal>

        <Reveal delay={240}>
          <ProjectsSection projects={content.localizedProjects} copy={content.projectsCopy} />
        </Reveal>

        <Reveal delay={280}>
          <InterestsSection interests={content.localizedInterests} copy={content.interestsCopy} />
        </Reveal>

        <Reveal delay={320}>
          <ContactSection links={content.localizedContactLinks} copy={content.contactCopy} />
        </Reveal>

        <Footer copy={content.footerCopy} />
      </div>
    </main>
  );
}
