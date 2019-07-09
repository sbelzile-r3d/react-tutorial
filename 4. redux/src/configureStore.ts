import { applyMiddleware, createStore } from 'redux'
import thunkMiddleware from 'redux-thunk'
import { rootReducer } from './rootReducer';

export const configureStore = (preloadedState?: any) => {
  const middlewares = [thunkMiddleware];
  const middlewareEnhancer = applyMiddleware(...middlewares);

  const store = createStore(rootReducer, preloadedState, middlewareEnhancer);

  return store;
}