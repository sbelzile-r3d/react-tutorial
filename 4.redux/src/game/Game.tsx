import React from "react";
import { Board } from "../board/Board";
import "./Game.scss"

export interface IBoardState {
  squares: string[]
}

export interface IGameState {
  board: IBoardState,
  xIsNext: boolean
}

export class Game extends React.Component<any, IGameState> {
  constructor(props: any) {
    super(props);
    this.state = {
      board: { squares: Array(9).fill('') },
      xIsNext: true
    }
  }

  handleClick(i: number) {
    const squares = Object.assign({}, this.state.board.squares);
    if (this.calculateWinner(squares) || squares[i]) {
      return;
    }
    squares[i] = this.state.xIsNext ? 'X' : 'O';
    this.setState({
      board: {
        squares
      },
      xIsNext: !this.state.xIsNext,
    });
  }

  reset() {
    this.setState({
      board: { squares: Array(9).fill('') },
      xIsNext: true,
    });
  }

  render() {
    const board = this.state.board;

    return (
      <div className="game">
        <div className="game-board">
          <Board
            squares={board.squares}
            onClick={(i) => this.handleClick(i)}
          />
        </div>
        <div className="game-info">
          <button onClick={() => this.reset()}>
            Reset
          </button>
        </div>
      </div>
    );
  }

  calculateWinner(squares: string[]) {
    const lines = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6],
    ];
    for (let i = 0; i < lines.length; i++) {
      const [a, b, c] = lines[i];
      if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
        return squares[a];
      }
    }
    return null;
  }
}