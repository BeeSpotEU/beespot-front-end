import React, { Component } from 'react';
import ReactMapboxGl, { Layer, Feature } from "react-mapbox-gl";
import 'mapbox-gl/src/css/mapbox-gl.css' ;
import json from './style.json';

const Map = ReactMapboxGl({
  accessToken: ""
});

class MapContainer extends Component {
  render() {
    return (
      <Map style={json} 
      center={[5,52]}
      zoom={this.props.zoom}
      containerStyle={{
      height: "100vh",
      width: "100vw"
    }}></Map>
    );
  }
}

export default MapContainer;
