import type { Project } from '../types'

export const projects: Project[] = [
  {
    name: 'Movizz',
    description:
      "Application web de découverte de films, avec recherche en temps réel via l'API OMDB, pages de détail dynamiques et gestion des favoris.",
    tags: ['Next.js', 'TypeScipt', 'CSS', 'Netlify'],
    repo: 'https://github.com/EmileSch19/Movizz.git',
    live: 'https://2movizz.netlify.app/',
    featured: true,
  },
  
  {
    name: 'Mercurial Shop',
    description:
      "Site e-commerce avec navigation dynamique via React Router, architecture de composants réutilisables et attention particulière portée à l'UX et au design.",
    tags: ['React', 'Vite', 'CSS', 'React Router'],
    repo: 'https://github.com/EmileSch19/MercurialV2.git',
    live: 'https://mercurial-v2.vercel.app/',
    featured: true,
  },
  {
    name: 'Portfolio',
    description:
      'Portfolio personnel — composants React réutilisables, déploiement CI/CD Vercel, mobile-first, Lighthouse > 90.',
    tags: ['React', 'CSS', 'Vercel', 'CI/CD'],
    repo: 'https://github.com/EmileSch19/portfolio-emile.git',
    live: 'https://portfolio-emile-nine.vercel.app/',
  },
  {
    name: 'FinTracker',
    description:
      'Application de suivi financier personnel — visualisation de dépenses et gestion de budget.',
    tags: ['React', 'JavaScript'],
    repo: 'https://github.com/EmileSch19/FinTracker.git',
    live: 'https://fin-tracker-ten-umber.vercel.app/login',
  },
  {
    name: 'Bedrine Game',
    description: 'Projet de stage — application interactive développée en React.',
    tags: ['React', 'JavaScript'],
    repo: 'https://github.com/EmileSch19/MonStage.git',
    live: 'https://mon-stage.vercel.app/',
  },
  {
    name: 'Travel Ventures',
    description:
      "Site React mettant en avant des paysages du monde avec routing React et lazy loading d'images haute résolution.",
    tags: ['React', 'CSS', 'Hooks', 'Lazy Loading'],
    repo: 'https://github.com/EmileSch19/Travel_Ventures.git',
    live: 'https://portfolio-emile-crz7.vercel.app/',
  },
  {
    name: 'Gestion des employés',
    description:
      'Application CRUD complète (ajout, modification, édition, suppression) avec interface moderne.',
    tags: ['Django', 'Python', 'SQLite'],
    repo: 'https://github.com/EmileSch19/django-gestion-employes.git',
    live: 'https://gestion-employes.vercel.app/',
  },
  {
    name: 'Discover',
    description:
      'Interface de destination pour les vacances — design responsive mobile-first.',
    tags: ['HTML', 'CSS'],
    repo: 'https://github.com/EmileSch19/Discover.git',
    live: 'https://discover-jet.vercel.app/',
  },
  {
    name: 'Todo App',
    description:
      'CRUD complet en JS vanilla pur avec persistance via LocalStorage — aucune dépendance externe.',
    tags: ['JavaScript', 'LocalStorage'],
    repo: 'https://github.com/EmileSch19/ToDoLisit.git',
    live: 'https://emilesch19.github.io/ToDoLisit/',
  },
]
