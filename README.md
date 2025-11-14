# Portfolio Julien Glin - Thème Course Automobile 🏎️

Portfolio personnel moderne avec Next.js, mettant en avant une identité visuelle inspirée de la course automobile avec l'orange comme couleur principale.

## 🚀 Stack Technique

- **Framework**: Next.js 15 (App Router)
- **Langage**: TypeScript
- **Styling**: Tailwind CSS 4
- **Composants UI**: shadcn/ui
- **Animations**: Framer Motion
- **Icônes**: Tabler Icons
- **Internationalisation**: next-intl (FR/EN)
- **Gestion de thème**: next-themes (clair/sombre)

## 📦 Installation

```bash
# Installer les dépendances
npm install

# Lancer le serveur de développement
npm run dev

# Build pour la production
npm run build

# Lancer en production
npm start
```

Ouvrir [http://localhost:3000](http://localhost:3000) dans votre navigateur.

## 📁 Structure du Projet

```
/app
  /[locale]          # Routes internationalisées
    layout.tsx       # Layout avec ThemeProvider et i18n
    page.tsx         # Page d'accueil
  layout.tsx         # Root layout
  page.tsx           # Redirection vers /fr
  globals.css        # Styles globaux
/components
  /ui                # Composants shadcn/ui
    button.tsx
    card.tsx
    badge.tsx
    separator.tsx
  /sections          # Sections du portfolio
    hero-section.tsx
    about-section.tsx
    skills-section.tsx
    experience-section.tsx
    education-section.tsx
    projects-section.tsx
    interests-section.tsx
    contact-section.tsx
  header.tsx         # Header avec navigation
  footer.tsx         # Footer
  theme-toggle.tsx   # Switch thème clair/sombre
  language-switcher.tsx # Switch FR/EN
/data                # Données TypeScript
  skills.ts
  experiences.ts
  education.ts
  projects.ts
  interests.ts
  contacts.ts
/config              # Configuration
  theme-config.ts    # Couleurs du thème racing
  site-config.ts     # Config du site
/messages            # Traductions i18n
  fr.json
  en.json
/lib
  utils.ts           # Utilitaires
i18n.ts              # Configuration i18n
middleware.ts        # Middleware next-intl
```

## 🎨 Personnalisation

### Couleurs du Thème

Modifier `/config/theme-config.ts` pour personnaliser les couleurs :

```typescript
export const themeColors = {
  primary: { ... },
  racing: {
    orange: '#f97316',
    orangeLight: '#fb923c',
    orangeDark: '#ea580c',
    // ...
  }
};
```

Les couleurs sont automatiquement synchronisées avec Tailwind CSS.

### Données du Portfolio

Toutes les données sont dans `/data` :

- **skills.ts** : Compétences techniques et soft skills
- **experiences.ts** : Expériences professionnelles
- **education.ts** : Parcours académique
- **projects.ts** : Projets réalisés
- **interests.ts** : Centres d'intérêt
- **contacts.ts** : Moyens de contact

### Traductions

Modifier `/messages/fr.json` et `/messages/en.json` pour les traductions.

## 🎯 Fonctionnalités

✅ **Multi-langue** (FR/EN) avec next-intl  
✅ **Mode clair/sombre** avec persistance  
✅ **Animations au scroll** avec Framer Motion  
✅ **Design responsive** mobile-first  
✅ **Thème racing** avec effets de vitesse  
✅ **Composants réutilisables** avec shadcn/ui  
✅ **TypeScript** pour la sécurité du code  
✅ **Performance optimisée** avec Next.js 15

## 🎨 Sections

1. **Hero** : Introduction impactante avec effets de vitesse
2. **À propos** : Présentation personnelle avec statistiques
3. **Compétences** : Visualisation des compétences techniques et soft
4. **Expérience** : Timeline interactive des expériences
5. **Formation** : Parcours académique
6. **Projets** : Galerie de projets avec filtres
7. **Centres d'intérêt** : Passions et hobbies
8. **Contact** : Formulaire de contact et liens sociaux

## 🚀 Déploiement

### Vercel (Recommandé)

```bash
# Installer Vercel CLI
npm i -g vercel

# Déployer
vercel
```

### Autre plateforme

```bash
# Build
npm run build

# Les fichiers sont dans .next/
```

## 📝 Modification du Contenu

1. **Informations personnelles** : Modifier `/config/site-config.ts`
2. **Compétences** : Ajouter/modifier dans `/data/skills.ts`
3. **Expériences** : Ajouter/modifier dans `/data/experiences.ts`
4. **Projets** : Ajouter/modifier dans `/data/projects.ts`
5. **Traductions** : Modifier `/messages/fr.json` et `/messages/en.json`

## 🎨 Thème Racing

Le thème s'inspire de la course automobile avec :

- **Couleurs** : Orange vif, noir, gris asphalte
- **Animations** : Lignes de vitesse, effets de glow
- **Typographie** : Moderne et dynamique
- **Formes** : Angles vifs suggérant le mouvement

## 📚 Ressources

- [Next.js Documentation](https://nextjs.org/docs)
- [Tailwind CSS](https://tailwindcss.com/docs)
- [shadcn/ui](https://ui.shadcn.com)
- [Framer Motion](https://www.framer.com/motion/)
- [next-intl](https://next-intl-docs.vercel.app/)
- [Tabler Icons](https://tabler.io/icons)

## 📄 Licence

© 2025 Julien Glin. Tous droits réservés.
