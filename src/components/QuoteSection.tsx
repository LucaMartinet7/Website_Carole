import { Reveal } from './Reveal'

export function QuoteSection() {
  return (
    <section id="quote" className="relative z-10 bg-[var(--night)] text-center">
      <Reveal className="mx-auto max-w-[780px] px-8 py-24">
        <span className="mb-6 block text-[5rem] leading-[0.6] text-[var(--gold)] opacity-30 [font-family:'Cormorant_Garamond',serif]">
          &quot;
        </span>
        <blockquote className="mb-6 text-[clamp(1.5rem,3.5vw,2.4rem)] font-light leading-[1.4] italic text-[var(--cream)] [font-family:'Cormorant_Garamond',serif]">
          J'ai décidé d'être heureux parce que c'est bon pour la santé.
        </blockquote>
        <p className="text-[0.65rem] font-medium uppercase tracking-[0.35em] text-[var(--gold)]">
          — Voltaire
        </p>
      </Reveal>
    </section>
  )
}
