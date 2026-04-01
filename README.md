# Julien Glin Portfolio

Portfolio professionnel bilingue construit avec Next.js App Router, TypeScript et Tailwind CSS.

## Stack

- Next.js 15 (App Router)
- React 19
- TypeScript (strict)
- Tailwind CSS v4
- next-themes (thème clair/sombre)

## Démarrage

```bash
npm install
npm run dev
```

Application disponible sur http://localhost:3000.

## Scripts

- `npm run dev`: serveur de développement
- `npm run build`: build de production + vérification types/lint
- `npm run start`: lance l'app en mode production
- `npm run test:ui`: exécute les tests UI Playwright
- `npm run test:ui:headed`: exécute les tests UI Playwright en mode visuel
- `npm run quality:ci`: pipeline qualité complète (`build` + tests UI)

## Architecture

- `app/[locale]/page.tsx`: page principale localisée
- `lib/portfolio-content.ts`: source de vérité pour composer le contenu localisé
- `lang/en.ts` et `lang/fr.ts`: dictionnaires de traductions
- `components/*`: sections UI et composants réutilisables
- `data/*`: datasets métiers (projects, skills, experiences, etc.)

## Internationalisation

- Les locales supportées sont `fr` et `en`
- Le middleware redirige automatiquement selon `Accept-Language`
- Le contenu est localisé côté route locale via `lib/portfolio-content.ts`

## CV Download

L'endpoint `app/api/cv/route.ts` sert le PDF `public/Resume_2026.pdf` en téléchargement.

## Qualité

Avant déploiement:

```bash
npm run quality:ci
```

Cela vérifie compilation, typage, génération des pages et tests UI.

Checklist accessibilité avancée:

- `docs/accessibility-checklist.md`
