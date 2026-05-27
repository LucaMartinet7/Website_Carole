import { testimonials } from '../content/siteContent'
import { Reveal } from './Reveal'
import { SectionHeading } from './SectionHeading'

export function TestimonialsSection() {
  return (
    <section id="testimonials" className="relative z-10 bg-[var(--deep)]">
      <div className="mx-auto max-w-[1140px] px-8 py-24">
        <SectionHeading
          label="Ils témoignent"
          title={
            <>
              Des transformations <em>vécues</em>
            </>
          }
          description={
            <>
              Des retours sincères de personnes accompagnées avec le Reiki et la réflexologie
              faciale.
            </>
          }
        />
        <div className="mt-12 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {testimonials.map((testimonial, index) => (
            <Reveal key={testimonial.name} delayMs={100 * (index + 1)}>
              <article className="border border-[rgba(201,169,110,0.1)] bg-[linear-gradient(145deg,rgba(17,15,30,0.9),rgba(9,8,15,0.95))] p-10 transition-transform duration-300 hover:-translate-y-1 hover:border-[rgba(201,169,110,0.28)]">
                <div className="mb-5 text-[0.9rem] tracking-[0.1em] text-[var(--gold)]">★★★★★</div>
                <p className="mb-7 text-[1.1rem] leading-[1.7] text-[var(--cream)] [font-family:'Cormorant_Garamond',serif] italic">
                  “{testimonial.text}”
                </p>
                <div className="flex items-center gap-4">
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
      </div>
    </section>
  )
}
