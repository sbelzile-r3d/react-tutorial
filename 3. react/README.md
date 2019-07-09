# React - La base

[Source du code](https://reactjs.org/tutorial/tutorial.html) (adapté en Typescript)

## Déclarer un composant React

```tsx
export class MyComponent extends React.Component {}

// Ou

export class MyComponent extends React.Component<IMyComponentProperties> {}

// Ou

export class MyComponent extends React.Component<IMyComponentProperties, IMyComponentState> {}

// Ou

export const MyComponent = (props: IComponentProps) => {
  return <h1>Hello, {props.name}</h1>;
}
```

## Afficher un composant (Render a Component)

```tsx
<div></div>

// Ou

<div/>

// Ou

<MyComponent aProp={'hello'} {...moreProps} />

// Ou

const myComponent = <MyComponent />
<div>
  {myComponent}
</div>
```

## Utiliser les propriétés d'un composant

```tsx
class Welcome extends React.Component {
  render() {
    return <h1>Hello, {this.props.name}</h1>;
  }
}
```

## Définir des propriétés par défaut

```Typescript
CustomButton.defaultProps = {
  color: 'blue'
};
```

## L'état d'un composant

```tsx
// Doit être initialisé dans le constructeur
constructor(props: IMyComponentProps) {
  super(props);
  this.state = {date: new Date()};
}

// Peut être appellé dans les méthodes du composant
render() {
  return (
    <h2>It is {this.state.date.toLocaleTimeString()}.</h2>
  );
}

// Peut être modifié via la méthode setState
handleClick() {
  this.setState({
    numberOfClick: this.state.numberOfClick + 1
  });
}

// Pas besoin de modifier toutes les propriétés
this.setState({
  numberOfClick: this.state.numberOfClick + 1,
  color: this.state.color
});
// est la même chose que :
this.setState({
  numberOfClick: this.state.numberOfClick + 1
});
```

**Important :** Vous ne devez pas modifier directement l'état d'un composant. Utilisez `setState`.
```Typescript
// Wrong
this.state.comment = 'Hello';
// Correct
this.setState({comment: 'Hello'});
```

**Important :** Ne pas se servir du state et des propriétés d'un composant directement pour modifier l'état d'un composant, celui-ci peut être modifié de manière asynchrone.
```Typescript
// Wrong
this.setState({
  counter: this.state.counter + this.props.increment,
});

// Correct
this.setState((state, props) => ({
  counter: state.counter + props.increment
}));
```

## Cycle de vie d'un composant

### Méthodes disponibles

```Typescript
  componentWillMount() {} // Legacy, do not use
  componentDidMount() {}
  componentDidUpdate(prevProps, prevState, snapshot) {}
  componentWillUnmount() {}
  componentDidCatch() // Called on rendering errors
```

## Gérer les événements

```tsx
<div onClick={() => this.handleClick()}/>
```

## Conditional Rendering

```tsx
return isLoggedIn
  ? <UserGreeting />
  : <GuestGreeting />;

return isLoggedIn
  ? <UserGreeting />
  : null;
```

## Lists

```tsx
const numbers = props.numbers;
const listItems = numbers.map((number) =>
  <li key={number.toString()}> // Key property. Must be unique.
    {number}
  </li>
);
return (
  <ul>{listItems}</ul>
);
```

## Spécifier des composants enfants

```tsx
export class MyParentComponent extends React.Component {
  render() {
    return (
      <div>
        {this.props.children}
      </div>
    );
  }
}

// Other component render method
render() {
  <MyParentComponent>
    <MyChildComponent />
  </MyParentComponent>
}
```

## More useful stuff

### Fragments

```html
<React.Fragment>
  <ChildA />
  <ChildB />
  <ChildC />
</React.Fragment>

// or
<>
  <ChildA />
  <ChildB />
  <ChildC />
</>
```

- [High-Order-Components](https://reactjs.org/docs/higher-order-components.html)

## Exercises

### Component Lifecycle
Dans le projet d'exemple, on voudrait afficher l'heure actuelle. Créez et affichez un composant qui affiche l'heure actuelle.

### React pure
Seb est vraiment mauvais en tic-tac-to. Il ne comprend pas pourquoi Marc-André est toujours déclaré vainqueur. Pour l'aider à comprendre, on veut mettre de l'emphase sur la ligne qui a permis à Marc-André de le battre. Affichez en rouge la ligne gagnante.