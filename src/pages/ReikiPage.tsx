import { Link } from 'react-router-dom'
import { Reveal } from '../components/Reveal'
import { SectionHeading } from '../components/SectionHeading'
import { useContent } from '../i18n/useContent'

export function ReikiPage() {
  const { reikiOffers, reikiPage, ui } = useContent()

  return (
    <main className="relative z-10 bg-[linear-gradient(to_bottom,var(--night),var(--deep))]">
      <div className="mx-auto max-w-[820px] px-8 pb-24 pt-36">
        <Reveal>
          <Link
            to="/"
            className="text-[0.72rem] font-medium uppercase tracking-[0.2em] text-[var(--gold)] transition-colors hover:text-[var(--gold2)]"
          >
            {ui.common.back}
          </Link>
        </Reveal>

        <div className="mt-8">
          <SectionHeading
            align="left"
            label={reikiPage.label}
            title={reikiPage.title}
            description={reikiPage.intro}
          />
        </div>

        <div className="mt-12 flex flex-col gap-6">
          {reikiOffers.map((offer, index) => (
            <Reveal key={offer.href} delayMs={100 + index * 80}>
              <Link
                to={offer.href}
                className="group block border border-[rgba(201,169,110,0.15)] p-8 transition-colors duration-300 hover:bg-[rgba(201,169,110,0.03)]"
              >
                <h3 className="mb-3 text-[1.5rem] font-normal text-[var(--cream)] [font-family:'Cormorant_Garamond',serif]">
                  {offer.title}
                </h3>
                <p className="mb-5 text-[0.95rem] font-normal leading-[1.8] text-[var(--muted)]">
                  {offer.description}
                </p>
                <span className="inline-flex items-center gap-2 text-[0.65rem] font-medium uppercase tracking-[0.25em] text-[var(--gold)] after:content-['→'] after:transition-transform group-hover:after:translate-x-1">
                  {offer.cta}
                </span>
              </Link>
            </Reveal>
          ))}
        </div>
      </div>
    </main>
  )
}
