import { Link } from 'react-router-dom'
import { Divider } from '../components/Divider'
import { Reveal } from '../components/Reveal'
import { Rich } from '../components/Rich'
import { SectionHeading } from '../components/SectionHeading'
import { useContent } from '../i18n/useContent'

export function SeanceIndividuelle() {
  const { contact, seancePage, ui } = useContent()

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
            label={ui.seance.label}
            title={ui.seance.title}
            description={seancePage.intro}
          />
        </div>

        <Reveal delayMs={150}>
          <div className="mt-12">
            <h3 className="text-[1.5rem] font-light text-[var(--cream)] [font-family:'Cormorant_Garamond',serif]">
              <Rich text={ui.seance.deroulementTitle} />
            </h3>
            <p className="mt-4 text-[0.95rem] font-normal leading-[1.85] text-[var(--muted)]">
              {seancePage.deroulement}
            </p>
          </div>
        </Reveal>

        <Reveal delayMs={200}>
          <div className="mt-12">
            <h3 className="text-[1.5rem] font-light text-[var(--cream)] [font-family:'Cormorant_Garamond',serif]">
              <Rich text={ui.seance.explorerTitle} />
            </h3>
            <p className="mt-4 text-[0.95rem] font-normal leading-[1.85] text-[var(--muted)]">
              {seancePage.explorer.text}
            </p>
            <ul className="mt-5 flex flex-col gap-3">
              {seancePage.explorer.objectifs.map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <span className="mt-[0.5rem] h-[6px] w-[6px] shrink-0 rounded-full bg-[var(--gold)]" />
                  <span className="text-[0.93rem] font-normal leading-[1.75] text-[var(--cream)]">
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
              <Rich text={ui.seance.reikiTitle} />
            </h3>
            <p className="mt-4 whitespace-pre-line text-[0.95rem] font-normal leading-[1.85] text-[var(--muted)]">
              {seancePage.reiki.text}
            </p>
            <div className="mt-6 grid gap-x-8 gap-y-3 sm:grid-cols-2">
              {seancePage.reiki.bienfaits.map((item) => (
                <div key={item} className="flex items-start gap-3">
                  <span className="mt-[0.5rem] h-[6px] w-[6px] shrink-0 rounded-full bg-[var(--gold)]" />
                  <span className="text-[0.9rem] font-normal leading-[1.7] text-[var(--muted)]">
                    {item}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </Reveal>

        <Reveal delayMs={200}>
          <Divider className="mt-14" />
          <div className="mt-14">
            <h3 className="text-[1.5rem] font-light text-[var(--cream)] [font-family:'Cormorant_Garamond',serif]">
              <Rich text={ui.seance.tarifsTitle} />
            </h3>
            <p className="mt-4 text-[0.95rem] font-normal leading-[1.85] text-[var(--muted)]">
              {seancePage.tarifs.intro}
            </p>
            <ul className="mt-5 flex flex-col gap-3">
              {seancePage.tarifs.lignes.map((ligne) => (
                <li
                  key={ligne.lieu}
                  className="flex flex-wrap items-baseline justify-between gap-x-4 border-b border-[rgba(201,169,110,0.15)] pb-3"
                >
                  <span className="text-[0.88rem] font-light text-[var(--cream)]">
                    {ligne.lieu}
                  </span>
                  <span className="text-[0.9rem] font-medium tracking-[0.05em] text-[var(--gold2)]">
                    {ligne.prix}
                  </span>
                </li>
              ))}
            </ul>
            <p className="mt-4 text-[0.78rem] font-light leading-[1.7] text-[rgba(168,159,150,0.75)]">
              {seancePage.tarifs.note}
            </p>
          </div>
        </Reveal>

        <Reveal delayMs={200}>
          <Divider className="mt-14" />
          <div className="mt-14">
            <h3 className="text-[1.5rem] font-light text-[var(--cream)] [font-family:'Cormorant_Garamond',serif]">
              <Rich text={ui.seance.pratiqueTitle} />
            </h3>
            <p className="mt-4 text-[0.95rem] font-normal leading-[1.85] text-[var(--muted)]">
              <strong className="font-medium text-[var(--cream)]">{ui.seance.where}&nbsp;:</strong>{' '}
              {seancePage.pratique.lieux}
            </p>
            <p className="mt-2 text-[0.95rem] font-normal leading-[1.85] text-[var(--muted)]">
              <strong className="font-medium text-[var(--cream)]">{ui.seance.rythme}&nbsp;:</strong>{' '}
              {seancePage.pratique.recommandation}
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
              {ui.seance.book}
            </a>
            <Link
              className="text-[0.72rem] font-medium uppercase tracking-[0.2em] text-[var(--gold)] transition-colors hover:text-[var(--gold2)]"
              to="/"
            >
              {ui.common.back}
            </Link>
          </div>
        </Reveal>

        <Reveal delayMs={300}>
          <p className="mt-14 text-[0.72rem] font-light italic leading-[1.7] text-[var(--muted)]">
            {seancePage.avis}
          </p>
        </Reveal>
      </div>
    </main>
  )
}
