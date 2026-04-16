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
import { StarField } from "@/components/star-field"

export default function Portfolio() {
  return (
    <main className="min-h-screen gradient-bg relative">
      <StarField />
      <Header />
      <HeroSection />
      <div className="section-divider" />
      <AboutSection />
      <div className="section-divider" />
      <SkillsSection />
      <div className="section-divider" />
      <ExperienceSection />
      <div className="section-divider" />
      <EducationSection />
      <div className="section-divider" />
      <ProjectsSection />
      <div className="section-divider" />
      <CVPreviewSection />
      <div className="section-divider" />
      <ContactSection />
      <Footer />
    </main>
  )
}
