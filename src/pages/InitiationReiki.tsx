import { Link } from 'react-router-dom'
import { contact, initiationPage } from '../content/siteContent'
import { Reveal } from '../components/Reveal'
import { SectionHeading } from '../components/SectionHeading'

export function InitiationReiki() {
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
            label="Initiation Reiki"
            title={
              <>
                Une découverte du Reiki <em>en groupe</em>
              </>
            }
            description={<>{initiationPage.intro}</>}
          />
        </div>

        <Reveal delayMs={100}>
          <div className="mt-8 flex flex-wrap gap-3">
            {initiationPage.atouts.map((atout) => (
              <span
                key={atout}
                className="border border-[rgba(201,169,110,0.3)] px-4 py-2 text-[0.62rem] font-medium uppercase tracking-[0.18em] text-[var(--gold)]"
              >
                {atout}
              </span>
            ))}
          </div>
        </Reveal>

        <Reveal delayMs={150}>
          <div className="mt-12">
            <h3 className="text-[1.5rem] font-light text-[var(--cream)] [font-family:'Cormorant_Garamond',serif]">
              Une initiation accessible à <em>tous</em>
            </h3>
            <p className="mt-4 text-[0.9rem] font-light leading-[1.9] text-[var(--muted)]">
              {initiationPage.presentation}
            </p>
          </div>
        </Reveal>

        <Reveal delayMs={200}>
          <div className="mt-12">
            <h3 className="text-[1.5rem] font-light text-[var(--cream)] [font-family:'Cormorant_Garamond',serif]">
              Comment se déroule une <em>initiation</em>
            </h3>
            <p className="mt-4 text-[0.9rem] font-light leading-[1.9] text-[var(--muted)]">
              {initiationPage.deroule}
            </p>
          </div>
        </Reveal>

        <Reveal delayMs={200}>
          <div className="mt-12">
            <h3 className="text-[1.5rem] font-light text-[var(--cream)] [font-family:'Cormorant_Garamond',serif]">
              Ce que vous allez <em>vivre</em>
            </h3>
            <ul className="mt-5 flex flex-col gap-3">
              {initiationPage.vivre.map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <span className="mt-[0.5rem] h-[6px] w-[6px] shrink-0 rounded-full bg-[var(--gold)]" />
                  <span className="text-[0.88rem] font-light leading-[1.8] text-[var(--cream)]">
                    {item}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </Reveal>

        <Reveal delayMs={200}>
          <div className="mt-12">
            <h3 className="text-[1.5rem] font-light text-[var(--cream)] [font-family:'Cormorant_Garamond',serif]">
              Pour qui&nbsp;?
            </h3>
            <p className="mt-4 text-[0.9rem] font-light leading-[1.9] text-[var(--muted)]">
              {initiationPage.pourQui}
            </p>
          </div>
        </Reveal>

        <Reveal delayMs={200}>
          <div className="mt-12 border-t border-[rgba(201,169,110,0.2)] pt-8">
            <h3 className="text-[1.5rem] font-light text-[var(--cream)] [font-family:'Cormorant_Garamond',serif]">
              Où me rencontrer
            </h3>
            <p className="mt-4 text-[0.9rem] font-light leading-[1.9] text-[var(--muted)]">
              {initiationPage.ou}
            </p>
            <div className="mt-6 flex flex-wrap gap-x-6 gap-y-3 text-[0.85rem] tracking-[0.06em] text-[var(--gold2)]">
              <a href={`tel:${contact.phone}`}>{contact.phoneDisplay}</a>
              <a href={`mailto:${contact.email}`}>{contact.email}</a>
            </div>
          </div>
        </Reveal>

        <Reveal delayMs={250}>
          <p className="mt-14 text-[0.9rem] font-light leading-[1.9] text-[var(--muted)]">
            Envie de découvrir le Reiki, ou d’organiser une initiation pour votre groupe&nbsp;? Écrivez-moi
            ou appelez-moi, je vous répondrai avec plaisir. Venez comme vous êtes, en toute simplicité.
          </p>
          <div className="mt-8 flex flex-wrap items-center gap-5">
            <a
              className="inline-flex items-center justify-center bg-[var(--gold)] px-9 py-4 text-[0.72rem] font-medium uppercase tracking-[0.2em] text-[var(--night)] transition-transform hover:-translate-y-0.5 hover:bg-[var(--gold2)]"
              href={`tel:${contact.phone}`}
            >
              Me contacter
            </a>
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
