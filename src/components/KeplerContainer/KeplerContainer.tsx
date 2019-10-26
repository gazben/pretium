import KeplerGl from 'kepler.gl';
import React from 'react';
import { ReactReduxContext } from 'react-redux';

const token =
  'pk.eyJ1IjoicHRlcmJsZ2giLCJhIjoiY2syN2dyODRyMHY1eTNia3h6eWQydTA2ZCJ9.JFwFiFT4YnMDc8hCjMicEg';

export const KeplerContainer = () => {
  return (
    <ReactReduxContext.Consumer>
      {({ store }) => {
        return (
          <KeplerGl
            width={window.outerWidth}
            height={window.outerHeight}
            mapboxApiAccessToken={token}
            store={store}
          />
        );
      }}
    </ReactReduxContext.Consumer>
  );
};
