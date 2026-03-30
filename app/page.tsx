import { Navbar } from "@/components/navbar"
import { HeroSection } from "@/components/sections/hero"
import { AboutSection } from "@/components/sections/about"
import { ProjectsSection } from "@/components/sections/projects"
import { HowIBuildSection } from "@/components/sections/how-i-build"
import { TechStackSection } from "@/components/sections/tech-stack"
import { ContactSection } from "@/components/sections/contact"
import { Footer } from "@/components/footer"

export default function Home() {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main id="main-content">
        <HeroSection />
        <AboutSection />
        <ProjectsSection />
        <HowIBuildSection />
        <TechStackSection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  )
}
