import React, { Component } from 'react';
import Square from './components/Square';
import Tile from './components/Tile';
import Input from './components/Input';
import './App.css';

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      number: 0,
      size: 0
    }
  }


  _setNumber = function(number) {
    this.setState({number: number});
  };

  _setSize = function(size) {
    this.setState({size: size});
  };

  // Get highest binary number given size N
  _getMaxBinary = function(size) {
    return Math.pow(2, size * size) - 1;
  };

  render() {

    let {
      number,
      size
    } = this.state;

    let maxBinary = this._getMaxBinary(size);
    let squareSize = Math.sqrt(maxBinary + 1);
    let array = new Array(maxBinary + 1).fill();
    // debugger;

    let tiles = array.map((array, i) => (
      <Tile
        number={i}
        size={size}
      />
    ));

    console.log(tiles);



    return (
      <div className="App">
        <Input
          placeholder="number"
          onChange={this._setNumber.bind(this)}
        />
        <Input
          placeholder="size"
          onChange={this._setSize.bind(this)}
        />
        <Tile
          number={number}
          size={size}
        />
        Max Binary: {maxBinary}


        <Square
          size={squareSize}
        />
      </div>
    );
  }
}

export default App;
