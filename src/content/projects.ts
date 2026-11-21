/**
 * ─────────────────────────────────────────────────────────────
 *  PROJETS DU PORTFOLIO
 * ─────────────────────────────────────────────────────────────
 *  Pour ajouter un projet :
 *    1. Copie le bloc « MODÈLE » en bas de ce fichier.
 *    2. Remplis les champs (seuls slug, title, summary et stack
 *       sont obligatoires).
 *    3. (Optionnel) Ajoute une capture 1920×960 dans
 *       public/projects/<slug>.webp et renseigne `image`.
 *    4. Pour l'afficher sur la page d'accueil, ajoute `bento`.
 *
 *  La page /projets/<slug> est générée automatiquement.
 *  L'ordre du tableau = l'ordre d'affichage.
 * ─────────────────────────────────────────────────────────────
 */

export type BentoSize = 'large' | 'wide' | 'small'

export interface Project {
  /** Identifiant d'URL : /projets/<slug> (minuscules, tirets) */
  slug: string
  title: string
  /** Une phrase, affichée dans les listes */
  summary: string
  stack: string[]
  year?: string
  /** Ex. « Full stack », « Stage », « Front-end » */
  kind?: string
  /** Question d'accroche affichée en tête de la page projet */
  hook?: string
  /** Paragraphe de contexte de la page projet */
  context?: string
  /** Ton rôle sur le projet */
  role?: string
  /** Points techniques (page projet) */
  highlights?: string[]
  /** Schéma d'architecture simple, de gauche à droite */
  architecture?: { label: string; detail: string }[]
  /** Chemin depuis /public, ex. '/projects/movizz.webp' */
  image?: string
  links?: { live?: string; repo?: string }
  /** Présent sur la page d'accueil, avec cette taille de tuile */
  bento?: BentoSize
}

export const projects: Project[] = [
  {
    slug: 'fintracker',
    title: 'FinTracker',
    year: '2026',
    kind: 'Full stack — web, API & mobile',
    summary:
      'Gestion des finances personnelles sur le web et sur mobile, avec une seule API.',
    hook: 'Comment suivre ses finances sur le web et sur mobile avec une seule API ?',
    context:
      "Application de gestion des finances personnelles en trois parties : un front web, une API et une application mobile qui partagent les mêmes données. L'utilisateur se connecte, saisit ses transactions par catégorie et suit son budget depuis un tableau de bord.",
    role: 'Conception et développement',
    highlights: [
      'API REST Express en TypeScript : auth, catégories, transactions (CRUD), synthèse',
      'Authentification JWT, mots de passe hachés (bcrypt) et middleware de protection',
      'Modélisation Prisma sur PostgreSQL (utilisateurs, catégories, transactions)',
      'Validation des données avec Zod et limitation des tentatives de connexion',
      'Front React + Tailwind : tableau de bord mensuel (solde, dépenses par catégorie, 3 derniers mois), transactions, export PDF, mode clair/sombre',
      'Démo sans inscription : bouton « Essayer la démo » sur un compte réinitialisé à chaque connexion',
      'Application mobile React Native / Expo connectée à la même API',
    ],
    architecture: [
      { label: 'Web + Mobile', detail: 'React · Expo' },
      { label: 'API REST', detail: 'Express · JWT' },
      { label: 'ORM', detail: 'Prisma' },
      { label: 'Base de données', detail: 'PostgreSQL' },
    ],
    stack: ['React', 'TypeScript', 'Tailwind', 'Express', 'Prisma', 'PostgreSQL', 'JWT', 'React Native', 'Expo'],
    links: {
      live: 'https://fin-tracker-ten-umber.vercel.app/login',
      repo: 'https://github.com/EmileSch19/FinTracker',
    },
    image: '/projects/fintracker.webp',
    bento: 'large',
  },
  {
    slug: 'movizz',
    title: 'Movizz',
    year: '2026',
    kind: 'Application web',
    summary: "Recherche de films en temps réel via l'API OMDB, fiches détaillées et favoris.",
    hook: 'Comment trouver un film et garder ses favoris sous la main, en quelques secondes ?',
    context:
      "Application Next.js construite de zéro : recherche de films en temps réel via l'API OMDB, fiche détaillée pour chaque film et liste de favoris personnelle.",
    role: 'Conception et développement',
    highlights: [
      'Next.js (App Router) avec route dynamique de détail /films/[id]',
      "Intégration de l'API OMDB côté serveur : clé non exposée, réponses mises en cache",
      'Accueil par collections (science-fiction, action, animation…) et recherche paginée',
      'Favoris persistés en LocalStorage, cœur sur chaque affiche et compteur',
      'Squelettes de chargement, pages 404 et erreur ; TypeScript et Tailwind CSS',
    ],
    stack: ['Next.js', 'React', 'TypeScript', 'Tailwind CSS', 'API OMDB', 'Netlify'],
    links: {
      live: 'https://2movizz.netlify.app/',
      repo: 'https://github.com/EmileSch19/Movizz',
    },
    image: '/projects/movizz.webp',
    bento: 'wide',
  },
  {
    slug: 'bedrinegame',
    title: 'BedrineGame',
    year: '2023',
    kind: 'Stage — site vitrine',
    summary: "Site vitrine et réservation d'un escape game lyonnais, réalisé pendant mon stage.",
    hook: 'Comment donner envie de réserver un escape game horreur dès la première page ?',
    context:
      "Site vitrine d'un escape game lyonnais aux univers horreur et murder-mystery, réalisé pendant mon stage chez UniDrine (ex-Bedrine). J'ai réalisé l'intégration front-end et le parcours de réservation, avec un défi principal : préserver un univers graphique très fort sur toutes les tailles d'écran.",
    role: 'Intégration front-end',
    highlights: [
      'Intégration Next.js fidèle aux maquettes et au thème graphique',
      'Formulaire de réservation (coordonnées, date, participants) avec validation via React Hook Form',
      'Route API Next.js d’envoi des demandes par e-mail (Nodemailer)',
      'Responsive design sur des visuels plein écran',
    ],
    stack: ['Next.js', 'React', 'TypeScript', 'React Hook Form', 'Nodemailer', 'Vercel'],
    image: '/projects/bedrine.webp',
    links: {
      live: 'https://mon-stage.vercel.app/',
      repo: 'https://github.com/EmileSch19/MonStage',
    },
    bento: 'small',
  },
  {
    slug: 'mercurial-shop',
    title: 'Vélox — boutique de crampons',
    year: '2026',
    kind: 'Front-end — e-commerce',
    summary: 'Mini-boutique e-commerce en React pour une marque fictive : catalogue, fiche produit, panier et mode clair/sombre.',
    highlights: [
      'Catalogue filtrable et triable, filtres conservés dans l’URL',
      'Panier persistant (useReducer + localStorage) avec quantités et total',
      'Fiche produit avec choix de pointure, mode clair/sombre sans flash, responsive et accessible au clavier',
    ],
    stack: ['React', 'Vite', 'React Router', 'CSS', 'Vercel'],
    image: '/projects/mercurial.webp',
    links: {
      live: 'https://mercurial-v2.vercel.app/',
      repo: 'https://github.com/EmileSch19/MercurialV2',
    },
    bento: 'small',
  },
  {
    slug: 'gestion-employes',
    title: 'Gestion des employés',
    year: '2025',
    kind: 'Back-end — application RH',
    summary: 'Application Django de gestion des employés (CRUD complet) sur PostgreSQL, avec connexion et démo en un clic.',
    highlights: [
      'Opérations CRUD : liste, ajout, modification et suppression des employés',
      'Modèle de données avec l’ORM Django, base PostgreSQL (Neon) en production',
      'Accès réservé aux utilisateurs connectés, compte démo sans mot de passe',
      'Formulaires validés (e-mail, salaire positif) avec messages d’erreur',
      'Réglages sensibles par variables d’environnement, tests automatisés',
    ],
    stack: ['Python', 'Django', 'PostgreSQL', 'Neon', 'DaisyUI', 'Vercel'],
    image: '/projects/gestion-employes.webp',
    links: {
      live: 'https://gestion-employes.vercel.app/',
      repo: 'https://github.com/EmileSch19/django-gestion-employes',
    },
  },
  {
    slug: 'portfolio',
    title: 'Portfolio',
    year: '2026',
    kind: 'Next.js',
    summary: 'Ce site : Next.js, TypeScript, export statique, mode clair et sombre.',
    stack: ['Next.js', 'React', 'TypeScript', 'CSS Modules', 'Netlify'],
    links: {
      live: 'https://emile-dufoulon.netlify.app/',
      repo: 'https://github.com/EmileSch19/emile_dufoulon',
    },
  },
  {
    slug: 'discover',
    title: 'Discover',
    kind: 'Intégration',
    summary: 'Page de destinations de voyage en HTML/CSS, responsive mobile-first.',
    stack: ['HTML', 'CSS'],
    image: '/projects/discover.webp',
    links: {
      live: 'https://discover-jet.vercel.app/',
      repo: 'https://github.com/EmileSch19/Discover',
    },
  },
  {
    slug: 'travel-ventures',
    title: 'Travel Ventures',
    kind: 'Front-end',
    summary: "Site React de paysages du monde, avec routing et lazy loading d'images.",
    stack: ['React', 'CSS', 'Hooks'],
    links: {
      live: 'https://portfolio-emile-crz7.vercel.app/',
      repo: 'https://github.com/EmileSch19/Travel_Ventures',
    },
  },
  {
    slug: 'todo-app',
    title: 'Todo App',
    kind: 'JavaScript',
    summary: 'CRUD en JavaScript vanilla avec persistance LocalStorage, sans dépendance.',
    stack: ['JavaScript', 'LocalStorage'],
    image: '/projects/todo.webp',
    links: {
      live: 'https://emilesch19.github.io/ToDoLisit/',
      repo: 'https://github.com/EmileSch19/ToDoLisit',
    },
  },

  /* ── MODÈLE : copie ce bloc, retire les commentaires ──────────
  {
    slug: 'mon-projet',
    title: 'Mon projet',
    year: '2026',
    kind: 'Full stack',
    summary: 'Une phrase qui résume le projet.',
    hook: 'Quelle question ce projet résout-il ?',
    context: 'Contexte et objectif du projet.',
    role: 'Ce que tu as fait',
    highlights: ['Point technique 1', 'Point technique 2'],
    stack: ['React', 'Node.js'],
    image: '/projects/mon-projet.webp',
    links: { live: 'https://…', repo: 'https://github.com/EmileSch19/…' },
    bento: 'wide', // 'large' | 'wide' | 'small' — ou supprime pour ne pas l'afficher sur l'accueil
  },
  ─────────────────────────────────────────────────────────────── */
]

export const getProject = (slug: string) => projects.find((p) => p.slug === slug)
