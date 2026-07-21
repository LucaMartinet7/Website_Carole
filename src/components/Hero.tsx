import { contact } from '../content/siteContent'

export function Hero() {
  return (
    <section
      className="relative flex min-h-screen items-center overflow-hidden px-5 py-32 md:px-8"
      id="hero"
    >
      <div className="pointer-events-none absolute left-1/2 top-1/2 h-[600px] w-[600px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[radial-gradient(circle,rgba(120,85,45,0.32)_0%,transparent_70%)] [animation:breathe_7s_ease-in-out_infinite]" />
      <div className="pointer-events-none absolute bottom-[10%] left-1/2 h-[400px] w-[900px] -translate-x-1/2 bg-[radial-gradient(ellipse,rgba(201,169,110,0.07)_0%,transparent_65%)]" />

      <div className="relative z-10 mx-auto grid w-full max-w-[1120px] items-center gap-12 lg:grid-cols-[1fr_360px] lg:gap-20">
        <div className="order-2 text-center lg:order-1 lg:text-left">
          <p className="mb-7 text-[0.68rem] font-medium uppercase tracking-[0.35em] text-[var(--gold)] opacity-0 [animation:fadeUp_0.9s_0.2s_forwards]">
            Thérapeute Énergétique · Maître Reiki depuis 2014
          </p>
          <h1 className="mb-5 text-[clamp(2.3rem,5vw,4.2rem)] font-light leading-[1.08] tracking-[-0.01em] text-[var(--cream)] opacity-0 [font-family:'Cormorant_Garamond',serif] [animation:fadeUp_0.9s_0.4s_forwards]">
            Retrouvez votre <em>équilibre</em> et avancez vers ce qui est juste pour vous
          </h1>
          <p className="mx-auto mb-10 max-w-[500px] text-[0.88rem] font-light leading-[1.8] tracking-[0.08em] text-[var(--muted)] opacity-0 [animation:fadeUp_0.9s_0.6s_forwards] lg:mx-0">
            Séances de Reiki individuelles, initiations, formations.
            <br />À Ornex, Genève, ou à distance, en français et en anglais.
          </p>
          <div className="flex flex-wrap justify-center gap-5 opacity-0 [animation:fadeUp_0.9s_0.8s_forwards] lg:justify-start">
            <a
              className="inline-flex items-center justify-center bg-[var(--gold)] px-10 py-4 text-[0.72rem] font-medium uppercase tracking-[0.2em] text-[var(--night)] transition-transform hover:-translate-y-0.5 hover:bg-[var(--gold2)] hover:shadow-[0_8px_40px_rgba(201,169,110,0.3)]"
              href={`mailto:${contact.email}?subject=Demande%20de%20rendez-vous`}
            >
              Réserver par email
            </a>
            <a
              className="inline-flex items-center justify-center border border-[rgba(201,169,110,0.4)] px-10 py-4 text-[0.72rem] font-medium uppercase tracking-[0.2em] text-[var(--gold)] transition-transform hover:-translate-y-0.5 hover:border-[var(--gold)] hover:bg-[rgba(201,169,110,0.06)]"
              href="#services"
            >
              Découvrir les soins
            </a>
          </div>
        </div>

        <div className="order-1 mx-auto w-full max-w-[300px] opacity-0 [animation:fadeUp_0.9s_0.1s_forwards] lg:order-2 lg:mx-0 lg:max-w-none">
          <div className="relative">
            <div className="pointer-events-none absolute -inset-6 rounded-[2rem] bg-[radial-gradient(circle,rgba(201,169,110,0.18)_0%,transparent_70%)]" />
            <div className="relative overflow-hidden rounded-[1.75rem] border border-[rgba(201,169,110,0.3)] shadow-[0_20px_60px_rgba(0,0,0,0.45)]">
              <img
                className="block aspect-[4/5] w-full object-cover object-[center_28%] brightness-[1.02] contrast-[1.05]"
                src="/photos/about-portrait.jpg"
                alt="Carole Martinet, thérapeute énergétique et Maître Reiki"
                width={340}
                height={425}
              />
              <div className="pointer-events-none absolute inset-x-0 bottom-0 h-1/3 bg-[linear-gradient(to_top,rgba(51,45,38,0.55),transparent)]" />
            </div>
          </div>
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
