import React, { Component } from 'react';
import logo from './img/BeeSpotLogo.svg';
import './App.css';
import Header from './Header';
import Menu from './Menu';
import MapContainer from './MapContainer';

class App extends Component {
  state = {
      zoom: 9,
      dataType: 'nectar',
  };
  setZoomLevel = (zoom) => {this.setState({zoom})};
  setDataType = (dataType) => {this.setState({dataType})};

  render() {
    return (
      <div className="App">
        <Header logo={logo}></Header>
        <Menu
            zoom={this.state.zoom}
            dataType={this.state.dataType}
            setZoomLevel={this.setZoomLevel}
            setDataType={this.setDataType}
        />
        <MapContainer
            zoom={this.state.zoom}
            dataType={this.state.dataType}
        />
      </div>
    );
  }
}

export default App;
