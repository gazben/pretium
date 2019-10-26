import { combineReducers } from 'redux';
import { AppState } from '../actions/types';
import { keplerGl } from './kepler-gl.reducer';
import { mapData } from './map-data.reducer';

export const rootReducer = combineReducers<AppState>({ keplerGl, mapData });
