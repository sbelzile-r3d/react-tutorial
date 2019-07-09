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
  return state;
};