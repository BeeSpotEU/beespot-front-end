import React, { Component } from 'react';
import ReactMapboxGl, { Layer, Feature } from "react-mapbox-gl";
import 'mapbox-gl/src/css/mapbox-gl.css' ;
import json from './style.json';

const Map = ReactMapboxGl({
  accessToken: ""
});

class MapContainer extends Component {
  constructor(props){
    super(props);
    this.time = 0;
  }
  fillColorByTime(time) {
      return {
      "property": "n" + ((Math.round(time) % 12) + 1) ,
      "stops": [[0, "#fff"], [100.0, "#0f0"]]
    }; 
  }
  startAnimation = (map) => {
    let animateMarker = (timestamp) => {
      map.setPaintProperty('zones-line', 'fill-color', this.fillColorByTime(timestamp / 1000));
      map.setPaintProperty('zones-line2', 'fill-color', this.fillColorByTime(timestamp / 1000));
      requestAnimationFrame(animateMarker);
    }
    animateMarker(0);
  }
  render() {
    return (
      <Map style={json} 
      center={[5,52]}
      zoom={this.props.zoom}
      containerStyle={{
      height: "100vh",
      width: "100vw"}}
      onClick={this.startAnimation}
      ></Map>
    );
  }
}

export default MapContainer;
