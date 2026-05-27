import { aboutBadges, contact, locations } from '../content/siteContent'
import { Reveal } from './Reveal'
import { SectionHeading } from './SectionHeading'

const aboutImageUrl =
  'https://static.wixstatic.com/media/574625_1ff956beb8884a3d92f5e77d23e876da~mv2.jpg/v1/fill/w_400,h_550,al_c,q_85,enc_avif,quality_auto/photopro.jpg'

export function AboutSection() {
  return (
    <section
      id="about"
      className="relative z-10 bg-[linear-gradient(to_bottom,var(--deep),var(--mid))]"
    >
      <div className="mx-auto max-w-[1140px] px-8 py-24">
        <div className="grid items-center gap-20 lg:grid-cols-[1fr_1.15fr]">
          <Reveal className="relative">
            <div className="pointer-events-none absolute inset-[-12px_12px_12px_-12px] border border-[rgba(201,169,110,0.2)]" />
            <img
              className="block aspect-[3/4] w-full object-cover object-top grayscale-[20%] contrast-[1.05]"
              src={aboutImageUrl}
              alt="Carole Martinet, Maître Reiki"
            />
            <div className="absolute bottom-[-1.5rem] right-[-1.5rem] bg-[var(--gold)] px-6 py-4 text-center text-[var(--night)]">
              <strong className="block text-[1.8rem] font-semibold leading-none [font-family:'Cormorant_Garamond',serif]">
                2014
              </strong>
              <span className="text-[0.62rem] font-medium uppercase tracking-[0.18em]">
                Maître Reiki
              </span>
            </div>
          </Reveal>

          <div>
            <SectionHeading
              align="left"
              label="À propos de Carole"
              title={
                <>
                  Une praticienne <em>formée à la tradition authentique</em>
                </>
              }
              description={
                <>
                  Dès mon plus jeune âge, j'ai ressenti la présence subtile des énergies qui nous
                  entourent. Cette sensibilité cultivée au fil des années me permet de vous
                  accompagner avec intuition et expertise.
                </>
              }
            />
            <Reveal delayMs={200}>
              <p className="mb-6 text-[0.87rem] font-light leading-[1.9] text-[var(--muted)]">
                J'ai eu la chance de me former à Londres auprès de Tomoyo Nozaki, Maître Reiki
                japonaise formée à l'Usui Reiki Ryoho — la tradition originelle. Maître Reiki depuis
                2014, j'accompagne mes clients vers une transformation durable.
              </p>
            </Reveal>
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
            <Reveal delayMs={400}>
              <div className="mt-8 flex flex-wrap gap-8">
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
      </div>
    </section>
  )
}
