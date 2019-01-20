import React, { Component } from 'react';
import CheckBox from './_checkbox.js';

class Body extends Component{
  constructor(){
    super()
    this.state = {
      players: ['Me']
    }

  };

  player_cards = ['Prof. Plum', 'Mr. Green','Col. Mustard', 'Mrs. Peacock', 'Ms. Scarlet', 'Dr. Orchid'];
  weapon_cards = ['Candlestick', 'Knife','Lead Pipe', 'Revolver', 'Rope', 'Wrench'];
  location_cards = ['Balloom', 'Billard Room', 'Conservatory', 'Dining Hall', 'Hall', 'Kitchen', 'Library', 'Lounge', 'Study'];

  async addPlayer(){
    let player = window.prompt("What's the name of the player?");
    if(player.length === 0){return window.alert("Can't add player with no name, try again.")};
    this.setState({players: [...this.state.players, player[0]]});
  };

  render(){
    return (
      <div className="Body">
        { this.state.players.length < 6 &&
          <button className="Body-button-add_player" onClick={()=>this.addPlayer()}>Add Player</button>
        }
        <table className="Body-table">
          <tbody>
            <tr className="Body-table_row">
              <th className="Body-table_blank"></th>
              {this.state.players.map(player => {
                return <th key={player} className="Body-player_name">{player}</th>
              })}
            </tr>
            
            {this.player_cards.map( card => {
              return (
                <tr className="Body-table_row" key={card}>
                  <th className="Body-table_first" key={card}>{card}</th>
                  {this.state.players.map(player => {
                    return <th key={Math.random()} className="Body-player_name"><CheckBox/></th>
                  })}
                </tr>
              )
            })}

            {this.weapon_cards.map( card => {
              return (
                <tr className="Body-table_row" key={card}>
                  <th className="Body-table_first" key={card}>{card}</th>
                  {this.state.players.map(player => {
                    return <th key={Math.random()} className="Body-checkbox"><CheckBox/></th>
                  })}
                </tr>
              )
            })}

            {this.location_cards.map( card => {
              return (
                <tr className="Body-table_row" key={card}>
                  <th className="Body-table_first" key={card}>{card}</th>
                  {this.state.players.map(player => {
                    return <th key={Math.random()} className="Body-checkbox"><CheckBox/></th>
                  })}
                </tr>
              )
            })}
          </tbody>
        </table>
      </div>
    )};
};

export default Body;