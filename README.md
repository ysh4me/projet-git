# Projet Git

Un projet de démonstration pour pratiquer Git, GitHub et les bonnes pratiques de développement collaboratif.

## Description

Ce projet est conçu pour mettre en pratique :
- Le workflow Git Flow
- La gestion des remotes multiples
- Les commits signés
- Les bonnes pratiques de documentation
- L'intégration continue avec GitHub Actions
- La gestion des dépendances avec npm
- La configuration ESLint pour la qualité du code
- La protection des données sensibles avec .gitignore

## Structure du projet

```
projet-git/
├── .github/                    # Configuration GitHub
│   ├── workflows/             # GitHub Actions
│   │   └── linter.yml         # Configuration du linter
│   ├── ISSUE_TEMPLATE/        # Templates pour les issues
│   └── PULL_REQUEST_TEMPLATE.md # Template pour les PR
├── node_modules/              # Dépendances (généré)
├── .gitignore                 # Fichiers ignorés par Git
├── .eslintignore             # Fichiers ignorés par ESLint
├── CODE_OF_CONDUCT.md        # Code de conduite
├── CONTRIBUTING.md           # Guide de contribution
├── LICENSE                   # Licence ISC
├── README.md                 # Ce fichier
├── eslint.config.mjs         # Configuration ESLint
├── package.json              # Configuration npm
└── package-lock.json         # Versions des dépendances
```

## Prérequis

- Git (version 2.x ou supérieure)
- Node.js (version 16 ou supérieure)
- Un compte GitHub
- Une clé SSH configurée pour GitHub
- GPG ou SSH pour la signature des commits

## Installation

1. Cloner le dépôt :
   ```bash
   git clone git@github.com:ysh4me/projet-git.git
   cd projet-git
   ```

2. Configurer les remotes :
   ```bash
   # Vérifier les remotes existants
   git remote -v

   # Ajouter le second remote si nécessaire
   git remote add origin2 git@github.com:<username>/projet-git-remote2.git
   ```

3. Installer les dépendances :
   ```bash
   npm install
   ```

4. Configurer la signature des commits :
   ```bash
   # Configurer la clé de signature
   git config --global user.signingkey ~/.ssh/id_rsa.pub

   # Activer la signature par défaut
   git config --global commit.gpgsign true

   # Définir le format de signature
   git config --global gpg.format ssh
   ```

## Utilisation

### Branches du projet

#### Default
- `main`

#### Active branches
- `develop`
- `feature/feature1`
- `feature/branch1`
- `feature/linter`
- `feature/test`
- `issue-2-setup-precommit-hook`
- `feature/template-pull-requests`
- `feature/template-issues`

### Workflow Git Flow

Le projet suit le workflow Git Flow avec les conventions de nommage suivantes :

#### Branches de fonctionnalités
- `feature/*` : Pour développer de nouvelles fonctionnalités


### Développement de fonctionnalités



1. Faire des modifications et committer :
   ```bash
   git add .
   git commit -S -m "feat: ajouter ma fonctionnalité"
   ```

3. Pousser vers les deux remotes :
   ```bash
   git push origin develop
   git push origin2 develop
   ```

4. Créer une Pull Request vers `develop`

## Documentation

- [Code de Conduite](CODE_OF_CONDUCT.md)
- [Guide de Contribution](CONTRIBUTING.md)

## Gestion des Issues avec Kanban

Nous utilisons un tableau Kanban pour organiser les issues du projet.

- **Colonnes** :
  - `To Do` : Tâches à commencer.
  - `In Progress` : Tâches en cours.
  - `Done` : Tâches terminées.

### Règles :
- **Lorsqu'une tâche est en cours**, elle passe en `In Progress`.
- **Lorsqu'une tâche est terminée**, elle passe en `Done`.
- **Les issues sont liées aux branches Git** pour un meilleur suivi.

🔗 [Voir le tableau Kanban](https://github.com/ysh4me/projet-git/projects)

## Contributeurs

- [ysh4me](https://github.com/ysh4me)
- [sohaila-1](https://github.com/sohaila-1)
- [bobiboriss](https://github.com/bobiboriss)

## État du projet

✅ **Fonctionnalités implémentées :**
- Commits signés pour tous les membres
- Templates d'Issues et de Pull Requests
- GitHub Project pour la gestion des tâches
- Documentation complète (README, CONTRIBUTING, CODE_OF_CONDUCT)
- Fichier .gitignore optimisé
- Workflow Git Flow avec protection des branches
- Hook de pre-commit avec linter
- GitHub Actions pour l'intégration continue
- Push automatique vers deux remotes

📊 **Statistiques :**
- 15 Issues créées
- 15 Branches de fonctionnalités
- 15 Pull Requests

## Licence

Ce projet est sous licence ISC. Voir le fichier [LICENSE](LICENSE) pour plus de détails.