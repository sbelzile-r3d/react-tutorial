import React from "react";
import { BoardStore } from "../../stores/BoardStore";
import { inject, observer } from "mobx-react";

export interface IInfoSectionProps {
  boardStore?: BoardStore
}

@inject('boardStore')
@observer
export class InfoSection extends React.Component<IInfoSectionProps> {
  reset() {
    this.props.boardStore.reset();
  }

  render() {
    const board = this.props.boardStore.board
    const message = board.winner
      ? `Le gagnant est ${board.winner}`
      : `C'est maintenant au tour de ${board.xIsNext ? 'X' : 'O'}`;

    return (
      <>
        <div>
          {message}
        </div>
        <button onClick={() => this.reset()}>
          Reset
        </button>
      </>
    );
  }
}