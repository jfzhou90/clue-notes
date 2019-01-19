import React, { Component } from 'react';
import './styles/index.scss';

// Components
import {
  Header,
  Body
} from './components';

class App extends Component {
  render() {
    return (
      <div>
        <div className="Container-row Content-center">
          <Header/>
        </div>
        <div className="Container-row">
          <Body/>
        </div>
      </div>
    );
  }
}

export default App;
