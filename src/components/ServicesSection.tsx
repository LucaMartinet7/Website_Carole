import { Link } from 'react-router-dom'
import { services } from '../content/siteContent'
import { Reveal } from './Reveal'
import { SectionHeading } from './SectionHeading'

const cardClassName =
  "group relative block border-b border-[rgba(201,169,110,0.15)] p-10 transition-colors duration-300 last:border-b-0 md:border-b-0 md:border-r md:last:border-r-0 hover:bg-[rgba(201,169,110,0.03)]"

function ServiceCardContent({
  service,
}: {
  service: (typeof services)[number]
}) {
  return (
    <>
      <span className="mb-2 block text-[4rem] leading-none text-[rgba(201,169,110,0.1)] [font-family:'Cormorant_Garamond',serif]">
        {service.number}
      </span>
      <h3 className="mb-3 text-[1.6rem] font-normal text-[var(--cream)] [font-family:'Cormorant_Garamond',serif]">
        {service.title}
      </h3>
      <p className="mb-6 text-[0.82rem] font-light leading-[1.8] text-[var(--muted)]">
        {service.description}
      </p>
      <span className="inline-flex items-center gap-2 text-[0.65rem] font-medium uppercase tracking-[0.25em] text-[var(--gold)] after:content-['→'] after:transition-transform group-hover:after:translate-x-1">
        {service.cta}
      </span>
    </>
  )
}

export function ServicesSection() {
  return (
    <section id="services" className="relative z-10 bg-[var(--night)]">
      <div className="mx-auto max-w-[1140px] px-8 py-24">
        <SectionHeading
          label="Ce que je propose"
          title={
            <>
              Se libérer, découvrir, <em>apprendre</em>
            </>
          }
          description={
            <>
              Beaucoup viennent pour se libérer de blocages profonds, ou simplement pour découvrir
              le Reiki — souvent sans savoir par où commencer. Je vous accueille là où vous en êtes.
              Les formations Reiki, elles, s'adressent à celles et ceux qui souhaitent gagner en
              autonomie et approfondir leur pratique du Reiki, à tous les niveaux.
            </>
          }
        />
        <Reveal delayMs={300}>
          <div className="grid border border-[rgba(201,169,110,0.15)] md:grid-cols-3">
            {services.map((service) =>
              service.href.startsWith('/') ? (
                <Link key={service.number} className={cardClassName} to={service.href}>
                  <ServiceCardContent service={service} />
                </Link>
              ) : (
                <a
                  key={service.number}
                  className={cardClassName}
                  href={service.href}
                  rel="noreferrer"
                  target="_blank"
                >
                  <ServiceCardContent service={service} />
                </a>
              ),
            )}
          </div>
        </Reveal>
      </div>
    </section>
  )
}
