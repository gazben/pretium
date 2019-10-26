import keplerGlReducer from 'kepler.gl/reducers';
import { combineReducers } from 'redux';

export const rootReducer = combineReducers({ keplerGl: keplerGlReducer });
