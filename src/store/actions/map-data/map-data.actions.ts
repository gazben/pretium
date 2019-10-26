import { addDataToMap } from 'kepler.gl/actions';
import { ThunkAction } from 'redux-thunk';
import { loadToKepler } from '../../../utils';
import { AppState } from '../types';
import {
  FETCH_MAP_DATA_FAILED,
  FETCH_MAP_DATA_STARTED,
  FETCH_MAP_DATA_SUCCEEDED,
  MapDataActionTypes
} from './map-data.types';

export function fetchMapData(): ThunkAction<
  void,
  AppState,
  null,
  MapDataActionTypes
> {
  return dispatch => {
    dispatch({ type: FETCH_MAP_DATA_STARTED });
    return fetch(
      'https://europe-west1-junction2019-257020.cloudfunctions.net/get-movement-data'
    )
      .then(response => {
        if (!response.ok) {
          throw new Error('Network request failed');
        }
        return response.json();
      })
      .then(
        data => {
          dispatch({ type: FETCH_MAP_DATA_SUCCEEDED });
          const loadedData = loadToKepler(
            'stork_movement',
            'Stork movement 2010-2019',
            data
          );

          dispatch(addDataToMap(loadedData));
        },
        error => dispatch({ type: FETCH_MAP_DATA_FAILED, error })
      );
  };
}
