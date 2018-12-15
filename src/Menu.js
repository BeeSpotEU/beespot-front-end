import React, { Component } from 'react';
import PaymentForm from './PaymentForm';


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
          <li>Location</li>
          <li>How it works</li>
          <li><input type="range" min="70" max="120" value={this.zoom} onChange={(e) =>this.props.setZoomLevel(e.target.value/10)}/></li>
        </ul>
        <PaymentForm />
      </div>
    );
  }
}

export default Menu;
