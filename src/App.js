import React, { Component } from 'react';
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

  render() {

    let {
      number,
      size
    } = this.state;

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
      </div>
    );
  }
}

export default App;
