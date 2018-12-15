import React, { Component } from "react";
import logo from "./img/BeeSpotLogo.svg";
import "./App.css";
import Header from "./Header";
import Menu from "./Menu";
import MapContainer from "./MapContainer";
import { Graph } from "./graph";

class App extends Component {
  state = {
    dataType: "nectar",
    zoom: [9],
    averages: null
  };

  setDataType = dataType => {
    this.setState({ ...this.state, dataType });
  };

  setZoomLevel = zoom => {
    this.setState({ ...this.state, zoom: [zoom] });
  };

  setAverages = averages => {
    if (!isNaN(averages.n[0])) {
      this.setState({ ...this.state, averages });
    }
  };

  debounce(func, wait, immediate) {
    var timeout;
    return function() {
      var context = this,
        args = arguments;
      var later = function() {
        timeout = null;
        if (!immediate) func.apply(context, args);
      };
      var callNow = immediate && !timeout;
      clearTimeout(timeout);
      timeout = setTimeout(later, wait);
      if (callNow) func.apply(context, args);
    };
  }

  myEfficientFn = this.debounce(this.setAverages, 250);

  render() {
    return (
      <div className="App">
        <Header logo={logo} />
        <Menu
          zoom={this.state.zoom}
          setZoomLevel={this.setZoomLevel}
          setDataType={this.setDataType}
        />
        <MapContainer
          zoom={this.state.zoom}
          dataType={this.state.dataType}
          setAverages={this.myEfficientFn}
        />
        {this.state.averages ? (
          <div className="charts">
            <Graph y={this.state.averages.n} p={this.state.averages.p} />
          </div>
        ) : (
          undefined
        )}
      </div>
    );
  }
}

export default App;
