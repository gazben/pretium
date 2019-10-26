import { applyMiddleware, createStore } from 'redux';
import logger from 'redux-logger';

export const store = createStore(function rootReducer(state = {}, action) {
  return state;
}, applyMiddleware(logger));
