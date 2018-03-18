import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Pixel from './Pixel';

class PixelRow extends Component {

  static propTypes = {
    pixelGroup: PropTypes.arrayOf(PropTypes.bool)
  }

  render() {

    let {
      pixelGroup
    } = this.props;

    let pixels = pixelGroup.map((value) => (
      <Pixel
        on={value}
      />
    ));

    return (
      <div className="Row">
        {pixels}
      </div>
    );
  }
}

export default PixelRow;
