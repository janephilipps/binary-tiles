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

    return (
      <div className="Tile">
        <PixelRow
          pixelGroup={[true, false, true, true, false]}
        />
        <PixelRow
          pixelGroup={[false, true, true, true, true]}
        />
      </div>
    );
  }
}

export default Tile;
