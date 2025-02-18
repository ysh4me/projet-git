# Guide de Contribution

## Introduction

Merci de votre intérêt pour contribuer à notre projet ! Ce document fournit les lignes directrices pour contribuer efficacement au projet. En suivant ces directives, vous nous aidez à maintenir la qualité et la cohérence du code.

## Workflow Git

Ce projet suit le workflow Git Flow. Voici les principales branches et leur utilisation :

### Branches principales
- `main` : Branche stable contenant la version en production
- `develop` : Branche de développement principale

### Branches temporaires
- `feature/<nom-fonctionnalité>` : Pour développer de nouvelles fonctionnalités
- `bugfix/<nom-correction>` : Pour corriger des bugs

### Processus de contribution

1. **Fork et Clone**
   ```bash
   git clone git@github.com:<votre-username>/projet-git.git
   cd projet-git
   ```

2. **Configurer les remotes**
   ```bash
   git remote add upstream git@github.com:ysh4me/projet-git.git
   ```

3. **Créer une branche**
   ```bash
   # Pour une nouvelle fonctionnalité
   git checkout -b feature/ma-fonctionnalite develop

   # Pour une correction de bug
   git checkout -b bugfix/mon-correctif develop
   ```

4. **Développer et committer**
   - Faites vos modifications
   - Committez régulièrement (voir la section Convention de commits)
   - Gardez votre branche à jour avec develop
     ```bash
     git fetch upstream
     git rebase upstream/develop
     ```

5. **Pousser et créer une Pull Request**
   ```bash
   git push origin feature/ma-fonctionnalite
   ```
   - Créez une Pull Request sur GitHub vers la branche `develop`
   - Attendez la revue de code

## Convention de commits

Nous utilisons la convention de commits suivante pour maintenir un historique clair et générer automatiquement les changelogs :

### Format
```
<type>: <description>

[corps]

[footer]
```

### Types de commits
- `feat`: Nouvelle fonctionnalité
- `fix`: Correction de bug
- `docs`: Modification de la documentation
- `style`: Changements de formatage (espaces, points-virgules...)
- `refactor`: Refactorisation du code
- `test`: Ajout ou modification de tests
- `chore`: Tâches de maintenance, mises à jour des dépendances

### Exemples
```bash
feat: ajouter la validation des formulaires

fix: corriger le calcul des totaux dans le panier

docs: mettre à jour la documentation d'installation
```

### Règles importantes
1. La description doit être en français
2. Utilisez l'impératif présent dans la description
3. La première ligne ne doit pas dépasser 72 caractères
4. Signez vos commits avec `-S`

## Bonnes pratiques

1. **Tests**
   - Ajoutez des tests pour les nouvelles fonctionnalités
   - Assurez-vous que tous les tests passent avant de soumettre une PR

2. **Documentation**
   - Documentez les nouvelles fonctionnalités
   - Mettez à jour la documentation existante si nécessaire

3. **Code**
   - Suivez les standards de code du projet
   - Utilisez des noms explicites pour les variables et fonctions
   - Commentez votre code quand nécessaire

4. **Pull Requests**
   - Décrivez clairement les changements apportés
   - Référencez les issues concernées
   - Répondez aux commentaires de revue de code 