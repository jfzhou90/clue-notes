import React, { Component } from 'react';
import './styles/index.scss';

// Components
import {
  Header,
} from './components';

class App extends Component {
  render() {
    return (
      <div>
        <div className="Container-row Content-center">
          <Header/>
        </div>
        <div className="Container-row">
          <p>body</p>
        </div>
      </div>
    );
  }
}

export default App;
