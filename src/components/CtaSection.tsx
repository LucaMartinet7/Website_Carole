import { contact } from '../content/siteContent'
import { Reveal } from './Reveal'
import { SectionHeading } from './SectionHeading'

export function CtaSection() {
  return (
    <section
      id="cta"
      className="relative z-10 overflow-hidden bg-[linear-gradient(135deg,#1a1428,#0f0d1a,#1c1830)] text-center"
    >
      <div className="pointer-events-none absolute left-1/2 top-1/2 h-[700px] w-[700px] -translate-x-1/2 -translate-y-1/2 bg-[radial-gradient(circle,rgba(201,169,110,0.1)_0%,transparent_60%)]" />
      <div className="relative z-10 mx-auto max-w-[640px] px-8 py-24">
        <SectionHeading
          label="Prêt(e) à commencer ?"
          title={
            <>
              Votre première séance
              <br />
              est <em>une invitation</em>
            </>
          }
          description={
            <>
              Chaque chemin vers le bien-être commence par un premier pas. Contactez-moi pour
              échanger sur vos besoins ou réserver directement votre séance.
            </>
          }
        />
        <Reveal delayMs={300}>
          <a
            className="inline-flex items-center justify-center bg-[var(--gold)] px-10 py-4 text-[0.72rem] font-medium uppercase tracking-[0.2em] text-[var(--night)] transition-transform hover:-translate-y-0.5 hover:bg-[var(--gold2)] hover:shadow-[0_8px_40px_rgba(201,169,110,0.3)]"
            href={`tel:${contact.phone}`}
          >
            Appeler Carole
          </a>
        </Reveal>
        <Reveal delayMs={400}>
          <div className="mt-10 flex flex-col items-center gap-3">
            <a href={`tel:${contact.phone}`}>{contact.phoneDisplay}</a>
            <a href={`mailto:${contact.email}`}>{contact.email}</a>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
