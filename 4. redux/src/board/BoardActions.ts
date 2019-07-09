import { IReduxAction } from '../utils/ReduxUtils';

export const BoardActions = {
  reset: 'RESET_BOARD',
  clickSquare: 'CLICK_SQUARE'
}

export interface IBoardActionPayload {
  id?: number
}

export const resetBoard = (): IReduxAction<IBoardActionPayload> => ({
  type: BoardActions.reset,
  payload: {}
});

export const clickSquare = (id: number): IReduxAction<IBoardActionPayload> => ({
  type: BoardActions.clickSquare,
  payload: {
    id
  }
});
