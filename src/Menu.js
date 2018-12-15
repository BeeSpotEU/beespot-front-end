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
          <li><input type="range" min="7" max="12" value={this.props.zoom} onChange={(e) =>this.props.setZoomLevel(e.target.value)}/></li>
          <li>
            <select name="data_type" value={this.props.dataType} onChange={(e) => this.props.setDataType(e.target.value)}>
              <option value="both">Both</option>
              <option value="pollen">Pollen</option>
              <option value="nectar">Nectar</option>
            </select>
          </li>
        </ul>
        <PaymentForm />
      </div>
    );
  }
}

export default Menu;
