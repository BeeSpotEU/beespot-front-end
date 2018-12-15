import React, { Component } from 'react';

class Header extends Component {
  render() {
    return (
      <div className="App-header">
        <img src={this.props.logo}></img>
        <span>Bee Spot</span>
      </div>
    );
  }
}

export default Header;
