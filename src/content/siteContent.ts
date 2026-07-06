export const navigationLinks = [
  { label: 'Soins', href: '#services' },
  { label: 'À propos', href: '#about' },
  { label: 'Témoignages', href: '#testimonials' },
] as const

export const resonanceCards = [
  {
    icon: '🌊',
    title: 'Stress & Épuisement',
    description:
      'Vous vous sentez débordé(e), fatigué(e) de manière chronique, incapable de vous déconnecter vraiment.',
  },
  {
    icon: '🔒',
    title: 'Blocages émotionnels',
    description:
      'Des schémas répétitifs vous freinent — peur, colère, tristesse — sans que vous parveniez à les dépasser seul(e).',
  },
  {
    icon: '💫',
    title: 'Manque de confiance',
    description:
      'Vous aspirez à avancer dans votre vie personnelle ou professionnelle mais quelque chose vous retient.',
  },
  {
    icon: '🌿',
    title: 'Quête de bien-être',
    description:
      'Vous sentez l’appel d’une détente plus profonde, d’une harmonie corps-esprit que les approches classiques n’ont pas comblée.',
  },
] as const

export const services = [
  {
    number: '01',
    title: 'Séance Reiki',
    description:
      'Une technique douce et non invasive pour libérer les tensions, rééquilibrer votre énergie et retrouver un calme profond. En présentiel ou à distance.',
    href: 'https://www.carolemartinet.com/soins',
    cta: 'En savoir plus',
  },
  {
    number: '02',
    title: 'Formation Reiki',
    description:
      'Degrés 1 à 4, en petits groupes pour un enseignement personnalisé. Apprenez à pratiquer le Reiki pour vous-même et vos proches, avec un suivi après chaque niveau.',
    href: 'https://www.carolemartinet.com/copie-de-seance',
    cta: 'Voir les formations',
  },
] as const

export const aboutBadges = [
  'Usui Reiki Ryoho',
  'Degrés 1 → 4',
  'Français & Anglais',
  'Séances à distance',
] as const

export const locations = [
  {
    title: 'Ornex, Ain (01)',
    detail: 'Cabinet principal',
  },
  {
    title: 'Genève',
    detail: 'Cabinet secondaire',
  },
  {
    title: 'À distance',
    detail: 'Partout dans le monde',
  },
] as const

export const testimonials = [
  {
    initials: 'L',
    name: 'Laura',
    detail: 'Cliente · Soin Reiki',
    text: 'Les séances de Reiki avec Carole m’ont permis d’éliminer des peurs et des angoisses qui m’empêchaient d’avancer dans ma vie professionnelle. J’ai repris confiance en moi et de nouvelles opportunités se sont présentées.',
  },
  {
    initials: 'C',
    name: 'Christelle',
    detail: 'Cliente fidèle · Ornex',
    text: 'Je me rends régulièrement dans ce petit havre de paix. Carole utilise des méthodes adaptées à chaque demande, les résultats sont formidables ! Une praticienne bienveillante et à l’écoute.',
  },
  {
    initials: 'D',
    name: 'Dean',
    detail: 'Client · Séance à distance',
    text: 'Lors de ma première séance, j’ai ressenti une relaxation profonde et un réel apaisement. J’étais ensuite plus concentré, ma réflexion plus productive, et en paix avec moi-même.',
  },
] as const

export const footerLinks = [
  { label: 'Accueil', href: 'https://www.carolemartinet.com' },
  { label: 'À propos', href: 'https://www.carolemartinet.com/carole' },
  { label: 'Séance', href: 'https://www.carolemartinet.com/soins' },
  { label: 'Rendez-vous', href: 'https://www.carolemartinet.com/tarifs' },
  { label: 'Formations', href: 'https://www.carolemartinet.com/copie-de-seance' },
  { label: 'Mentions légales', href: 'https://www.carolemartinet.com/mentions-légales' },
] as const

export const socialLinks = [
  { label: 'Facebook', href: 'https://www.facebook.com/carolemartinet1/', shortLabel: 'f' },
  {
    label: 'Instagram',
    href: 'https://www.instagram.com/stories/carolemartinet_reiki/',
    shortLabel: 'in',
  },
  {
    label: 'LinkedIn',
    href: 'http://www.linkedin.com/in/carole-martinet-b2a05034',
    shortLabel: 'li',
  },
] as const

export const contact = {
  phone: '+33678531946',
  phoneDisplay: '+33 6 78 53 19 46',
  email: 'martinetcarole1@gmail.com',
} as const
