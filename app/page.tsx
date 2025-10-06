import profileImage from "@/Portfolio-ancient/assets/img/profile-img.jpg";

import { AboutSection } from "@/components/AboutSection";
import { ContactSection } from "@/components/ContactSection";
import { ExperienceSection } from "@/components/ExperienceSection";
import { Footer } from "@/components/Footer";
import { HeaderNav } from "@/components/HeaderNav";
import { HeroSection } from "@/components/HeroSection";
import { PassionsSection } from "@/components/PassionsSection";
import { ProjectsSection } from "@/components/ProjectsSection";
import { ServicesSection } from "@/components/ServicesSection";
import { SkillsSection } from "@/components/SkillsSection";
import { Reveal } from "@/components/Reveal";

import { contactLinks } from "@/data/contactLinks";
import { education } from "@/data/education";
import { experiences } from "@/data/experiences";
import { passions } from "@/data/passions";
import { projects } from "@/data/projects";
import { services } from "@/data/services";
import { skillGroups } from "@/data/skills";
import { stats } from "@/data/stats";

export default function Home() {
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
      <section className="grid gap-8 lg:grid-cols-2">
        <Reveal delay={280}>
          <ServicesSection services={services} />
        </Reveal>
        <Reveal delay={320}>
          <PassionsSection passions={passions} />
        </Reveal>
      </section>
      <Reveal delay={360}>
        <ContactSection links={contactLinks} />
      </Reveal>
      <Footer />
    </div>
  );
}
