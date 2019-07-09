import React from "react";
import { Square } from "../square/Square";
import "./Board.scss";
import { BoardStore } from "../../stores/BoardStore";
import { inject, observer } from "mobx-react";

export interface IBoardProps {
  boardStore?: BoardStore
}

@inject('boardStore')
@observer
export class Board extends React.Component<IBoardProps> {
  renderSquare(i: number) {
    return (
      <Square
        value={this.props.boardStore.board.squares[i]}
        onClick={() => this.props.boardStore.select(i)}
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