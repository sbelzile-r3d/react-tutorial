# Redux

Redux est un conteneur d'état pour application Javascript. Il est souvent utilisé avec React pour gérer l'état du système de manière centralisé.

## Concepts

Dans une application typique MVC, l'architecture du système comprend 3 éléments :

- Un modèle de données
- Une vue
- Un controlleur

Le modèle de données est passé à la vue par le controlleur pour que celle-ci s'affiche.
Lorsqu'un événement se produit dans la vue, un clique par exemple, celui-ci remonte vers le controlleur qui modifie le modèle de données en conséquence. Le modèle ayant changé, le controlleur peut modifier la vue en conséquence.

C'est un peut les mêmes concepts qui reviennent dans une application `React-Redux` :

- Le système a un état initial. Cet est utilisé afficher la vue.
- Des événements ou `actions` peuvent se produirent dans la vue.
- Lorsqu'une action se produit, on détermine l'état que doit avoir le système puis on affiche la vue en conséquence.

## L'état de l'application

Redux contient l'état de l'application. Cet état comprend tout ce qui est affiché à l'écran :

- La valeur des checkboxes
- La valeur des text inputs
- etc.

Les propriétés des composants React affiché à l'écran sont déterminés à partir de cet état central.

## Les actions

Dans une application React-Redux, on appelle `action` un événement pouvant se produire. Par example, si j'ai un bouton radio à l'écran, une action pouvant se produire est que je sélectionne le radio button.

Redux permet de lancer une action via la méthode `dispatch`. Ex:

```HTML
<button onClick={() => dispatch({ type: 'INCREMENT' })}>+</button>
<button onClick={() => dispatch({ type: 'DECREMENT' })}>-</button>
```

## Connecter un composant au Store de Redux

Il est possible de connecter un composant via la méthode `connect` de Redux.

```Typescript
// La version connecté de mon composant
const ConnectedComponent = connect(
  mapState,
  mapDispatch
)(MyComponent); // La version statique de mon composant
```

Ici, `mapState` et `mapDispatch` sont 2 méthodes permettant de traduire l'état central de l'application en les propriétés du composant. On y reviendra sous peu.

## Les types de propriétés

Un composant `React` possède plusieurs type de propriétés:

- Des propriété qui lui sont propre et qui ne changent pas pendant la durée de vie d'un composant. Par example : `<Header color="blue" />`.
- Des propriétés qui changent en fonction des actions de l'utilisateur ou du modèle de données. Par example, le contenu d'un champs texte.
- Des propriétés de type "action", soit des méthodes modifiant l'état de l'application. Par exemple une propriété `onClick`.

## Map State

Les propriétés d'un composant `React-Redux` sont déterminés par la méthode `mapStateToProps(state, ownProps) => componentStateProps`.

Cette méthode prend en paramètre l'état actuel du système, ainsi que les propriétés propre du composant s'il y a lieu et retourne l'état que doit avoir le composant.

```Typescript
function mapStateToProps(state) {
  return {
    a: 42,
    todos: state.todos,
    filter: state.visibilityFilter
  }
}
```

## Map Dispatch

Un composant connecté à `Redux` reçoit une propriété additionelle, soit la méthode `dispatch` permettant de lancer une action modifiant l'état du système. Cependant, le composant n'a pas à connaitre `Redux`.

La méthode `mapDispatchToProps(dispatch, ownProps?) => componentDispatchProps` permet de définir les propriétés de "dispatch" et d'injecter celles-ci dans le composant.

```Typescript
const mapDispatchToProps = dispatch => {
  return {
    increment: () => dispatch({ type: 'INCREMENT' }),
    decrement: () => dispatch({ type: 'DECREMENT' }),
    reset: () => dispatch({ type: 'RESET' }),
    onClick: event => dispatch(trackClick(event)),
  }
}
```

## Reducers

Lorsqu'une action est lancé, il `Redux` réagit en déterminant le prochain état du système. Pour qu'il puisse effectuer cette tâche, il faut implémenter ce qu'on appelle un `reducer`. Un `reducer` est une fonction calculant le prochain état du système.

```javascript
const initialState = VISIBILITY_FILTERS.ALL;

export const visibilityFilter = (state = initialState, action) => {
  switch (action.type) {
    case SET_FILTER: {
      return action.payload.filter;
    }
    default: {
      return state;
    }
  }
};
```

## Exercise

Complétez le code du jeu de tic-tac-to pour l'état de son système soit géré par `Redux`. Il ne manque que le code du `BoardReducer`.