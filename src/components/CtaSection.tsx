import { contact } from '../content/siteContent'
import { Reveal } from './Reveal'
import { SectionHeading } from './SectionHeading'

export function CtaSection() {
  return (
    <section
      id="cta"
      className="relative z-10 overflow-hidden bg-[linear-gradient(135deg,#4e4030,#3b3228,#564635)] text-center"
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
          <div className="flex flex-wrap justify-center gap-5">
            <a
              className="inline-flex items-center justify-center bg-[var(--gold)] px-10 py-4 text-[0.72rem] font-medium uppercase tracking-[0.2em] text-[var(--night)] transition-transform hover:-translate-y-0.5 hover:bg-[var(--gold2)] hover:shadow-[0_8px_40px_rgba(201,169,110,0.3)]"
              href={`mailto:${contact.email}?subject=Demande%20de%20rendez-vous`}
            >
              Réserver par email
            </a>
            <a
              className="inline-flex items-center justify-center border border-[rgba(201,169,110,0.4)] px-10 py-4 text-[0.72rem] font-medium uppercase tracking-[0.2em] text-[var(--gold)] transition-transform hover:-translate-y-0.5 hover:border-[var(--gold)] hover:bg-[rgba(201,169,110,0.06)]"
              href={`tel:${contact.phone}`}
            >
              Appeler Carole
            </a>
          </div>
        </Reveal>
        <Reveal delayMs={400}>
          <div className="mt-10 flex flex-col items-center gap-3 text-[0.85rem] tracking-[0.06em] text-[var(--gold2)]">
            <a href={`tel:${contact.phone}`}>{contact.phoneDisplay}</a>
            <a href={`mailto:${contact.email}`}>{contact.email}</a>
          </div>
          <a
            className="mt-8 inline-flex items-center gap-2 text-[0.72rem] font-medium uppercase tracking-[0.2em] text-[var(--gold)] transition-colors hover:text-[var(--gold2)]"
            href={contact.instagram}
            target="_blank"
            rel="noreferrer"
          >
            Suivez-moi sur Instagram @carolemartinet_reiki
          </a>
        </Reveal>
      </div>
    </section>
  )
}
