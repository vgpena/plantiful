import * as React from 'react';

export class Foo extends React.Component {
  render() {
    return (
      <p>Hello, { this.props.name }!</p>
    );
  }
}