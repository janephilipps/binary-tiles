import React, { Component } from 'react';
import Tile from './components/Tile';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Tile
          number={300}
          size={4}
        />
      </div>
    );
  }
}

export default App;
