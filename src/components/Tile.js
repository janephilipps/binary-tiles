import React, { Component } from 'react';
import PropTypes from 'prop-types';
import PixelRow from './PixelRow';

class Tile extends Component {

  static propTypes = {
    size: PropTypes.number
  }

  render() {

    let {
      size
    } = this.props;

    let array = new Array(size).fill();

    let rows = array.map((i) => (
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
