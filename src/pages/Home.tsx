import { Hero } from '@/components/Hero'
import { About } from '@/components/About'
import { ProjectCarousel } from '@/components/ProjectCarousel'
import { Contact } from '@/components/Contact'

export function Home() {
  return (
    <main>
      <Hero />
      <About />
      <ProjectCarousel />
      <Contact />
    </main>
  )
}
