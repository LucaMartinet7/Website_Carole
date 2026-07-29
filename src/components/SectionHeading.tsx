import type { ReactNode } from 'react'
import { Reveal } from './Reveal'

type SectionHeadingProps = {
  label: string
  title: ReactNode
  description: ReactNode
  align?: 'center' | 'left'
}

export function SectionHeading({
  label,
  title,
  description,
  align = 'center',
}: SectionHeadingProps) {
  return (
    <>
      <Reveal className={align === 'left' ? 'text-left' : ''}>
        <div
          className={`mb-5 flex items-center gap-3.5 ${align === 'left' ? 'justify-start' : 'justify-center'}`}
        >
          <span className="h-px w-7 bg-[var(--gold)] opacity-50" />
          <p className="text-[0.62rem] font-medium uppercase tracking-[0.38em] text-[var(--gold)]">
            {label}
          </p>
          {align !== 'left' && <span className="h-px w-7 bg-[var(--gold)] opacity-50" />}
        </div>
      </Reveal>
      <Reveal className={align === 'left' ? 'text-left' : ''} delayMs={100}>
        <h2
          className={`mb-6 text-[clamp(2rem,4.5vw,3.4rem)] font-light leading-[1.15] text-[var(--cream)] [font-family:'Cormorant_Garamond',serif] ${align === 'left' ? 'text-left' : 'text-center'}`}
        >
          {title}
        </h2>
      </Reveal>
      <Reveal className={align === 'left' ? 'text-left' : ''} delayMs={200}>
        <p
          className={`max-w-[600px] text-[0.98rem] font-normal leading-[1.85] text-[var(--muted)] ${align === 'left' ? 'text-left' : 'mx-auto text-center'}`}
        >
          {description}
        </p>
      </Reveal>
    </>
  )
}
