import * as React from 'react';
import './styles.css';

export class Header extends React.Component {
  render() {
    return (  
      <header className="header">
        <h1>
          { this.props.content }
        </h1>
      </header>
    );
  }
}