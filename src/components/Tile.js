import React, { Component } from 'react';
import PropTypes from 'prop-types';
import PixelRow from './PixelRow';

class Tile extends Component {

  static propTypes = {
    size: PropTypes.number,
    number: PropTypes.number
  }


  // Input: number, size
  // Output: array of booleans
  _convertToBinary = function(number, size) {

    let array = new Array(Math.pow(size, 2)).fill(false);

    for (var i = array.length - 1; i >= 0; i--) {

      let powerOf2 = Math.pow(2, i);

      if (powerOf2 === number) {
        array[i] = true;
        break;
      } else if (powerOf2 < number) {
        array[i] = true;
        number = number - powerOf2;
      }
    }

    return array;
  }

  _splitBinaryArray = function(array, size) {

    let arrays = [];

    while (array.length) {
      arrays.push(array.splice(0, size));
    }

    return arrays;
  }

  render() {

    let {
      size,
      number
    } = this.props;

    let array = this._convertToBinary(number, size);
    let rowArrays = this._splitBinaryArray(array, size);

    let rows = rowArrays.map((array, i) => (
      <PixelRow
        pixelGroup={array}
      />
    ));

    return (
      <div className="Tile">
        {rows}
      </div>
    );
  }
}

export default Tile;
