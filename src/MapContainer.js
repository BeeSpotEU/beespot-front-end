import React, { Component, createRef } from "react";
import ReactMapboxGl, { Layer, Feature } from "react-mapbox-gl";
import "mapbox-gl/src/css/mapbox-gl.css";
import json from "./style.json";

const Map = ReactMapboxGl({
  accessToken: ""
});

class MapContainer extends Component {
  mapRef = createRef();

  state = { averages: null };
  map;
  constructor(props) {
    super(props);
    this.time = 0;
  }
  fillColorByTime(time) {
    const prefix = this.props.dataType === "pollen" ? "p" : "n";
    return {
      property: prefix + ((Math.round(time) % 12) + 1),
      stops: [[0, "#fff"], [50.0, "#0f0"]]
    };
  }
  startAnimation = map => {
    let animateMarker = timestamp => {
      map.setPaintProperty(
        "zones-line",
        "fill-color",
        this.fillColorByTime(timestamp / 1000)
      );
      map.setPaintProperty(
        "zones-line2",
        "fill-color",
        this.fillColorByTime(timestamp / 1000)
      );
      requestAnimationFrame(animateMarker);
    };
    animateMarker(0);
  };

  moveEnd = map => {
    // console.log(map.getZoom());
    // if (map.getZoom() > 11) {
    const features = map.queryRenderedFeatures({ layers: ["zones-line"] });
    const start = { amount: 0 };
    for (let i = 1; i < 13; i++) {
      start["n" + i] = 0;
      start["p" + i] = 0;
    }

    const sums = features.reduce((acc, curr) => {
      for (let i = 1; i < 13; i++) {
        acc["n" + i] += curr.properties["n" + i];
        acc["p" + i] += curr.properties["p" + i];
        acc.amount++;
      }
      return acc;
    }, start);

    const averages = { n: [], p: [] };
    for (let i = 1; i < 13; i++) {
      averages.n.push(sums["n" + i] / sums.amount);
      averages.p.push(sums["p" + i] / sums.amount);
    }
    this.props.setAverages(averages);
  };

  componentDidMount() {
    setTimeout(() => {
      const map = this.map.state.map;
      // map.flyTo([5, 52]);
      map.setCenter([5, 52]);
      // debugger;
    }, 250);

    //
  }

  render() {
    return (
      <>
        <Map
          style={json}
          zoom={this.props.zoom}
          containerStyle={{
            height: "100vh",
            width: "100vw"
          }}
          ref={e => {
            this.map = e;
          }}
          onClick={this.startAnimation}
          onMoveEnd={this.moveEnd}
        />
      </>
    );
  }
}

export default MapContainer;
