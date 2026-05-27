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
        <p
          className={`mb-4 text-[0.62rem] font-medium uppercase tracking-[0.38em] text-[var(--gold)] ${align === 'left' ? 'text-left' : 'text-center'}`}
        >
          {label}
        </p>
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
          className={`mx-auto max-w-[580px] text-[0.87rem] font-light leading-[1.85] text-[var(--muted)] ${align === 'left' ? 'mx-0 text-left' : 'text-center'}`}
        >
          {description}
        </p>
      </Reveal>
    </>
  )
}
