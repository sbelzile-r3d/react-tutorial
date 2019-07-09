import React from "react";
import "./Game.scss"
import { BoardConnected } from "../board/BoardConnected";
import { ResetButtonConnected } from "../resetButton/ResetButton";

export class Game extends React.Component {
  render() {
    return (
      <div className="game">
        <div className="game-board">
          <BoardConnected />
        </div>
        <div className="game-info">
          <ResetButtonConnected />
        </div>
      </div>
    );
  }
}