import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Input extends Component {

  static propTypes = {
    placeholder: PropTypes.string,
    onChange: PropTypes.func
  }

  _handleChange = function(e) {
    this.props.onChange(e.target.value);
  }

  render() {

    let {
      placeholder
    } = this.props;

    return (
      <div className="Input">
        <input type="number" max="4" placeholder={placeholder} onChange={this._handleChange.bind(this)}></input>
      </div>
    );
  }
}

export default Input;
