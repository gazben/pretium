export interface DataPoint {
  id: number;
  device: string;
  timestamp: number;
  dateTime: string;
  lng: number;
  lat: number;
}

export const FETCH_MAP_DATA_STARTED = 'FETCH_MAP_DATA_STARTED';
export const FETCH_MAP_DATA_SUCCEEDED = 'FETCH_MAP_DATA_SUCCEEDED';
export const FETCH_MAP_DATA_FAILED = 'FETCH_MAP_DATA_FAILED';

interface FetchMapDataAction {
  type: typeof FETCH_MAP_DATA_STARTED;
}

interface FetchMapDataSucceededAction {
  type: typeof FETCH_MAP_DATA_SUCCEEDED;
}

interface FetchMapDataFailedAction {
  type: typeof FETCH_MAP_DATA_FAILED;
  error: unknown;
}

export type MapDataActionTypes =
  | FetchMapDataAction
  | FetchMapDataSucceededAction
  | FetchMapDataFailedAction;
