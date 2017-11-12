import * as React from 'react';
import './styles.css';

export class Test extends React.Component {
  render() {
    return (
      <p className="Test">Hello, { this.props.name }!</p>
    );
  }
}