import * as React from 'react';
import PropTypes from 'prop-types';
import './styles.css';

export class PlantImage extends React.Component {
  render() {
    console.log(this.props.imageUrl);
    return (
      <div className="plant-image" style={ this.props.imageUrl && { 'backgroundImage': `url(data:image/png;base64,${ localStorage.getItem(this.props.imageUrl) })` }} />
    );
  }
}

PlantImage.propTypes = {
  imageUrl: PropTypes.string,
}