import React from "react";
import { Square } from "../square/Square";
import "./Board.scss";
import { calculateWinner } from "../utils/calculateWinner";

export interface IBoardStateProps {
  squares?: string[]
}

export interface IBoardDispatchProps {
  onClick?: (i: number) => void
}

export interface IBoardProps extends IBoardStateProps, IBoardDispatchProps {}

export class Board extends React.Component<IBoardProps> {
  handleClick(squareId: number) {
    const winner = calculateWinner(this.props.squares || Array(9));
    if (!winner && this.props.onClick) {
      this.props.onClick(squareId)
    }
  }

  renderSquare(squareId: number) {
    return (
      <Square
        value={this.props.squares ? this.props.squares[squareId] : ''}
        onClick={() => this.handleClick(squareId)}
      />
    );
  }

  render() {
    return (
      <div>
        <div className="board-row">
          {this.renderSquare(0)}
          {this.renderSquare(1)}
          {this.renderSquare(2)}
        </div>
        <div className="board-row">
          {this.renderSquare(3)}
          {this.renderSquare(4)}
          {this.renderSquare(5)}
        </div>
        <div className="board-row">
          {this.renderSquare(6)}
          {this.renderSquare(7)}
          {this.renderSquare(8)}
        </div>
      </div>
    );
  }
}