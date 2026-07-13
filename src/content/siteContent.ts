export const navigationLinks = [
  { label: 'Soins', href: '/#services' },
  { label: 'À propos', href: '/#about' },
  { label: 'Témoignages', href: '/#testimonials' },
] as const

export const resonanceCards = [
  {
    icon: '🌊',
    title: 'Stress & Épuisement',
    description: 'débordé(e), tendu(e), épuisé(e), sans parvenir à relâcher la pression.',
  },
  {
    icon: '🔒',
    title: 'Blocages émotionnels',
    description: 'peur, colère ou tristesse qui reviennent en boucle.',
  },
  {
    icon: '💫',
    title: 'Manque de confiance',
    description: 'oser avancer malgré le doute intérieur.',
  },
  {
    icon: '🧬',
    title: 'Héritages invisibles',
    description: 'mémoires familiales, éducation, traumatismes, vies antérieures ou parallèles.',
  },
] as const

export const services = [
  {
    number: '01',
    title: 'Séance individuelle',
    description:
      'Une technique douce et non invasive pour libérer les tensions, rééquilibrer votre énergie et retrouver un calme profond. En présentiel ou à distance.',
    href: '/seance-individuelle',
    cta: 'En savoir plus',
  },
  {
    number: '02',
    title: 'Initiation Reiki',
    description:
      'Une découverte du Reiki en groupe, pour vous familiariser avec les énergies, ressentir leurs bienfaits et faire vos premiers pas en douceur. Idéale lors d’ateliers et d’événements bien-être.',
    href: 'https://www.carolemartinet.com/copie-de-seance',
    cta: 'En savoir plus',
  },
  {
    number: '03',
    title: 'Formations Reiki',
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
    detail: 'Centre Aliotis, quartier de Rive',
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

export const seancePage = {
  intro:
    'Un temps rien que pour vous, pour vous détendre en profondeur, relâcher le stress et retrouver votre énergie.',
  deroulement:
    'Chaque séance commence par un échange, pour cerner ensemble vos besoins et vos priorités. J’accueille avec douceur celles et ceux qui traversent la fatigue, un stress installé, un besoin de se reconnecter à soi ou une envie de changement. Les séances se déroulent en français ou en anglais, fortes de plus de vingt ans d’expérience à l’international.',
  explorer: {
    text: 'Ensemble, nous mettons en lumière ce qui vous freine, consciemment ou non. Peu à peu, nous libérons les blocages, les schémas émotionnels et les charges anciennes, parfois hérités de votre histoire ou de vies antérieures.',
    objectifs: [
      'Relâcher les émotions qui pèsent',
      'Retrouver confiance en vous',
      'Raviver votre élan pour avancer vers ce qui compte',
    ],
  },
  reiki: {
    text: 'Le Reiki est une pratique énergétique japonaise, douce et sans danger, qui agit par un léger toucher des mains.\nIl aide à relâcher le stress, à apaiser le mental et à retrouver calme et sérénité.',
    bienfaits: [
      'Détente profonde et baisse du stress',
      'Moins de fatigue, plus de sérénité',
      'Un sommeil plus réparateur',
      'Réduction des tensions physiques',
      'Système immunitaire soutenu',
      'Harmonie du corps et de l’esprit',
      'Une énergie équilibrée, une vibration plus légère',
      'Regain d’énergie et de motivation',
      'Plus de clarté pour faire vos choix',
    ],
  },
  pratique: {
    lieux:
      'En présentiel à Ornex (01) ou à Genève (Centre Aliotis, quartier de Rive), et à distance partout dans le monde.',
    recommandation:
      'Un cycle de 3 séances à 15 jours d’intervalle, puis une séance par mois si vous le souhaitez.',
  },
  avis: 'Le Reiki est un complément à la médecine traditionnelle et ne remplace en aucun cas un traitement médical.',
} as const

export const aboutStory = [
  'Dès l’enfance, j’ai découvert le pouvoir des approches complémentaires. Là où la médecine classique ne suffisait pas à soulager mes proches, des méthodes énergétiques et émotionnelles apportaient un véritable apaisement. Cette conviction ne m’a jamais quittée.',
  'Très jeune, j’ai aussi ressenti les énergies qui nous entourent et la présence d’un monde subtil. Nourrie par des soins, des stages et des initiations, cette sensibilité est aujourd’hui au cœur de ma pratique. C’est elle qui me permet de vous accueillir avec écoute et sans jugement.',
  'J’ai ensuite vécu vingt ans à l’étranger, aux États-Unis, en Côte d’Ivoire et au Royaume-Uni. J’y ai terminé mes études, travaillé dans la mode, puis tout arrêté pour prendre le temps d’élever mes enfants. Des années riches de rencontres et de don de soi, qui m’ont appris la valeur de l’ancrage et de l’écoute.',
  'En 2010, j’ai décidé de faire de cette vocation mon métier. Je me suis formée au Reiki Usui Ryoho, sa forme traditionnelle, auprès de la Maître japonaise Tomoyo Nozaki, et je suis devenue Maître Reiki à Londres en 2014. Ce cheminement a transformé ma pratique autant que ma vie.',
  'Aujourd’hui, ma pratique s’enrichit d’autres approches, comme les techniques de libération émotionnelle (TERET) et les Annales Akashiques. Autant d’outils pour vous aider à vous libérer de ce qui vous retient et à avancer, à votre rythme, vers ce qui est juste pour vous.',
] as const

export const expertise = {
  intro:
    'Je me spécialise dans le retour à soi. Je vous aide à vous déconnecter des tensions, libérer ce qui vous retient et créer la vie qui vous ressemble.',
  points: [
    {
      title: 'Libération',
      text: 'Se délester des tensions, des émotions et des blocages qui pèsent, parfois hérités de votre passé, de votre famille ou de vies antérieures, pour libérer les peurs et les croyances qui vous limitent.',
    },
    {
      title: 'Équilibre',
      text: 'Retrouver l’harmonie du corps et de l’esprit, apaiser le stress et l’anxiété, et renouer avec une sérénité profonde et durable.',
    },
    {
      title: 'Cheminement',
      text: 'Avancer à votre rythme, pas à pas, vers votre essence profonde et votre plein potentiel. Chaque soin est une étape de votre évolution.',
    },
  ],
} as const

export const trainingGroups = [
  {
    heading: 'Formations Reiki — Maître Reiki Praticienne Enseignante',
    items: [
      {
        title: 'Reiki IV : Shinpiden (Niveau 4) — Enseignant',
        date: 'Septembre 2014',
        detail: 'The Energy Space International · Maître Reiki Tomoyo Nozaki · Londres, Royaume-Uni',
      },
      {
        title: 'Reiki III : Okuden (Niveau 3) — Enseignement intérieur',
        date: 'Janvier 2014',
        detail: 'The Energy Space International · Maître Reiki Tomoyo Nozaki · Londres, Royaume-Uni',
      },
      {
        title: 'Reiki II : Chuden (Niveau 2) — Professionnel',
        date: 'Novembre 2010',
        detail:
          'The London School of Usui Reiki Ryoho · Maître Reiki Allison Brice · Londres, Royaume-Uni',
      },
      {
        title: 'Reiki I : Shoden (Niveau 1) — Initiation',
        date: 'Avril 2010',
        detail:
          'The London School of Usui Reiki Ryoho · Maître Reiki Allison Brice · Londres, Royaume-Uni',
      },
    ],
  },
  {
    heading: 'Autres formations & développement personnel',
    items: [
      {
        title: 'ThetaHealing',
        date: 'À venir',
        detail: 'Formation en cours',
      },
      {
        title: 'Formation Annales Akashiques',
        date: 'Février 2025',
        detail: 'Formatrice Emily Nicolle · Toulon, France',
      },
      {
        title: 'LME de l’Ascension — Libération de la Mémoire Émotionnelle',
        date: 'Mai 2024',
        detail:
          'Nathalie Berron et Marie-Ange Kister, supervisées par Sophie Cerutti (Métamédecine) · Saint-André-de-Boëge, France',
      },
      {
        title: 'Civilisations anciennes et esprits de la nature',
        date: 'Avril 2023',
        detail: 'Jérôme Vibert, médium, et Bernard Guirard, géobiologue · Drôme, France',
      },
      {
        title: 'Géobiologie — pendule, protection & nettoyage, symboles sacrés',
        date: 'Février 2023',
        detail: 'Bernard Guirard, géobiologue · Drôme, France',
      },
      {
        title: 'Séminaire de Métamédecine — « J’ouvre la porte à l’abondance »',
        date: 'Mai 2022',
        detail:
          'Séminaire de Claudia Rainville, animé par Rossella Schneiter-Malpangotti, formatrice en Métamédecine',
      },
      {
        title: 'Métamédecine — « Le langage des symptômes »',
        date: 'Janvier – Mars 2022',
        detail: 'Enseignante Claudia Rainville',
      },
      {
        title: 'Séminaire de Métamédecine — « Libération de la Mémoire Émotionnelle »',
        date: 'Janvier 2022',
        detail:
          'Séminaire de Claudia Rainville, animé par Rossella Schneiter-Malpangotti, formatrice en Métamédecine',
      },
      {
        title: 'Magnétisme et Secret',
        date: 'Août 2020',
        detail:
          'Institut Supérieur des Rebouteux — L’École des guérisseurs et des rebouteux · Maître-rebouteux George Bergoz · Gex, France',
      },
      {
        title: 'TERET — Technique d’Élimination Rapide des Émotions Toxiques',
        date: 'Automne 2009',
        detail:
          'Technique de coaching et de libération émotionnelle · Fondateur Alexander Pregizer, psychothérapeute et préparateur mental · Montpellier, France',
      },
      {
        title: 'Stages sur les pierres et le magnétisme',
        date: '1985 – 1990',
        detail:
          'Découverte des cristaux et de leurs propriétés · Formateurs Pierre et Zeitoune Basquin-Sayad',
      },
    ],
  },
] as const
