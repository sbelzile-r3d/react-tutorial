import { IReduxAction } from "../utils/ReduxUtils";
import { IBoardActionPayload, BoardActions } from "./BoardActions";

export interface IBoardState {
  squares: string[],
  xIsNext: boolean
}

const INITIAL_STATE: IBoardState = {
  squares: Array(9).fill(''),
  xIsNext: true
}

export const boardReducer = (state: IBoardState = INITIAL_STATE, action: IReduxAction<IBoardActionPayload>): IBoardState => {
  switch (action.type) {
    case BoardActions.reset:
      return {
        squares: Array(9).fill(''),
        xIsNext: true
      }
    case BoardActions.clickSquare:
      const squares = state.squares.slice();
      let xIsNext = state.xIsNext;
      if (!squares[action.payload.id]) {
        squares[action.payload.id] = state.xIsNext ? 'X' : 'O';
        xIsNext = !xIsNext;
      }
      return {
        squares,
        xIsNext
      }
    default:
      return state;
  }
};