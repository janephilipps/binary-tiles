import React, { Component } from 'react';
import PropTypes from 'prop-types';
import TileRow from './TileRow';

class Square extends Component {

  static propTypes = {
    size: PropTypes.number
  }

  render() {

    let {
      size
    } = this.props;

    // A 4 x 4 square contains 16 tiles
    // Each tile is 2 X 2
    // Max Binary Number is 15

    // debugger;

    let rowArrays = new Array(size).fill();

    // ['', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '']

    let rows = rowArrays.map((el, i) => {
      let tiles = rowArrays.map((el, j) => (
        {number: size * i + j, size: Math.sqrt(size)}
      ));
      // [{number: i, size: Math.sqrt(size)}];
      return <TileRow
        tileGroup={tiles}
      />
    });

    return (
      <div className="Square">
        {rows}
      </div>
    );
  }
}

export default Square;
