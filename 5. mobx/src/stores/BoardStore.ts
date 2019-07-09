import { observable, action } from 'mobx'
import { calculateWinner } from '../utils/calculateWinner';

export interface IBoardState {
  squares: string[],
  xIsNext: boolean,
  winner?: string
}

export class BoardStore {
  @observable
  board: IBoardState = {
    squares: Array(9).fill(''),
    xIsNext: true
  }

  @action
  reset() {
    this.board = {
      squares: Array(9).fill(''),
      xIsNext: true
    }
  }

  @action
  select(squareId: number) {
    if (!this.board.winner && !this.board.squares[squareId]) {
      this.board.squares[squareId] = this.board.xIsNext ? 'X' : 'O';
      this.board.xIsNext = !this.board.xIsNext;
      this.board.winner = calculateWinner(this.board.squares);
    }
  }
}
