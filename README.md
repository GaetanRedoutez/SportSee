# SportSee - Tableau de Bord d'Analyse Sportive

Une application React moderne pour suivre et visualiser les métriques de performance sportive, incluant l'activité quotidienne, la durée des sessions, le radar de performance et les données nutritionnelles.

## Fonctionnalités

- **Tableau de Bord Utilisateur** : Accueil personnalisé et suivi des objectifs
- **Graphique d'Activité** : Visualisation quotidienne du poids et des calories brûlées par graphique en barres
- **Durée des Sessions** : Graphique linéaire montrant la durée moyenne des sessions par jour de la semaine
- **Radar de Performance** : Visualisation multidimensionnelle des métriques de performance
- **Graphique de Score** : Indicateur de progression radial pour la réalisation des objectifs
- **Cartes Nutrition** : Aperçu rapide des calories, protéines, glucides et lipides

## Technologies Utilisées

- **React** 19.1.1 avec Hooks
- **Recharts** 3.2.1 pour la visualisation de données
- **Axios** 1.12.2 pour la communication avec l'API
- **Vite** 7.1.6 comme outil de build
- **CSS3** pour le style
- **ESLint** 9.35.0 pour la qualité du code

## Structure du Projet

```
src/
├── components/
│   ├── common/
│   │   ├── Icon/           # Composant icône réutilisable
│   │   └── Loader/         # Composant spinner de chargement
│   ├── home/
│   │   ├── Barchart/       # Graphique en barres de l'activité quotidienne
│   │   ├── Card/           # Cartes d'informations nutritionnelles
│   │   ├── Linechart/      # Graphique linéaire des sessions moyennes
│   │   ├── Radarchart/     # Graphique radar de performance
│   │   └── Scorechart/     # Graphique radial de score
│   └── layout/
│       ├── Header/         # Barre de navigation supérieure
│       └── Sidebar/        # Barre latérale de navigation avec icônes
├── data/
│   └── mockData.js         # Données mock pour le développement
├── hooks/
│   └── useUserData.jsx     # Hook personnalisé pour récupérer les données utilisateur
├── pages/
│   └── home/               # Composant de la page d'accueil
├── service/
│   ├── api.service.js      # Couche de communication avec l'API
│   ├── mock.service.js     # Service de données mock
│   ├── transformers.js     # Utilitaires de transformation de données
│   └── user.service.js     # Service de données utilisateur
└── utils/
    └── formatNumber.js     # Utilitaire de formatage de nombres
```

## Démarrage

### Prérequis

- Node.js 20.19+
- API backend en cours d'exécution (ou utiliser le mode mock)

### Installation

1. Cloner le dépôt

```bash
git clone <url-du-depot>
cd sportsee
```

2. Installer les dépendances

```bash
npm install
```

3. Configurer les variables d'environnement

Créer un fichier `.env` à la racine du projet :

```env
# Configuration de l'API
VITE_BASE_API_URL=http://localhost:3000
VITE_USE_MOCK=false
```

- `VITE_BASE_API_URL` : URL de base de l'API backend
- `VITE_USE_MOCK` : Mettre à `true` pour utiliser les données mock, `false` pour utiliser l'API réelle

### Lancer l'Application

#### Mode Développement

```bash
npm run dev
```

L'application sera accessible sur `http://localhost:5173`

#### Linter

```bash
npm run lint
```

## Modes de Données

### Mode Mock

Définir `VITE_USE_MOCK=true` dans `.env` pour utiliser les données mock codées en dur depuis `src/data/mockData.js`. Utile pour le développement sans backend.

Utilisateurs mock disponibles :

- ID Utilisateur : `21` (Alex Dupont)
- ID Utilisateur : `42` (Laura Martin)

### Mode API

Définir `VITE_USE_MOCK=false` pour récupérer les données depuis l'API backend. Assurez-vous que votre backend est en cours d'exécution et accessible à l'URL spécifiée dans `VITE_BASE_API_URL`.

## Points de Terminaison de l'API

L'application attend les endpoints API suivants :

- `GET /user/:id` - Données principales de l'utilisateur
- `GET /user/:id/activity` - Activité quotidienne de l'utilisateur
- `GET /user/:id/average-sessions` - Durée moyenne des sessions de l'utilisateur
- `GET /user/:id/performance` - Métriques de performance de l'utilisateur

## Transformation des Données

Toutes les réponses de l'API sont normalisées via des fonctions de transformation dans `src/service/transformers.js` pour garantir une structure de données cohérente dans toute l'application :

- **transformUser** : Normalise les données de profil utilisateur
- **transformActivity** : Formate les sessions d'activité quotidienne
- **transformAverageSessions** : Structure les données de durée de session
- **transformPerformance** : Ordonne et traduit les métriques de performance

## Gestion des Erreurs

- Les erreurs API sont interceptées et formatées avec des messages significatifs
- `Promise.allSettled` utilisé pour gérer les échecs de données partielles
