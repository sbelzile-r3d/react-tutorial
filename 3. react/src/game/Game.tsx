import React from "react";
import { Board } from "../board/Board";
import "./Game.scss"
import { Clock } from '../clock/Clock';
import { calculateWinner, getWinningLine } from "../utils/calculateWinner";

export interface IBoardState {
  squares: string[]
}

export interface IGameState {
  history: IBoardState[],
  stepNumber: number,
  xIsNext: boolean
}

export class Game extends React.Component<any, IGameState> {
  constructor(props: any) {
    super(props);
    this.state = {
      history: [
        { squares: Array(9).fill('') }
      ],
      stepNumber: 0,
      xIsNext: true
    }
  }

  handleClick(i: number) {
    const history = this.state.history.slice(0, this.state.stepNumber + 1);
    const current = history[history.length - 1];
    const squares = current.squares.slice();
    if (calculateWinner(squares) || squares[i]) {
      return;
    }
    squares[i] = this.state.xIsNext ? 'X' : 'O';
    this.setState({
      history: history.concat([{
        squares: squares,
      }]),
      stepNumber: history.length,
      xIsNext: !this.state.xIsNext,
    });
  }

  jumpTo(step: number) {
    this.setState({
      stepNumber: step,
      xIsNext: (step % 2) === 0,
    });
  }

  render() {
    const history = this.state.history;
    const current = history[this.state.stepNumber];
    const winner = calculateWinner(current.squares);

    const moves = history.map((step, move) => {
      const desc = move ?
        'Go to move #' + move :
        'Go to game start';
      return (
        <li key={move}>
          <button onClick={() => this.jumpTo(move)}>{desc}</button>
        </li>
      );
    });

    let status;
    if (winner) {
      status = 'Winner: ' + winner;
    } else {
      status = 'Next player: ' + (this.state.xIsNext ? 'X' : 'O');
    }

    return (
      <div className="game">
        <div className="game-board">
          <Board
            squares={current.squares}
            winningLine={getWinningLine(current.squares) || []}
            onClick={(i) => this.handleClick(i)}
          />
        </div>
        <div className="game-info">
          <Clock />
          <div>{status}</div>
          <ol>{moves}</ol>
        </div>
      </div>
    );
  }
}