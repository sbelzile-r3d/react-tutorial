import { IReduxAction } from "../utils/ReduxUtils";
import { IBoardActionPayload } from "./BoardActions";

export interface IBoardState {
  squares: string[],
  xIsNext: boolean
}

export const boardReducer = (state: IBoardState, action: IReduxAction<IBoardActionPayload>): IBoardState => ({
  squares: Array(9).fill(''),
  xIsNext: true
});