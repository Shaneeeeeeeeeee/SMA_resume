'use client'

import Header from '@/components/Header'
import Hero from '@/components/Hero'
import Background from '@/components/Background'
import Education from '@/components/Education'
import TechnicalSkills from '@/components/TechnicalSkills'
import Experience from '@/components/Experience'
import Projects from '@/components/Projects'
import Leadership from '@/components/Leadership'
import Strengths from '@/components/Strengths'
import Footer from '@/components/Footer'
import InteractiveBackground from '@/components/InteractiveBackground'

export default function Home() {
  return (
    <main className="relative min-h-screen overflow-hidden">
      {/* Unified Interactive Background */}
      <InteractiveBackground />

      {/* Content */}
      <div className="relative z-10">
        <Header />
        <Hero />
        <Background />
        <Education />
        <TechnicalSkills />
        <Experience />
        <Projects />
        <Leadership />
        <Strengths />
        <Footer />
      </div>
    </main>
  )
}

