import { AboutSection } from "@/components/AboutSection";
import { ContactSection } from "@/components/ContactSection";
import { ExperienceSection } from "@/components/ExperienceSection";
import { Footer } from "@/components/Footer";
import { HeaderNav } from "@/components/HeaderNav";
import { HeroSection } from "@/components/HeroSection";
import { InterestsSection } from "@/components/InterestsSection";
import { ProjectsSection } from "@/components/ProjectsSection";
import { SkillsSection } from "@/components/SkillsSection";
import { Reveal } from "@/components/Reveal";

import { contactLinks } from "@/data/contactLinks";
import { education } from "@/data/education";
import { experiences } from "@/data/experiences";
import { interests } from "@/data/interests";
import { projects } from "@/data/projects";
import { skillGroups } from "@/data/skills";
import { stats } from "@/data/stats";

export default function Home() {
  const profileImage = "/profile-img.jpg";

  return (
    <div className="mx-auto flex min-h-screen w-full max-w-6xl flex-col gap-20 px-4 pb-24 pt-12 sm:px-10">
      <HeaderNav />
      <Reveal>
        <HeroSection stats={stats} profileImage={profileImage} />
      </Reveal>
      <Reveal delay={120}>
        <AboutSection />
      </Reveal>
      <Reveal delay={160}>
        <SkillsSection skillGroups={skillGroups} />
      </Reveal>
      <Reveal delay={200}>
        <ExperienceSection experiences={experiences} education={education} />
      </Reveal>
      <Reveal delay={240}>
        <ProjectsSection projects={projects} />
      </Reveal>
      <Reveal delay={280}>
        <InterestsSection interests={interests} />
      </Reveal>
      <Reveal delay={320}>
        <ContactSection links={contactLinks} />
      </Reveal>
      <Footer />
    </div>
  );
}
