import { Link } from 'react-router-dom'
import { contact, formationsPage } from '../content/siteContent'
import { Reveal } from '../components/Reveal'
import { SectionHeading } from '../components/SectionHeading'

export function FormationsReiki() {
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
            label="Formations Reiki"
            title={
              <>
                Apprendre le Reiki, <em>à votre rythme</em>
              </>
            }
            description={<>{formationsPage.intro}</>}
          />
        </div>

        <Reveal delayMs={150}>
          <p className="mt-10 text-[0.9rem] font-light leading-[1.9] text-[var(--muted)]">
            {formationsPage.presentation}
          </p>
        </Reveal>

        <Reveal delayMs={200}>
          <div className="mt-12">
            <h3 className="text-[1.5rem] font-light text-[var(--cream)] [font-family:'Cormorant_Garamond',serif]">
              Le parcours de <em>formation</em>
            </h3>
            <ul className="mt-6 flex flex-col gap-5">
              {formationsPage.niveaux.map((niveau) => (
                <li key={niveau.title} className="border-l border-[rgba(201,169,110,0.3)] pl-5">
                  <strong className="block text-[0.85rem] font-medium tracking-[0.02em] text-[var(--cream)]">
                    {niveau.title}
                  </strong>
                  <span className="mt-1 block text-[0.85rem] font-light leading-[1.8] text-[var(--muted)]">
                    {niveau.text}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </Reveal>

        <Reveal delayMs={200}>
          <div className="mt-12">
            <h3 className="text-[1.5rem] font-light text-[var(--cream)] [font-family:'Cormorant_Garamond',serif]">
              Mon <em>approche</em>
            </h3>
            <div className="mt-6 grid gap-x-8 gap-y-3 sm:grid-cols-2">
              {formationsPage.approche.map((item) => (
                <div key={item} className="flex items-start gap-3">
                  <span className="mt-[0.5rem] h-[6px] w-[6px] shrink-0 rounded-full bg-[var(--gold)]" />
                  <span className="text-[0.85rem] font-light leading-[1.7] text-[var(--muted)]">
                    {item}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </Reveal>

        <Reveal delayMs={200}>
          <div className="mt-12 border-t border-[rgba(201,169,110,0.2)] pt-8">
            <h3 className="text-[1.5rem] font-light text-[var(--cream)] [font-family:'Cormorant_Garamond',serif]">
              S’inscrire
            </h3>
            <p className="mt-4 text-[0.9rem] font-light leading-[1.9] text-[var(--muted)]">
              {formationsPage.pratique}
            </p>
            <div className="mt-6 flex flex-wrap gap-x-6 gap-y-3 text-[0.85rem] tracking-[0.06em] text-[var(--gold2)]">
              <a href={`tel:${contact.phone}`}>{contact.phoneDisplay}</a>
              <a href={`mailto:${contact.email}`}>{contact.email}</a>
            </div>
          </div>
        </Reveal>

        <Reveal delayMs={250}>
          <div className="mt-12 flex flex-wrap items-center gap-5">
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
