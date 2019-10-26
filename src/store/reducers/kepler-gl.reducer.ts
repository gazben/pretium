import keplerGlReducer from 'kepler.gl/reducers';

export const keplerGl = keplerGlReducer.initialState({
  uiState: {
    activeSidePanel: null,
    currentModal: null,
    mapControls: {
      splitMap: { show: false }
    }
  }
});
