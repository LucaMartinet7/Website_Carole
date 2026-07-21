import { Link } from 'react-router-dom'
import { legalPage } from '../content/siteContent'
import { Reveal } from '../components/Reveal'
import { SectionHeading } from '../components/SectionHeading'

export function MentionsLegales() {
  return (
    <main className="relative z-10 bg-[linear-gradient(to_bottom,var(--night),var(--deep))]">
      <div className="mx-auto max-w-[820px] px-8 pb-24 pt-36">
        <Reveal>
          <Link
            to="/"
            className="text-[0.72rem] font-medium uppercase tracking-[0.2em] text-[var(--gold)] transition-colors hover:text-[var(--gold2)]"
          >
            ← Retour à l’accueil
          </Link>
        </Reveal>

        <div className="mt-8">
          <SectionHeading
            align="left"
            label="Informations légales"
            title={
              <>
                Mentions légales &amp; <em>confidentialité</em>
              </>
            }
            description={<>{legalPage.intro}</>}
          />
        </div>

        {legalPage.sections.map((section, index) => (
          <Reveal key={section.heading} delayMs={150 + index * 30}>
            <div className="mt-12 border-t border-[rgba(201,169,110,0.2)] pt-8">
              <h2 className="text-[1.5rem] font-light text-[var(--cream)] [font-family:'Cormorant_Garamond',serif]">
                {section.heading}
              </h2>
              {section.paragraphs.map((paragraph) => (
                <p
                  key={paragraph}
                  className="mt-4 text-[0.9rem] font-light leading-[1.9] text-[var(--muted)]"
                >
                  {paragraph}
                </p>
              ))}
            </div>
          </Reveal>
        ))}

        <Reveal delayMs={300}>
          <p className="mt-14 text-[0.72rem] font-light italic leading-[1.7] text-[var(--muted)]">
            Dernière mise à jour : {legalPage.updated}.
          </p>
        </Reveal>

        <Reveal delayMs={320}>
          <div className="mt-8">
            <Link
              className="text-[0.72rem] font-medium uppercase tracking-[0.2em] text-[var(--gold)] transition-colors hover:text-[var(--gold2)]"
              to="/"
            >
              ← Retour à l’accueil
            </Link>
          </div>
        </Reveal>
      </div>
    </main>
  )
}
