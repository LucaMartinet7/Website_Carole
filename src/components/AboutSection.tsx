import {
  aboutBadges,
  aboutStory,
  contact,
  expertise,
  locations,
  trainingGroups,
} from '../content/siteContent'
import { Reveal } from './Reveal'
import { SectionHeading } from './SectionHeading'

export function AboutSection() {
  return (
    <section
      id="about"
      className="relative z-10 bg-[linear-gradient(to_bottom,var(--deep),var(--mid))]"
    >
      <div className="mx-auto max-w-[1140px] px-8 py-24">
        <div className="mx-auto max-w-[760px]">
          <SectionHeading
            align="left"
            label="À propos de Carole"
            title={
              <>
                Un parcours guidé par <em>la sensibilité et l’énergie</em>
              </>
            }
            description={
              <>
                Maître Reiki depuis 2014, je vous accompagne vers un mieux-être durable, en alliant
                soins énergétiques et développement personnel.
              </>
            }
          />

          <Reveal className="mx-auto mb-10 mt-2 w-[220px] max-w-full overflow-hidden rounded-2xl border border-[rgba(201,169,110,0.25)] shadow-[0_8px_40px_rgba(0,0,0,0.35)] sm:float-right sm:mb-4 sm:ml-8 sm:mt-0">
            <img
              src="/photos/about-portrait.jpg"
              alt="Portrait de Carole Martinet, Maître Reiki"
              loading="lazy"
              width={220}
              height={293}
              className="block h-auto w-full object-cover"
            />
          </Reveal>

          {aboutStory.map((paragraph, index) => (
            <Reveal key={index} delayMs={150 + index * 60}>
              <p className="mb-5 text-[0.87rem] font-light leading-[1.9] text-[var(--muted)]">
                {paragraph}
              </p>
            </Reveal>
          ))}

          <Reveal delayMs={300}>
            <div className="mt-8 flex flex-wrap gap-3">
              {aboutBadges.map((badge) => (
                <span
                  key={badge}
                  className="border border-[rgba(201,169,110,0.3)] px-4 py-2 text-[0.62rem] font-medium uppercase tracking-[0.18em] text-[var(--gold)]"
                >
                  {badge}
                </span>
              ))}
            </div>
          </Reveal>

          <Reveal delayMs={200}>
            <div className="mt-16">
              <h3 className="text-[1.6rem] font-light text-[var(--cream)] [font-family:'Cormorant_Garamond',serif]">
                Mon expertise : <em>libération, équilibre, cheminement</em>
              </h3>
              <p className="mt-4 text-[0.87rem] font-light leading-[1.9] text-[var(--muted)]">
                {expertise.intro}
              </p>
              <div className="mt-8 grid gap-6 sm:grid-cols-3">
                {expertise.points.map((point) => (
                  <div
                    key={point.title}
                    className="border-t border-[rgba(201,169,110,0.25)] pt-5"
                  >
                    <strong className="block text-[0.82rem] font-medium tracking-[0.03em] text-[var(--cream)]">
                      {point.title}
                    </strong>
                    <p className="mt-3 text-[0.8rem] font-light leading-[1.8] text-[var(--muted)]">
                      {point.text}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </Reveal>

          <Reveal delayMs={150} className="mx-auto mt-16 max-w-[440px] overflow-hidden rounded-2xl border border-[rgba(201,169,110,0.2)] shadow-[0_8px_40px_rgba(0,0,0,0.35)]">
            <figure>
              <img
                src="/photos/reiki-soin.jpg"
                alt="Carole Martinet, les mains posées lors d’une séance de Reiki"
                loading="lazy"
                className="block aspect-[3/4] w-full object-cover object-center"
              />
              <figcaption className="bg-[rgba(51,45,38,0.6)] px-5 py-3 text-center text-[0.7rem] font-light italic tracking-[0.06em] text-[var(--muted)]">
                Une séance de Reiki, au cabinet d’Ornex
              </figcaption>
            </figure>
          </Reveal>

          <Reveal delayMs={200}>
            <div className="mt-16">
              <h3 className="text-[1.6rem] font-light text-[var(--cream)] [font-family:'Cormorant_Garamond',serif]">
                Mes <em>formations</em>
              </h3>
              {trainingGroups.map((group) => (
                <div key={group.heading} className="mt-8">
                  <h4 className="text-[0.68rem] font-medium uppercase tracking-[0.2em] text-[var(--gold)]">
                    {group.heading}
                  </h4>
                  <ul className="mt-5 flex flex-col gap-5">
                    {group.items.map((item) => (
                      <li
                        key={item.title}
                        className="border-l border-[rgba(201,169,110,0.3)] pl-5"
                      >
                        <div className="flex flex-wrap items-baseline justify-between gap-x-4">
                          <strong className="text-[0.85rem] font-medium tracking-[0.02em] text-[var(--cream)]">
                            {item.title}
                          </strong>
                          <span className="text-[0.68rem] font-medium uppercase tracking-[0.16em] text-[var(--gold2)]">
                            {item.date}
                          </span>
                        </div>
                        <span className="mt-1 block text-[0.78rem] font-light leading-[1.7] text-[var(--muted)]">
                          {item.detail}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </Reveal>

          <Reveal delayMs={400}>
            <div className="mt-16 flex flex-wrap gap-8">
              {locations.map((location) => (
                <div key={location.title} className="flex items-start gap-3">
                  <div className="mt-[0.42rem] h-[6px] w-[6px] shrink-0 rounded-full bg-[var(--gold)]" />
                  <div>
                    <strong className="block text-[0.78rem] font-medium tracking-[0.05em] text-[var(--cream)]">
                      {location.title}
                    </strong>
                    <span className="text-[0.75rem] font-light text-[var(--muted)]">
                      {location.detail}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </Reveal>

          <Reveal delayMs={450}>
            <div className="mt-8 flex flex-wrap gap-x-6 gap-y-3 text-[0.8rem] tracking-[0.08em] text-[var(--gold2)]">
              <a href={`tel:${contact.phone}`}>{contact.phoneDisplay}</a>
              <a href={`mailto:${contact.email}`}>{contact.email}</a>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  )
}
