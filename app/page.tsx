import { Navigation } from "@/components/navigation"
import { HeroSection } from "@/components/hero-section"
import { Footer } from "@/components/footer"
import Project from "./projects/page"
import Skill from "./skills/page"
import Experience from "./experience/page"
import Contact from "./contact/page"
export default function Home() {
  return (
    <main className="min-h-screen">
      <Navigation />
      <section id="home">
        <HeroSection />
      </section>
      <section id="projects">
        <Project />
      </section>
      <section id="skills">
        <Skill />
      </section>
      <section id="experience">
        <Experience />
      </section>
      <section id="contact">
        <Contact />
      </section>
      <Footer />
    </main>
  )
}
