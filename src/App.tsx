import { AboutSection } from './components/AboutSection'
import { CtaSection } from './components/CtaSection'
import { Footer } from './components/Footer'
import { Hero } from './components/Hero'
import { Navigation } from './components/Navigation'
import { QuoteSection } from './components/QuoteSection'
import { ResonanceSection } from './components/ResonanceSection'
import { ServicesSection } from './components/ServicesSection'
import { StarfieldCanvas } from './components/StarfieldCanvas'
import { TestimonialsSection } from './components/TestimonialsSection'

function App() {
  return (
    <div className="relative min-h-screen overflow-x-hidden bg-[var(--night)] text-[var(--cream)]">
      <StarfieldCanvas />
      <Navigation />
      <main className="relative z-10">
        <Hero />
        <ResonanceSection />
        <ServicesSection />
        <AboutSection />
        <QuoteSection />
        <TestimonialsSection />
        <CtaSection />
      </main>
      <Footer />
    </div>
  )
}

export default App
