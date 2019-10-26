import {
  DataPoint,
  FETCH_MAP_DATA_FAILED,
  FETCH_MAP_DATA_STARTED,
  FETCH_MAP_DATA_SUCCEEDED,
  MapDataActionTypes
} from '../actions';

export interface MapDataState {
  loading: boolean;
  data: DataPoint[];
  error: unknown;
}

const initialState: MapDataState = {
  loading: false,
  data: [],
  error: null
};

export function mapData(
  state = initialState,
  action: MapDataActionTypes
): MapDataState {
  switch (action.type) {
    case FETCH_MAP_DATA_STARTED: {
      return {
        ...state,
        loading: true
      };
    }

    case FETCH_MAP_DATA_SUCCEEDED: {
      return {
        ...state,
        loading: false,
        data: action.data
      };
    }

    case FETCH_MAP_DATA_FAILED: {
      return {
        ...state,
        loading: false,
        error: action.error
      };
    }

    default: {
      return state;
    }
  }
}
