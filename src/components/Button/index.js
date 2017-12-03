import * as React from 'react';
import PropTypes from 'prop-types';
import './styles.css';

export const BUTTON_TYPES = {
  DEFAULT: 'button',
  POSITIVE: 'button button-save',
  DANGER: 'button button-remove',
  FUNCTION: 'button button-download',
}

export class Button extends React.Component {
  render() {
    return (
      <button
        className={ this.props.type || BUTTON_TYPES.DEFAULT }
        onClick={ this.props.function }
      >
        { this.props.content }
      </button>
    );
  }
}

Button.propTypes = {
  content: PropTypes.string.isRequired,
  type: PropTypes.oneOf(Object.values(BUTTON_TYPES)),
  function: PropTypes.func.isRequired,
  disabled: PropTypes.bool,
};