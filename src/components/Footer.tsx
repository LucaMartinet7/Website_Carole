import { navigationLinks, socialLinks } from '../content/siteContent'

export function Footer() {
  return (
    <footer className="relative z-10 bg-[#2a241d] px-8 py-12 text-center">
      <div className="mx-auto flex max-w-[1140px] flex-col items-center gap-7">
        <div className="text-[1.1rem] font-normal uppercase tracking-[0.2em] text-[var(--gold2)] [font-family:'Cormorant_Garamond',serif]">
          Carole Martinet · Reiki
        </div>
        <ul className="m-0 flex list-none flex-wrap justify-center gap-x-10 gap-y-4 p-0">
          {navigationLinks.map((link) => (
            <li key={link.href}>
              <a
                className="text-[0.65rem] font-normal uppercase tracking-[0.2em] text-[var(--muted)] no-underline transition-colors hover:text-[var(--gold)]"
                href={link.href}
                rel="noreferrer"
                target={link.href.startsWith('http') ? '_blank' : undefined}
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>
        <div className="flex gap-3">
          {socialLinks.map((link) => (
            <a
              key={link.label}
              className="grid h-9 w-9 place-items-center border border-[rgba(201,169,110,0.2)] text-[0.8rem] text-[var(--muted)] no-underline transition-colors hover:border-[var(--gold)] hover:bg-[rgba(201,169,110,0.04)] hover:text-[var(--gold)]"
              href={link.href}
              rel="noreferrer"
              target="_blank"
              title={link.label}
            >
              {link.shortLabel}
            </a>
          ))}
        </div>
        <p className="max-w-3xl text-center text-[0.62rem] font-light tracking-[0.15em] text-[rgba(168,159,150,0.4)]">
          ©2026 Carole Martinet · SIRET 91010645900019 · Médiation SNPER · Tous droits réservés
        </p>
      </div>
    </footer>
  )
}
