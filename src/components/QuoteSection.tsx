import { useContent } from '../i18n/useContent'
import { Reveal } from './Reveal'

export function QuoteSection() {
  const { ui } = useContent()

  return (
    <section
      id="quote"
      className="relative z-10 overflow-hidden bg-[var(--night)] text-center"
    >
      <div
        aria-hidden="true"
        className="absolute inset-0 bg-scroll bg-cover bg-center opacity-55 md:bg-fixed"
        style={{ backgroundImage: "url('/photos/paysage-alpes.jpg')" }}
      />
      <div
        aria-hidden="true"
        className="absolute inset-0 bg-[linear-gradient(to_bottom,rgba(51,45,38,0.88),rgba(51,45,38,0.55),rgba(51,45,38,0.92))]"
      />
      <Reveal className="relative z-10 mx-auto max-w-[820px] px-8 py-40 sm:py-48">
        <span className="mb-4 block text-[5rem] leading-[0.6] text-[var(--gold2)] opacity-60 [font-family:'Cormorant_Garamond',serif]">
          &quot;
        </span>
        <blockquote className="mb-7 text-[clamp(1.6rem,3.8vw,2.6rem)] font-light leading-[1.4] italic text-[var(--cream)] [font-family:'Cormorant_Garamond',serif] [text-shadow:0_2px_20px_rgba(0,0,0,0.4)]">
          {ui.quote.text}
        </blockquote>
        <p className="text-[0.65rem] font-medium uppercase tracking-[0.35em] text-[var(--gold2)]">
          {ui.quote.author}
        </p>
      </Reveal>
    </section>
  )
}
