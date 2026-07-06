import { contact } from '../content/siteContent'

const heroPortraitUrl =
  'https://static.wixstatic.com/media/574625_1ff956beb8884a3d92f5e77d23e876da~mv2.jpg/v1/fill/w_1600,h_1829,al_t,q_95,usm_1.20_1.00_0.01,enc_avif,quality_auto/photopro.jpg'

export function Hero() {
  return (
    <section
      className="relative grid min-h-screen place-items-center overflow-hidden px-5 py-32 text-center md:px-8"
      id="hero"
    >
      <div className="pointer-events-none absolute left-1/2 top-1/2 h-[600px] w-[600px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[radial-gradient(circle,rgba(107,76,140,0.35)_0%,transparent_70%)] [animation:breathe_7s_ease-in-out_infinite]" />
      <div className="pointer-events-none absolute bottom-[10%] left-1/2 h-[400px] w-[900px] -translate-x-1/2 bg-[radial-gradient(ellipse,rgba(201,169,110,0.07)_0%,transparent_65%)]" />
      <div className="relative z-10">
        <div className="mx-auto mb-10 w-full max-w-[240px] overflow-hidden rounded-3xl border border-[rgba(201,169,110,0.25)] opacity-0 shadow-[0_8px_40px_rgba(0,0,0,0.4)] [animation:fadeUp_0.9s_0.1s_forwards]">
          <img
            className="block aspect-[7/8] w-full object-cover object-top contrast-[1.03]"
            src={heroPortraitUrl}
            alt="Carole Martinet, Maître Reiki"
          />
        </div>
        <p className="mb-7 text-[0.68rem] font-medium uppercase tracking-[0.35em] text-[var(--gold)] opacity-0 [animation:fadeUp_0.9s_0.2s_forwards]">
          Thérapeute Énergétique · Maître Reiki depuis 2014
        </p>
        <h1 className="mx-auto mb-4 max-w-[820px] text-[clamp(2.8rem,7vw,5.8rem)] font-light leading-[1.05] tracking-[-0.01em] text-[var(--cream)] opacity-0 [font-family:'Cormorant_Garamond',serif] [animation:fadeUp_0.9s_0.4s_forwards]">
          Retrouvez votre
          <br />
          <em>équilibre intérieur</em>
          <br />
          et votre élan de vie
        </h1>
        <p className="mx-auto mb-12 max-w-[520px] text-[0.88rem] font-light leading-[1.8] tracking-[0.08em] text-[var(--muted)] opacity-0 [animation:fadeUp_0.9s_0.6s_forwards]">
          Séances de Reiki individuelles, initiations, formations.
          <br />À Ornex, Genève, ou à distance — en français et en anglais.
        </p>
        <div className="flex flex-wrap justify-center gap-5 opacity-0 [animation:fadeUp_0.9s_0.8s_forwards]">
          <a
            className="inline-flex items-center justify-center bg-[var(--gold)] px-10 py-4 text-[0.72rem] font-medium uppercase tracking-[0.2em] text-[var(--night)] transition-transform hover:-translate-y-0.5 hover:bg-[var(--gold2)] hover:shadow-[0_8px_40px_rgba(201,169,110,0.3)]"
            href={`tel:${contact.phone}`}
          >
            Réserver une séance
          </a>
          <a
            className="inline-flex items-center justify-center border border-[rgba(201,169,110,0.4)] px-10 py-4 text-[0.72rem] font-medium uppercase tracking-[0.2em] text-[var(--gold)] transition-transform hover:-translate-y-0.5 hover:border-[var(--gold)] hover:bg-[rgba(201,169,110,0.06)]"
            href="#services"
          >
            Découvrir les soins
          </a>
        </div>
      </div>
      <div className="absolute bottom-10 left-1/2 flex -translate-x-1/2 flex-col items-center gap-2 opacity-0 [animation:fadeUp_0.8s_1.4s_forwards]">
        <span className="text-[0.6rem] uppercase tracking-[0.28em] text-[var(--muted)]">
          Explorer
        </span>
        <div className="h-10 w-px bg-[linear-gradient(to_bottom,var(--gold),transparent)] [animation:scrollPulse_2s_ease-in-out_infinite]" />
      </div>
    </section>
  )
}
