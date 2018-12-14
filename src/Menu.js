import React, { Component } from 'react';

class Menu extends Component {
  render() {
    return (
      <div className="App-menu">
        <ul>
          <li>Location</li>
          <li>How it works</li>
          <li>ZOOM: <input /></li>
        </ul>
      </div>
    );
  }
}

export default Menu;
