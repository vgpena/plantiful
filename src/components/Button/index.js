import * as React from 'react';
import './styles.css';

export class Button extends React.Component {
  render() {
    return (
      <button className="button">
        { this.props.content }
      </button>
    );
  }
}