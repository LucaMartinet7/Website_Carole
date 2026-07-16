import { contact, testimonials } from '../content/siteContent'
import { Reveal } from './Reveal'
import { SectionHeading } from './SectionHeading'

export function TestimonialsSection() {
  return (
    <section id="testimonials" className="relative z-10 bg-[var(--deep)]">
      <div className="mx-auto max-w-[1140px] px-8 pb-16 pt-24">
        <SectionHeading
          label="Ils témoignent"
          title={
            <>
              Des transformations <em>vécues</em>
            </>
          }
          description={
            <>
              Des retours sincères de personnes accompagnées avec le Reiki.
            </>
          }
        />
        <div className="mt-12 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {testimonials.map((testimonial, index) => (
            <Reveal key={testimonial.name} className="h-full" delayMs={100 * (index + 1)}>
              <article className="flex h-full flex-col border border-[rgba(201,169,110,0.1)] bg-[linear-gradient(145deg,rgba(64,54,44,0.9),rgba(51,45,38,0.95))] p-10 transition-transform duration-300 hover:-translate-y-1 hover:border-[rgba(201,169,110,0.28)]">
                <div className="mb-5 text-[0.9rem] tracking-[0.1em] text-[var(--gold)]">★★★★★</div>
                <p className="mb-7 text-[1.1rem] leading-[1.7] text-[var(--cream)] [font-family:'Cormorant_Garamond',serif] italic">
                  “{testimonial.text}”
                </p>
                <div className="mt-auto flex items-center gap-4">
                  <div className="grid h-[38px] w-[38px] shrink-0 place-items-center rounded-full bg-[linear-gradient(135deg,var(--gold),#8b6b3d)] text-[var(--night)] [font-family:'Cormorant_Garamond',serif] text-[1rem] font-medium">
                    {testimonial.initials}
                  </div>
                  <div>
                    <div className="text-[0.82rem] font-medium tracking-[0.06em] text-[var(--cream)]">
                      {testimonial.name}
                    </div>
                    <div className="text-[0.72rem] font-light text-[var(--muted)]">
                      {testimonial.detail}
                    </div>
                  </div>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
        <Reveal delayMs={200}>
          <div className="mt-12 text-center">
            <a
              className="inline-flex items-center gap-3 border border-[rgba(201,169,110,0.4)] px-7 py-4 text-[0.72rem] font-medium uppercase tracking-[0.2em] text-[var(--gold)] transition-transform hover:-translate-y-0.5 hover:border-[var(--gold)] hover:bg-[rgba(201,169,110,0.06)]"
              href={contact.googleReviews}
              target="_blank"
              rel="noreferrer"
            >
              <span className="text-[0.9rem] tracking-[0.15em] text-[var(--gold2)]">★★★★★</span>
              Voir mes avis Google
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
