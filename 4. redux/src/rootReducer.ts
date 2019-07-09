import * as Redux from 'redux';
import { boardReducer, IBoardState } from './board/BoardReducers';

export interface IApplicationState {
  board: IBoardState
}

const reducers: Redux.ReducersMapObject = {
  board: boardReducer,
}

export const rootReducer = Redux.combineReducers<IApplicationState>(reducers);

