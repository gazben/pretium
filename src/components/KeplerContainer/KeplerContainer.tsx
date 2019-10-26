import CircularProgress from '@material-ui/core/CircularProgress';
import KeplerGl from 'kepler.gl';
import React, { Component } from 'react';
import { connect, ReactReduxContext } from 'react-redux';
import { AppState, fetchMapData, MapDataState } from '../../store';

const token =
  'pk.eyJ1IjoicHRlcmJsZ2giLCJhIjoiY2syN2dyODRyMHY1eTNia3h6eWQydTA2ZCJ9.JFwFiFT4YnMDc8hCjMicEg';

interface DispatchProps {
  fetchMapData: () => void;
}
type Props = MapDataState & DispatchProps;

class KeplerContainerComponent extends Component<Props> {
  componentDidMount() {
    const { fetchMapData } = this.props;
    fetchMapData();
  }

  render() {
    const { loading, error, data } = this.props;

    if (loading) {
      return (
        <div className="flex items-center justify-center h-screen">
          <CircularProgress />
        </div>
      );
    }

    if (error) {
      return 'Oooops....something went wrong';
    }

    console.log({ data });

    return (
      <ReactReduxContext.Consumer>
        {({ store }) => {
          return (
            <KeplerGl
              width={window.outerWidth}
              height={window.innerHeight}
              mapboxApiAccessToken={token}
              appName="Pretium"
              store={store}
            />
          );
        }}
      </ReactReduxContext.Consumer>
    );
  }
}

const mapStateToProps = (state: AppState) => state.mapData;
const mapDispatchToProps = { fetchMapData };

export const KeplerContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(KeplerContainerComponent);
