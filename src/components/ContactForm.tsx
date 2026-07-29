import { useState } from 'react'
import { Link } from 'react-router-dom'
import { contact } from '../content/siteContent'

type Status = 'idle' | 'sending' | 'success' | 'error'

const endpoint = `https://formsubmit.co/ajax/${contact.email}`

const fieldClass =
  'w-full rounded-lg border border-[rgba(201,169,110,0.3)] bg-[rgba(51,45,38,0.5)] px-4 py-3 text-[0.9rem] font-normal text-[var(--cream)] placeholder:text-[rgba(168,159,150,0.6)] outline-none transition-colors focus:border-[var(--gold)]'

export function ContactForm() {
  const [status, setStatus] = useState<Status>('idle')

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    const form = event.currentTarget
    const data = new FormData(form)

    // Honeypot : si ce champ caché est rempli, c'est un robot.
    if (data.get('_honey')) {
      return
    }

    setStatus('sending')

    try {
      const response = await fetch(endpoint, {
        method: 'POST',
        headers: { Accept: 'application/json', 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name: data.get('name'),
          email: data.get('email'),
          message: data.get('message'),
          _subject: 'Nouveau message depuis carolemartinet.com',
          _template: 'table',
        }),
      })

      if (response.ok) {
        setStatus('success')
        form.reset()
      } else {
        setStatus('error')
      }
    } catch {
      setStatus('error')
    }
  }

  if (status === 'success') {
    return (
      <div className="rounded-xl border border-[rgba(201,169,110,0.3)] bg-[rgba(201,169,110,0.06)] px-6 py-10 text-center">
        <p className="text-[1.3rem] font-light italic text-[var(--gold2)] [font-family:'Cormorant_Garamond',serif]">
          Merci, votre message est bien parti.
        </p>
        <p className="mt-3 text-[0.88rem] font-normal leading-[1.7] text-[var(--muted)]">
          Je vous réponds dès que possible. À très vite !
        </p>
      </div>
    )
  }

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-4 text-left">
      <input type="text" name="_honey" tabIndex={-1} autoComplete="off" className="hidden" />

      <div className="grid gap-4 sm:grid-cols-2">
        <label className="flex flex-col gap-2">
          <span className="text-[0.68rem] font-medium uppercase tracking-[0.16em] text-[var(--gold)]">
            Votre nom
          </span>
          <input
            type="text"
            name="name"
            required
            autoComplete="name"
            placeholder="Prénom et nom"
            className={fieldClass}
          />
        </label>
        <label className="flex flex-col gap-2">
          <span className="text-[0.68rem] font-medium uppercase tracking-[0.16em] text-[var(--gold)]">
            Votre email
          </span>
          <input
            type="email"
            name="email"
            required
            autoComplete="email"
            placeholder="vous@exemple.com"
            className={fieldClass}
          />
        </label>
      </div>

      <label className="flex flex-col gap-2">
        <span className="text-[0.68rem] font-medium uppercase tracking-[0.16em] text-[var(--gold)]">
          Votre message
        </span>
        <textarea
          name="message"
          required
          rows={5}
          placeholder="Dites-moi en quelques mots ce qui vous amène…"
          className={`${fieldClass} resize-none`}
        />
      </label>

      <label className="flex items-start gap-3 text-left">
        <input
          type="checkbox"
          name="consent"
          required
          className="mt-1 h-4 w-4 shrink-0 accent-[var(--gold)]"
        />
        <span className="text-[0.72rem] font-normal leading-[1.6] text-[var(--muted)]">
          J’accepte que les informations transmises via ce formulaire soient utilisées pour répondre
          à ma demande. Elles ne sont ni cédées ni revendues. Voir la{' '}
          <Link to="/mentions-legales" className="text-[var(--gold)] underline-offset-2 hover:underline">
            politique de confidentialité
          </Link>
          .
        </span>
      </label>

      <div className="mt-2 flex flex-col items-center gap-4">
        <button
          type="submit"
          disabled={status === 'sending'}
          className="inline-flex items-center justify-center bg-[var(--gold)] px-10 py-4 text-[0.72rem] font-medium uppercase tracking-[0.2em] text-[var(--night)] transition-transform hover:-translate-y-0.5 hover:bg-[var(--gold2)] disabled:cursor-not-allowed disabled:opacity-60"
        >
          {status === 'sending' ? 'Envoi en cours…' : 'Envoyer le message'}
        </button>
        {status === 'error' && (
          <p className="text-[0.8rem] font-normal text-[#e0a08a]">
            Une erreur est survenue. Réessayez, ou écrivez-moi directement à {contact.email}.
          </p>
        )}
      </div>
    </form>
  )
}
