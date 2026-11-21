# Portfolio — Emile Dufoulon

Portfolio de développeur full stack : **Next.js (App Router) · TypeScript · CSS Modules**, généré en site statique et déployé sur Netlify.

## Lancer en local

```bash
npm install
npm run dev      # http://localhost:3000
npm run build    # génère le site statique dans /out
```

## Ajouter un projet

Tout se passe dans **`src/content/projects.ts`** :

1. Copie le bloc `MODÈLE` en bas du fichier et colle-le dans le tableau, à la position voulue (l'ordre du tableau = l'ordre d'affichage et la numérotation 01, 02…).
2. Remplis au minimum `slug`, `title`, `summary` et `stack`. Les autres champs (`hook`, `context`, `role`, `highlights`, `architecture`, `links`) enrichissent la page projet.
3. *(Optionnel)* Ajoute une capture **1920 × 960** (format 2:1) dans `public/projects/<slug>.webp` et renseigne `image: '/projects/<slug>.webp'`.
4. *(Optionnel)* Pour mettre le projet sur la page d'accueil, ajoute `bento: 'large' | 'wide' | 'small'`.

La page `/projets/<slug>/` est créée automatiquement au build.

## Modifier les infos perso, le parcours, l'alternance

**`src/content/profile.ts`** : coordonnées, stack, parcours, et le bloc `alternance`.
Quand tu as trouvé ton alternance, passe `alternance.open` à `false` : le bandeau rouge disparaît et le contact redevient « Travaillons ensemble ».

## Mettre à jour le CV

Remplace `public/cv-emile-dufoulon.pdf` (même nom de fichier).

## Structure

```
src/
  app/                 pages (accueil, /projets, /projets/[slug])
  components/          en-tête + bandeau alternance, thème, index projets, contact
  content/             ← le contenu à modifier (projets, profil)
public/                CV, photo, captures des projets, favicon
```
