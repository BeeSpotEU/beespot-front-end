import React, { Component } from 'react';
import { Link } from "react-router-dom";
import logo from './img/BeeSpotLogo.svg';
import './App.css';
import Header from './Header';
import ReactMapboxGl, { Layer, Feature } from "react-mapbox-gl";
import 'mapbox-gl/src/css/mapbox-gl.css' ;
import json from './style-landing.json';


const Map = ReactMapboxGl({
  accessToken: ""
});

class Landing extends Component {

  render() {
    return (
      <div className="App-landing">
      <Header logo={logo}></Header>
        <div className="hero">
          <h1>Make more healthy bees</h1>
          <Link to="/app">Show me where</Link>
        </div>
        <div className="map">
          <Map style={json} 
            center={[5,52]}
            zoom={[10]}
            containerStyle={{
            height: "90vh",
            width: "100vw"}}
            ></Map>
         </div>
         <div className="exp">
          <ul>
            <li></li>
          </ul>
        </div>
      </div>
    );
  }
}

export default Landing;
