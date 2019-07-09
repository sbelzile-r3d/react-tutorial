import * as Redux from 'redux';

export interface IReduxAction<T = {}> extends Redux.Action {
  type: string;
  payload?: T;
}