import { useEffect, useState } from 'react'
import { contact, navigationLinks } from '../content/siteContent'

export function Navigation() {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const updateScrolled = () => {
      setScrolled(window.scrollY > 60)
    }

    updateScrolled()
    window.addEventListener('scroll', updateScrolled, { passive: true })

    return () => window.removeEventListener('scroll', updateScrolled)
  }, [])

  return (
    <nav
      className={`fixed left-0 right-0 top-0 z-50 flex items-center justify-between gap-3 bg-gradient-to-b from-[rgba(51,45,38,0.95)] to-transparent px-4 py-5 backdrop-blur-[4px] transition-colors md:gap-6 md:px-12 ${
        scrolled ? 'bg-[rgba(51,45,38,0.97)]' : ''
      }`}
    >
      <a
        className="whitespace-nowrap text-[1rem] font-normal uppercase tracking-[0.1em] text-[var(--gold2)] [font-family:'Cormorant_Garamond',serif] md:text-[1.35rem] md:tracking-[0.15em]"
        href="/#hero"
      >
        Carole Martinet
      </a>
      <ul className="m-0 hidden list-none gap-9 p-0 lg:flex">
        {navigationLinks.map((link) => (
          <li key={link.href}>
            <a
              className="text-[0.72rem] font-medium uppercase tracking-[0.18em] text-[var(--muted)] transition-colors hover:text-[var(--gold)]"
              href={link.href}
            >
              {link.label}
            </a>
          </li>
        ))}
      </ul>
      <a
        className="inline-flex shrink-0 items-center justify-center whitespace-nowrap bg-[var(--gold)] px-3 py-2 text-[0.58rem] font-medium uppercase tracking-[0.1em] text-[var(--night)] transition-transform hover:-translate-y-px hover:bg-[var(--gold2)] md:px-5 md:text-[0.7rem] md:tracking-[0.18em]"
        href={`mailto:${contact.email}?subject=Demande%20de%20rendez-vous`}
      >
        Prendre rendez-vous
      </a>
    </nav>
  )
}
