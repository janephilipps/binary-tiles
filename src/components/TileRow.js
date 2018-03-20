import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Tile from './Tile';

class TileRow extends Component {

  static propTypes = {
    tileGroup: PropTypes.arrayOf(
      PropTypes.shape({
        number: PropTypes.number,
        size: PropTypes.number
     })
    )
  }

  render() {

    let {
      tileGroup
    } = this.props;

    let tiles = tileGroup.map((obj) => (
      <Tile
        number={obj.number}
        size={obj.size}
      />
    ));

    return (
      <div className="Row">
        {tiles}
      </div>
    );
  }
}

export default TileRow;
