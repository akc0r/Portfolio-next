import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { F1HeroSection } from "@/components/sections/f1-hero-section";
import { AboutSection } from "@/components/sections/about-section";
import { SkillsSection } from "@/components/sections/skills-section";
import { ExperienceSection } from "@/components/sections/experience-section";
import { EducationSection } from "@/components/sections/education-section";
import { ProjectsSection } from "@/components/sections/projects-section";
import { InterestsSection } from "@/components/sections/interests-section";
import { ContactSection } from "@/components/sections/contact-section";

export default function HomePage3D() {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <F1HeroSection />
        <AboutSection />
        <SkillsSection />
        <ExperienceSection />
        <EducationSection />
        <ProjectsSection />
        <InterestsSection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
}
