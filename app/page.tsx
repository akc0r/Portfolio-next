"use client"

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
import { TopBar } from "@/components/nav/top-bar"
import { DotNav } from "@/components/nav/dot-nav"
import { SideRail } from "@/components/nav/side-rail"
import { Screen } from "@/components/layout/screen"

export default function Portfolio() {
  return (
    <main className="gradient-bg relative">
      <SceneBackground />
      <div className="noise-overlay" aria-hidden />
      <TopBar />
      <DotNav />
      <SideRail />

      <Screen plain>
        <HeroSection />
      </Screen>
      <Screen>
        <AboutSection />
      </Screen>
      <Screen>
        <SkillsSection />
      </Screen>
      <Screen>
        <ExperienceSection />
      </Screen>
      <Screen>
        <EducationSection />
      </Screen>
      <Screen>
        <ProjectsSection />
      </Screen>
      <Screen>
        <CVPreviewSection />
      </Screen>
      <Screen>
        <ContactSection />
      </Screen>

      <Footer />
    </main>
  )
}
