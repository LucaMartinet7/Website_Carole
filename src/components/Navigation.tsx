import { useEffect, useState } from 'react'
import { contact, navigationLinks } from '../content/siteContent'

export function Navigation() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const updateScrolled = () => {
      setScrolled(window.scrollY > 60)
    }

    updateScrolled()
    window.addEventListener('scroll', updateScrolled, { passive: true })

    return () => window.removeEventListener('scroll', updateScrolled)
  }, [])

  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : ''
    return () => {
      document.body.style.overflow = ''
    }
  }, [menuOpen])

  const closeMenu = () => setMenuOpen(false)

  return (
    <nav
      className={`fixed left-0 right-0 top-0 z-50 flex items-center justify-between gap-3 bg-gradient-to-b from-[rgba(51,45,38,0.95)] to-transparent px-4 py-5 backdrop-blur-[4px] transition-colors md:gap-6 md:px-12 ${
        scrolled || menuOpen ? 'bg-[rgba(51,45,38,0.97)]' : ''
      }`}
    >
      <a
        className="whitespace-nowrap text-[1rem] font-normal uppercase tracking-[0.1em] text-[var(--gold2)] [font-family:'Cormorant_Garamond',serif] md:text-[1.35rem] md:tracking-[0.15em]"
        href="/#hero"
        onClick={closeMenu}
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

      <div className="flex items-center gap-3">
        <a
          className="hidden shrink-0 items-center justify-center whitespace-nowrap bg-[var(--gold)] px-3 py-2 text-[0.58rem] font-medium uppercase tracking-[0.1em] text-[var(--night)] transition-transform hover:-translate-y-px hover:bg-[var(--gold2)] sm:inline-flex md:px-5 md:text-[0.7rem] md:tracking-[0.18em]"
          href={`mailto:${contact.email}?subject=Demande%20de%20rendez-vous`}
        >
          Prendre rendez-vous
        </a>

        <button
          type="button"
          aria-label={menuOpen ? 'Fermer le menu' : 'Ouvrir le menu'}
          aria-expanded={menuOpen}
          onClick={() => setMenuOpen((open) => !open)}
          className="flex h-10 w-10 shrink-0 flex-col items-center justify-center gap-[5px] text-[var(--cream)] lg:hidden"
        >
          <span
            className={`block h-px w-6 bg-current transition-transform duration-300 ${
              menuOpen ? 'translate-y-[6px] rotate-45' : ''
            }`}
          />
          <span
            className={`block h-px w-6 bg-current transition-opacity duration-300 ${
              menuOpen ? 'opacity-0' : ''
            }`}
          />
          <span
            className={`block h-px w-6 bg-current transition-transform duration-300 ${
              menuOpen ? '-translate-y-[6px] -rotate-45' : ''
            }`}
          />
        </button>
      </div>

      {menuOpen && (
        <div className="absolute left-0 right-0 top-full flex flex-col gap-1 border-t border-[rgba(201,169,110,0.15)] bg-[rgba(43,36,29,0.99)] px-6 py-6 backdrop-blur-md lg:hidden">
          {navigationLinks.map((link) => (
            <a
              key={link.href}
              className="border-b border-[rgba(201,169,110,0.1)] py-4 text-[0.8rem] font-medium uppercase tracking-[0.2em] text-[var(--cream)] transition-colors hover:text-[var(--gold)]"
              href={link.href}
              onClick={closeMenu}
            >
              {link.label}
            </a>
          ))}
          <a
            className="mt-5 inline-flex items-center justify-center bg-[var(--gold)] px-5 py-4 text-[0.72rem] font-medium uppercase tracking-[0.18em] text-[var(--night)] transition-colors hover:bg-[var(--gold2)]"
            href={`mailto:${contact.email}?subject=Demande%20de%20rendez-vous`}
            onClick={closeMenu}
          >
            Prendre rendez-vous
          </a>
        </div>
      )}
    </nav>
  )
}
