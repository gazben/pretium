import { enhanceReduxMiddleware } from 'kepler.gl/middleware';
import { applyMiddleware, createStore } from 'redux';
import logger from 'redux-logger';
import thunk from 'redux-thunk';
import { rootReducer } from './reducers';

const middlewares = [thunk, logger];

export const store = createStore(
  rootReducer,
  applyMiddleware(...enhanceReduxMiddleware(middlewares))
);

export * from './actions';
export * from './reducers';
