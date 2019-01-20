import React, { Component } from 'react';

class CategoryCard extends Component{
  constructor(props){
    super(props);
    this.state = {
      name: this.props.name,
      alibi: false
    }
  }

  async click(){ // Included await because setting state is a promise.
    await this.setState({alibi: !this.state.alibi });
  }


  render(){
    return (
        <button className='CategoryName-text' style={this.state.alibi ? {textDecoration:'line-through', color:'red'} : {}} onClick={() => this.click()}>{this.state.name}</button>
    )};
};

export default CategoryCard;