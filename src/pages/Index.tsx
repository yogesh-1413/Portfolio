import { Navigation } from "@/components/portfolio/Navigation"
import { HeroSection } from "@/components/portfolio/HeroSection"
import { AboutSection } from "@/components/portfolio/AboutSection"
import { EducationSection } from "@/components/portfolio/EducationSection"
import { ProjectsSection } from "@/components/portfolio/ProjectsSection"
import { SkillsSection } from "@/components/portfolio/SkillsSection"
import { ExperienceSection } from "@/components/portfolio/ExperienceSection"
import { ContactSection } from "@/components/portfolio/ContactSection"

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      <main>
        <section id="home">
          <HeroSection />
        </section>
        
        <EducationSection />
        <SkillsSection />
        <ProjectsSection />
        <ExperienceSection />
        <AboutSection />
        <ContactSection />
      </main>
      
      <footer className="bg-gradient-to-r from-primary to-accent text-background py-8">
        <div className="container mx-auto px-6 text-center">
          <p className="text-sm">
            © 2025 Yogesh. Built with React, TypeScript, and Tailwind CSS.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
