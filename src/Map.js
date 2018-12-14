import React, { Component } from 'react';
import ReactMapboxGl, { Layer, Feature } from "react-mapbox-gl";

class MapContainer extends Component {
  render() {
    return (
      <Map
        style="style.json"
        containerStyle={{
          height: "100vh",
          width: "100vw"
        }}>
      </Map>
    );
  }
}

export default MapContainer;
