import { useLang } from '../i18n/language'

const base = 'transition-colors'
const active = 'text-[var(--gold2)]'
const inactive = 'text-[var(--muted)] hover:text-[var(--gold)]'

export function LanguageSwitch({ className = '' }: { className?: string }) {
  const { lang, setLang } = useLang()

  return (
    <div
      className={`flex items-center gap-1.5 text-[0.7rem] font-medium uppercase tracking-[0.12em] ${className}`}
    >
      <button
        type="button"
        onClick={() => setLang('fr')}
        aria-pressed={lang === 'fr'}
        className={`${base} ${lang === 'fr' ? active : inactive}`}
      >
        FR
      </button>
      <span className="text-[rgba(201,169,110,0.4)]">/</span>
      <button
        type="button"
        onClick={() => setLang('en')}
        aria-pressed={lang === 'en'}
        className={`${base} ${lang === 'en' ? active : inactive}`}
      >
        EN
      </button>
    </div>
  )
}
