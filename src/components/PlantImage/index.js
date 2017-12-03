import * as React from 'react';
import PropTypes from 'prop-types';
import './styles.css';

export class PlantImage extends React.Component {
  render() {
    return (
      <div className="plant-image" style={{ 'background-image': `url(${ this.props.imageUrl })` }} />
    );
  }
}

PlantImage.propTypes = {
  imageUrl: PropTypes.string,
}