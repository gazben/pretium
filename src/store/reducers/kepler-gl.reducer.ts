import keplerGlReducer from 'kepler.gl/reducers';

export const keplerGl = keplerGlReducer.initialState({
  uiState: {
    activeSidePanel: null,
    currentModal: null,
    mapControls: {
      splitMap: { show: false }
    }
  },
  mapState: {
    pitch: 0,
    bearing: 0,
    latitude: 37.5,
    longitude: 19,
    zoom: 3.5
  }
});
