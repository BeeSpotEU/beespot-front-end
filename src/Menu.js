import React, { Component } from 'react';

class Menu extends Component {
  constructor(props)
  {
    super(props);
    var zoom = props.zoom * 10;
  }
  render() {
    return (
      <div className="App-menu">
        <ul>
          <li><a href="#">Location</a></li>
          <li><a href="#">How it works</a></li>
          <li><p><input type="range" min="70" max="120" value={this.zoom} onChange={(e) =>this.props.setZoomLevel(e.target.value/10)}/></p></li>
        </ul>
      </div>
    );
  }
}

export default Menu;
