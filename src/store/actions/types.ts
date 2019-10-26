import { MapDataState } from '../reducers/map-data.reducer';

export interface AppState {
  keplerGl: unknown;
  mapData: MapDataState;
}
