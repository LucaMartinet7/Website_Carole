import * as en from '../content/siteContent.en'
import * as fr from '../content/siteContent'
import { useLang } from './language'

// Both language modules expose the same exports; the French module is the
// canonical shape, so we cast the English one to match it.
export function useContent(): typeof fr {
  const { lang } = useLang()
  return lang === 'en' ? (en as unknown as typeof fr) : fr
}
