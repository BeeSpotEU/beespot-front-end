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
          <li><a href="#">Location</a></li>
          <li><a href="#">How it works</a></li>
        </ul>
        <PaymentForm />
      </div>
    );
  }
}

export default Menu;
