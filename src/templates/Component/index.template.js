import * as React from 'react';
import './styles.css';

export class {{name}} extends React.Component {
  render() {
    return (
      <p className="{{name}}">Hello, { this.props.name }!</p>
    );
  }
}