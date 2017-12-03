import * as React from 'react';
import './styles.css';

export class PlantImage extends React.Component {
  render() {
    return (
      <div className="plant-image" style={{ 'background-image': `url(${ this.props.imageUrl })` }} />
    );
  }
}