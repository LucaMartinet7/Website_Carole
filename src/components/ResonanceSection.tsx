import { resonanceCards } from '../content/siteContent'
import { Reveal } from './Reveal'
import { SectionHeading } from './SectionHeading'

export function ResonanceSection() {
  return (
    <section id="resonance" className="relative z-10 bg-[var(--deep)]">
      <div className="mx-auto max-w-[1140px] px-8 py-24">
        <SectionHeading
          label="Vous vous reconnaissez ?"
          title={
            <>
              Ces situations vous <em>parlent-elles</em> ?
            </>
          }
          description={
            <>
              Si l'une de ces réalités résonne en vous, je peux vous apporter un soutien et une
              transformation profonde et durable.
            </>
          }
        />
        <div className="mt-12 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
          {resonanceCards.map((card, index) => (
            <Reveal key={card.title} delayMs={100 * (index + 1)}>
              <article className="group relative overflow-hidden border border-[rgba(201,169,110,0.12)] bg-[linear-gradient(135deg,rgba(28,24,48,0.6),rgba(17,15,30,0.8))] p-8 transition-transform duration-300 hover:-translate-y-1 hover:border-[rgba(201,169,110,0.35)]">
                <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_left,rgba(201,169,110,0.06)_0%,transparent_60%)] opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
                <span className="relative z-10 mb-4 block text-[1.4rem]">{card.icon}</span>
                <h3 className="relative z-10 mb-3 text-[1.25rem] font-normal text-[var(--gold2)] [font-family:'Cormorant_Garamond',serif]">
                  {card.title}
                </h3>
                <p className="relative z-10 text-[0.82rem] font-light leading-[1.75] text-[var(--muted)]">
                  {card.description}
                </p>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
