import React, { Component } from 'react';
import logo from '../../logo.svg';

class Header extends Component{
  render(){
    return (
      <div className="Container-row Header">
          <img src={logo} className="Header-logo Flex-grow-1" alt="logo" />
          <span className='Header-title Flex-grow-2'>Detective's Notes</span>
      </div>
    )};
};

export default Header;