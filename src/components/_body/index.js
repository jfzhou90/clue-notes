import React, { Component } from 'react';
// import CheckBox from './_checkbox.js';

class Body extends Component{
  constructor(){
    super()
    this.state = {
      players: ['You']
    }

  };

  player_cards = ['Professor Plum', 'Mr.Green'];
  weapon_cards = ['Knife', 'Gun'];

  async addPlayer(){
    let player = window.prompt("What's the name of the player?");
    await this.setState({players: [...this.state.players, player]});
  };

  render(){
    return (
      <div className="Container-row Body">
        { this.state.players.length < 6 &&
          <button className="Body-button-add_player" onClick={()=>this.addPlayer()}>Add Player</button>
        }
      </div>
    )};
};

export default Body;