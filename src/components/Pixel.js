import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Pixel extends Component {

  static propTypes = {
    on: PropTypes.bool
  }

  render() {

    let {
      on
    } = this.props;

    let foo = on ? "Pixel-on" : "Pixel-off";

    let cssClass = `Pixel ${foo}`;

    return (
      <div className={cssClass}>
      </div>
    );
  }
}

export default Pixel;
