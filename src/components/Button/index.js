import * as React from 'react';
import './styles.css';

export const BUTTON_TYPES = {
  DEFAULT: 'button button-default',
  CAUTION: 'button button-caution',
  SPECIAL: 'button button-special',
};

export class Button extends React.Component {
  render() {
    return (
      <button class={ this.props.type || BUTTON_TYPES.DEFAULT } onClick={ this.props.onClick }>
        { this.props.content }
      </button>
    );
  }
}