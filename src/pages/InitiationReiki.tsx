import { Link } from 'react-router-dom'
import { Divider } from '../components/Divider'
import { Reveal } from '../components/Reveal'
import { Rich } from '../components/Rich'
import { SectionHeading } from '../components/SectionHeading'
import { useContent } from '../i18n/useContent'

export function InitiationReiki() {
  const { contact, initiationPage, ui } = useContent()

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
            label={ui.initiation.label}
            title={ui.initiation.title}
            description={initiationPage.intro}
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
              <Rich text={ui.initiation.accessibleTitle} />
            </h3>
            <p className="mt-4 text-[0.95rem] font-normal leading-[1.85] text-[var(--muted)]">
              {initiationPage.presentation}
            </p>
          </div>
        </Reveal>

        <Reveal delayMs={200}>
          <div className="mt-12">
            <h3 className="text-[1.5rem] font-light text-[var(--cream)] [font-family:'Cormorant_Garamond',serif]">
              <Rich text={ui.initiation.derouleTitle} />
            </h3>
            <p className="mt-4 text-[0.95rem] font-normal leading-[1.85] text-[var(--muted)]">
              {initiationPage.deroule}
            </p>
          </div>
        </Reveal>

        <Reveal delayMs={200}>
          <div className="mt-12">
            <h3 className="text-[1.5rem] font-light text-[var(--cream)] [font-family:'Cormorant_Garamond',serif]">
              <Rich text={ui.initiation.vivreTitle} />
            </h3>
            <ul className="mt-5 flex flex-col gap-3">
              {initiationPage.vivre.map((item) => (
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
              <Rich text={ui.initiation.pourQuiTitle} />
            </h3>
            <p className="mt-4 text-[0.95rem] font-normal leading-[1.85] text-[var(--muted)]">
              {initiationPage.pourQui}
            </p>
          </div>
        </Reveal>

        <Reveal delayMs={200}>
          <Divider className="mt-14" />
          <div className="mt-14">
            <h3 className="text-[1.5rem] font-light text-[var(--cream)] [font-family:'Cormorant_Garamond',serif]">
              <Rich text={ui.initiation.ouTitle} />
            </h3>
            <p className="mt-4 whitespace-pre-line text-[0.95rem] font-normal leading-[1.85] text-[var(--muted)]">
              {initiationPage.ou}
            </p>
            <div className="mt-6 flex flex-wrap gap-x-6 gap-y-3 text-[0.85rem] tracking-[0.06em] text-[var(--gold2)]">
              <a href={`tel:${contact.phone}`}>{contact.phoneDisplay}</a>
              <a href={`mailto:${contact.email}`}>{contact.email}</a>
            </div>
          </div>
        </Reveal>

        <Reveal delayMs={250}>
          <p className="mt-14 text-[0.95rem] font-normal leading-[1.85] text-[var(--muted)]">
            {ui.initiation.closing}
          </p>
          <div className="mt-8 flex flex-wrap items-center gap-5">
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
      </div>
    </main>
  )
}
