import { Link } from 'react-router-dom'
import { Divider } from '../components/Divider'
import { Reveal } from '../components/Reveal'
import { Rich } from '../components/Rich'
import { SectionHeading } from '../components/SectionHeading'
import { useContent } from '../i18n/useContent'

const h3 =
  "text-[1.5rem] font-light text-[var(--cream)] [font-family:'Cormorant_Garamond',serif]"
const body = 'mt-4 text-[0.95rem] font-normal leading-[1.85] text-[var(--muted)]'

export function ThetaHealing() {
  const { contact, thetaPage, ui } = useContent()

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
            label={thetaPage.label}
            title={thetaPage.title}
            description={thetaPage.intro}
          />
        </div>

        <Reveal delayMs={150}>
          <div className="mt-12">
            <h3 className={h3}>
              <Rich text={thetaPage.whatTitle} />
            </h3>
            <p className={body}>{thetaPage.what}</p>
          </div>
        </Reveal>

        <Reveal delayMs={200}>
          <div className="mt-12">
            <h3 className={h3}>
              <Rich text={thetaPage.howTitle} />
            </h3>
            <p className={body}>{thetaPage.how}</p>
          </div>
        </Reveal>

        <Reveal delayMs={200}>
          <div className="mt-12">
            <h3 className={h3}>
              <Rich text={thetaPage.benefitsTitle} />
            </h3>
            <ul className="mt-5 flex flex-col gap-3">
              {thetaPage.benefits.map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <span className="mt-[0.5rem] h-[6px] w-[6px] shrink-0 rounded-full bg-[var(--gold)]" />
                  <span className="text-[0.93rem] font-normal leading-[1.75] text-[var(--cream)]">
                    {item}
                  </span>
                </li>
              ))}
            </ul>
            <p className="mt-8 text-[0.85rem] font-medium tracking-[0.04em] text-[var(--gold2)]">
              {thetaPage.certification}
            </p>
          </div>
        </Reveal>

        <Reveal delayMs={200}>
          <Divider className="mt-14" />
          <div className="mt-14">
            <h3 className={h3}>
              <Rich text={thetaPage.tarifTitle} />
            </h3>
            <p className={body}>{thetaPage.tarif}</p>
            <p className={body}>{thetaPage.pratique}</p>
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
              {ui.common.contactMe}
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
            {thetaPage.avis}
          </p>
        </Reveal>
      </div>
    </main>
  )
}
