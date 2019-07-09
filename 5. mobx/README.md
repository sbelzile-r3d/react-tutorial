# MobX

`MobX` permet, comme `Redux` de gérer l'état d'une application `React`. Son fonctionnement est beaucoup plus proche de `Angular` que le fonctionnement de `Redux`.

## Les concepts

### Injection de dépendances

```html
<Provider myStore={aStore} >
  <App />
</Provider>
```

```tsx
export interface IMyComponentProps {
  store: [type du store]
}

@inject('myStore')
export class MyComponent extends React.Component<IMyComponentProps> {}
```

### Observable et Observers

```tsx
export class MyStore {
  @observable
  patate: Patate = new Patate();
}

@inject('myStore')
@observer
export class MyComponent extends React.Component<IMyComponentProps> {
  render() {
    <PatateView patate={this.props.store.patate}>
  }
}

```

### Actions

```Typescript
export class MyStore {
  @observable
  patate: Patate = new Patate();

  @action
  turnBlue() {
    this.patate.color = 'blue';
  }
}
```

## Excercises

1. Ajouter un boutton permettant de réinitialiser la partie de tic-tac-to.
2. Affichez le gagnant de la partie de tic-tac-to.

