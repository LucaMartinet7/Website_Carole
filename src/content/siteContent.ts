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

export const seancePage = {
  intro:
    'Un accompagnement sur mesure pour favoriser une détente profonde, dissiper le stress et revitaliser votre énergie.',
  deroulement:
    'Chaque séance débute par un échange qui permet de définir ensemble vos priorités et vos besoins. J’accompagne avec empathie les personnes confrontées à la fatigue chronique, au stress persistant, au besoin de reconnexion intérieure ou au désir de changement. Les séances se déroulent en français ou en anglais, fortes de plus de vingt ans d’expérience internationale.',
  explorer: {
    text: 'Ensemble, nous explorons vos pensées, vos émotions et vos comportements afin de libérer les blocages conscients et inconscients — y compris les schémas émotionnels et les charges négatives, parfois liés à des vies antérieures.',
    objectifs: [
      'Relâcher les émotions limitantes',
      'Renforcer la confiance en soi',
      'Raviver la motivation pour un avenir aligné avec vos aspirations',
    ],
  },
  reiki: {
    text: 'Le Reiki est une pratique énergétique japonaise, douce et sans danger, qui agit par imposition des mains. Il favorise la libération du stress, de la rumination mentale, des somatisations, des états dépressifs, de l’insomnie et du burn-out.',
    bienfaits: [
      'Relaxation profonde et réduction du stress',
      'Harmonisation du corps et de l’esprit',
      'Atténuation des douleurs physiques',
      'Amélioration de la qualité du sommeil',
      'Diminution de la fatigue et des états dépressifs',
      'Renforcement du système immunitaire',
      'Regain d’énergie et de motivation',
    ],
  },
  pratique: {
    lieux:
      'En présentiel à Ornex (01) ou à Genève, et à distance partout dans le monde.',
    recommandation:
      'Un cycle de 3 séances espacées de 15 jours est conseillé, suivi d’une séance mensuelle si besoin.',
  },
  avis: 'Le Reiki est un complément à la médecine traditionnelle et ne remplace en aucun cas un traitement médical.',
} as const

export const aboutStory = [
  'Mon chemin vers le bien-être a débuté dès l’enfance, avec la découverte des bienfaits des médecines complémentaires. Là où la médecine traditionnelle ne suffisait pas à soulager plusieurs de mes proches, nous avons commencé à y associer des soins non conventionnels.',
  'Très tôt, j’ai aussi pris conscience de ma sensibilité énergétique, ressentant les énergies qui nous entourent et la présence d’un monde subtil. Affinée par des soins, des stages et des initiations, cette sensibilité a nourri ma passion pour le bien-être énergétique et le développement personnel.',
  'Après des études en école de commerce et une carrière dans la mode, j’ai vécu aux États-Unis, en Côte d’Ivoire et au Royaume-Uni. Durant ces vingt années à l’étranger, j’ai continué à pratiquer les soins énergétiques, pour mes proches comme pour moi-même.',
  'En 2010, ma reconversion professionnelle m’a conduite à me former au Reiki Usui Ryoho, la forme japonaise traditionnelle du Reiki. J’ai eu l’honneur d’étudier auprès de la professeure japonaise Tomoyo Nozaki et suis devenue Maître Reiki à Londres en 2014. Cette expérience a approfondi ma connaissance du Reiki et favorisé mon développement intérieur.',
  'Mon travail s’étend également aux thérapies comportementales et cognitives, notamment aux techniques de libération émotionnelle. J’ai suivi la formation TERET en 2009, développée par Alexander Pregizer, et continue d’approfondir ce domaine. Plus récemment, j’ai exploré les Annales Akashiques avec Emily Nicolle, renforçant ma confiance en mes perceptions énergétiques.',
] as const

export const expertise = {
  intro:
    'Je me spécialise dans la réduction du stress, la gestion de l’anxiété, la libération émotionnelle et la transformation personnelle.',
  points: [
    {
      title: 'Comprendre et gérer le stress',
      text: 'Le stress chronique peut engendrer anxiété, fatigue, douleurs et troubles divers. Je vous aide à apaiser ces tensions et à retrouver une sérénité intérieure.',
    },
    {
      title: 'Une transformation profonde et durable',
      text: 'Mes séances permettent de libérer les blocages énergétiques, qu’ils soient liés à votre passé, à votre héritage familial ou à des vies antérieures. Ensemble, nous libérons les peurs et les croyances limitantes et réinitialisons vos schémas de pensée, pour retrouver votre essence profonde et votre plein potentiel.',
    },
    {
      title: 'Un accompagnement pas à pas',
      text: 'Chaque soin est une étape vers une transformation intérieure, vous permettant de reprendre le contrôle de votre bien-être et de votre évolution.',
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
