import React, { Component } from 'react';

class CheckBox extends Component{
  constructor(){
    super();
    this.state = {
      checked: 0,
      color: 'transparent',
    }
  }

  async click(){ // Included await because setting state is a promise.
    await this.setState({checked: this.state.checked+1 });
    this.setColor();
  }

  setColor(){
    switch(this.state.checked % 3){
      case 1:
        this.setState({color: 'yellow'});
        break;
      case 2:
        this.setState({color: 'green'});
        break;
      default:
        this.setState({color: 'transparent'});
    }
  }

  render(){
    return (
        <button className="CheckBox" style={{backgroundColor:this.state.color}} onClick={() => this.click()}/>
    )};
};

export default CheckBox;