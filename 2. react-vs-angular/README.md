## Introduction

Ce projet a été généré avec [`create-react-app`](https://facebook.github.io/create-react-app/), qui est l'équivalent de `@angular/cli` pour Angular.

Les commandes roulés pour arriver au résultat que vous avez sous les yeux sont :

```bash
# Installe create-react-app
npm install -g create-react-app

# Crée le projet
npx create-react-app mon-app
cd mon-app

# Installe le support de sass
npm install node-sass --save
# Après, j'ai renommé le fichier src/App.css pour App.scss ainsi que sa référence dans App.tsx.
```

## Commandes à connaitre

La liste des commandes importantes se trouve dans le fichier `package.json`, sous le noeud `scripts`. On peut appeler ces commandes en les précédents de `npm`. Ex : `npm test` roulera les tests.

### Commandes à connaitre

- `npm test` : roule les tests
- `npm build` : compile l'application
- `npm start` : roule et ouvre l'application en local.

## Différences et similitudes avec Angular

### Framework VS librairie

Angular est un framework complet. Il comprend :

- Un système d'injection de dépendances
- Une architecture fortement recommandé de suivre (concept de services, modules, composants, etc.)
- Modules couvrant la majorité des cas d'utilisation courant d'une application web (ex: `@angular/HTTP`, `@angular/router`).

React de son côté est une librairie UI seulement. Il s'occuppe de la vue, vous devez vous charger du modèle de données et de toute autre logique.

### Templates

Vous êtes familier avec le format `HTML` de Angular. React inclue directement son `HTML` dans ses fichiers. Ceux-ci possèdent d'ailleur leur propre extension `.jsx` / `.tsx` dans notre cas, car on fait du Typescript!

Prenez le temps d'aller voir le contenu du fichier `src/App.tsx` pour vous donner une idée de la structure.

### State et Data Binding

Angular ne requiert pas de gérer l'état de l'application. Le 2-way binding modifie vos modèles à mesure que le UI change. Ce n'est pas le cas en React. C'est pourquoi la plupart des projets React que vous verrez incluent `Redux` ou `MobX`. De plus amples explications à venir sur ces librairies.

### Unit Testing

En Angular, les tests unitaires se font principalement à l'aide de `Jasmine`. Bien que cette librairie soit utilisable en React, `create-react-app` crée les tests unitaires de votre application avec `Jest`.