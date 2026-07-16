import { AboutSection } from '../components/AboutSection'
import { CtaSection } from '../components/CtaSection'
import { FaqSection } from '../components/FaqSection'
import { Hero } from '../components/Hero'
import { QuoteSection } from '../components/QuoteSection'
import { ResonanceSection } from '../components/ResonanceSection'
import { ServicesSection } from '../components/ServicesSection'
import { TestimonialsSection } from '../components/TestimonialsSection'

export function HomePage() {
  return (
    <main className="relative z-10">
      <Hero />
      <ResonanceSection />
      <ServicesSection />
      <AboutSection />
      <QuoteSection />
      <TestimonialsSection />
      <FaqSection />
      <CtaSection />
    </main>
  )
}
