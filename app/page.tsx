"use client"

import { Header } from "@/components/header"
import { HeroSection } from "@/components/sections/hero-section"
import { AboutSection } from "@/components/sections/about-section"
import { SkillsSection } from "@/components/sections/skills-section"
import { ExperienceSection } from "@/components/sections/experience-section"
import { EducationSection } from "@/components/sections/education-section"
import { ProjectsSection } from "@/components/sections/projects-section"
import { CVPreviewSection } from "@/components/sections/cv-preview-section"
import { ContactSection } from "@/components/sections/contact-section"
import { Footer } from "@/components/footer"
import { SceneBackground } from "@/components/three/scene-background"

export default function Portfolio() {
  return (
    <main className="min-h-screen gradient-bg relative">
      <SceneBackground />
      <div className="noise-overlay" aria-hidden />
      <Header />
      <HeroSection />
      <AboutSection />
      <SkillsSection />
      <ExperienceSection />
      <EducationSection />
      <ProjectsSection />
      <CVPreviewSection />
      <ContactSection />
      <Footer />
    </main>
  )
}
