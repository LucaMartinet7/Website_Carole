import { Link } from 'react-router-dom'
import { useContent } from '../i18n/useContent'
import { Reveal } from './Reveal'
import { SectionHeading } from './SectionHeading'

const cardClassName =
  'group relative flex h-full flex-col border border-[rgba(201,169,110,0.15)] p-10 transition-colors duration-300 hover:bg-[rgba(201,169,110,0.03)]'

type Service = {
  number: string
  title: string
  description: string
  href: string
  cta: string
}

function ServiceCardContent({ service }: { service: Service }) {
  return (
    <>
      <span className="mb-2 block text-[4rem] leading-none text-[rgba(201,169,110,0.1)] [font-family:'Cormorant_Garamond',serif]">
        {service.number}
      </span>
      <h3 className="mb-3 text-[1.6rem] font-normal text-[var(--cream)] [font-family:'Cormorant_Garamond',serif]">
        {service.title}
      </h3>
      <p className="mb-6 text-[0.9rem] font-normal leading-[1.75] text-[var(--muted)]">
        {service.description}
      </p>
      <span className="mt-auto inline-flex items-center gap-2 text-[0.65rem] font-medium uppercase tracking-[0.25em] text-[var(--gold)] after:content-['→'] after:transition-transform group-hover:after:translate-x-1">
        {service.cta}
      </span>
    </>
  )
}

export function ServicesSection() {
  const { services, ui } = useContent()

  return (
    <section id="services" className="relative z-10 bg-[var(--night)]">
      <div className="mx-auto max-w-[1140px] px-8 py-24">
        <SectionHeading
          label={ui.services.label}
          title={ui.services.title}
          description={ui.services.description}
        />
        <Reveal delayMs={300}>
          <div className="mt-14 grid gap-6 md:grid-cols-3">
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
