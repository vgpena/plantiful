import * as React from 'react';

export class Header extends React.Component {
  render() {
    return (
      <p>Hello, { this.props.name }!</p>
    );
  }
}