import React from 'react';
import { Provider } from 'mobx-react';
import './App.scss';
import { Game } from './components/game/Game';
import { BoardStore } from './stores/BoardStore';

const boardStore: BoardStore = new BoardStore();

const App: React.FC = () => {
  return (
    <Provider boardStore={boardStore} >
      <Game />
    </Provider>
  );
}

export default App;
