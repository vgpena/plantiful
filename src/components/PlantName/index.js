import * as React from 'react';
import './styles.css';

export class PlantName extends React.Component {
  render() {
    return (
      <h2 className="plant-name">
        { this.props.name }
      </h2>
    );
  }
}