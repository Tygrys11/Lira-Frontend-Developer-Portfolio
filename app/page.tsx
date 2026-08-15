import { AmbientBackground } from '@/components/ambient-background'
import { ScrollProgress } from '@/components/scroll-progress'
import { Navbar } from '@/components/navbar'
import { Hero } from '@/components/hero'
import { About } from '@/components/about'
import { TechStack } from '@/components/tech-stack'
import { Projects } from '@/components/projects'
import { WordpressProjects } from '@/components/WordpressProjects'
import { Skills } from '@/components/skills'
import { Contact } from '@/components/contact'
import { Footer } from '@/components/footer'

export default function Page() {
  return (
    <>
      <ScrollProgress />
      <AmbientBackground />
      <Navbar />
      <main className="relative">
        <Hero />
        <About />
        <TechStack />
        <Projects />
        <WordpressProjects />
        <Skills />
        <Contact />
      </main>
      <Footer />
    </>
  )
}
