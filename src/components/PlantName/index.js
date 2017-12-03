import * as React from 'react';
import PropTypes from 'prop-types';
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

PlantName.propTypes = {
  name: PropTypes.string.isRequired,
}