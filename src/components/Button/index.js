import * as React from 'react';
import './styles.css';

export const BUTTON_TYPES = {
  DEFAULT: 1,
  CAUTION: 2,
  SPECIAL: 3,
};

export class Button extends React.Component {
  render() {
    return (
      <button class="button" onClick={ this.props.onClick }>
        { this.props.content }
      </button>
    );
  }
}