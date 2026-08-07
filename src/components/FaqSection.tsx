import { useContent } from '../i18n/useContent'
import { Reveal } from './Reveal'
import { SectionHeading } from './SectionHeading'

export function FaqSection() {
  const { faq, ui } = useContent()

  return (
    <section id="faq" className="relative z-10 bg-[var(--deep)]">
      <div className="mx-auto max-w-[820px] px-8 pb-24 pt-12">
        <SectionHeading
          label={ui.faq.label}
          title={ui.faq.title}
          description={ui.faq.description}
        />
        <Reveal delayMs={200}>
          <div className="mt-10 flex flex-col gap-3">
            {faq.map((item) => (
              <details
                key={item.question}
                className="group border border-[rgba(201,169,110,0.18)] bg-[rgba(201,169,110,0.03)] px-6 py-1 transition-colors hover:border-[rgba(201,169,110,0.35)]"
              >
                <summary className="flex cursor-pointer list-none items-center justify-between gap-4 py-4 text-[0.95rem] font-normal text-[var(--cream)] [font-family:'Cormorant_Garamond',serif] marker:content-['']">
                  {item.question}
                  <span className="shrink-0 text-[var(--gold)] transition-transform duration-300 group-open:rotate-45">
                    +
                  </span>
                </summary>
                <p className="pb-5 pr-8 text-[0.93rem] font-normal leading-[1.8] text-[var(--muted)]">
                  {item.answer}
                </p>
              </details>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  )
}
