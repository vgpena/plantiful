import * as React from 'react';
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
      >
        { this.props.content }
      </button>
    );
  }
}