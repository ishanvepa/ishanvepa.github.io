import Hero from '@/components/Hero'
import AboutSection from '@/components/about'
import ProjectsSection from '@/components/projects'
import SkillsSection from '@/components/skills'
import { Contact }  from '@/components/contact'
import { Footer } from '@/components/footer'

export default function HomePage() {
  return (
    <div className="min-h-screen">
      <Hero />
      <AboutSection />
      <ProjectsSection />
      <SkillsSection />
      <Contact />
      <Footer />
    </div>
  )
}