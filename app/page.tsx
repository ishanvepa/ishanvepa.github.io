import About from "@/components/about"
import Contact from "@/components/contact"
import Experiences from "@/components/experiences"
import Intro from "@/components/intro"
import Projects from "@/components/projects"
import SectionDivider from "@/components/section-divider"
import Skills from "@/components/skills"
import ContactMe from "@/components/contact"

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24 min-w-[500px]">
      <Intro />
      <SectionDivider /> {/*opacity: 0 rn */}
      <About />
      <Projects />
      <Skills />
      <ContactMe />
      {/* <Experiences /> */}
          
      
    </main>
  )
}
