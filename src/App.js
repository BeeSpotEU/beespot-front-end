import React, { Component } from 'react';
import logo from './img/BeeSpotLogo.svg';
import './App.css';
import Header from './Header';
import Menu from './Menu';
import MapContainer from './MapContainer';

class App extends Component {
  state=[9];
  setZoomLevel=(zoom)=>{this.setState([zoom])}
  render() {
    return (
      <div className="App">
        <Header logo={logo}></Header>
        <Menu zoom={this.state} setZoomLevel={this.setZoomLevel}></Menu>
        <MapContainer zoom={this.state}></MapContainer>
      </div>
    );
  }
}

export default App;
