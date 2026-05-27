import type { PropsWithChildren } from 'react'
import { useScrollReveal } from '../hooks/useScrollReveal'

type RevealProps = PropsWithChildren<{
  className?: string
  delayMs?: number
}>

export function Reveal({ children, className = '', delayMs }: RevealProps) {
  const { ref, visible } = useScrollReveal<HTMLDivElement>()

  return (
    <div
      ref={ref}
      style={delayMs ? { transitionDelay: `${delayMs}ms` } : undefined}
      className={[
        'opacity-0 translate-y-8 transition-[opacity,transform] duration-700 ease-out will-change-transform',
        visible ? 'opacity-100 translate-y-0' : '',
        className,
      ]
        .filter(Boolean)
        .join(' ')}
    >
      {children}
    </div>
  )
}
