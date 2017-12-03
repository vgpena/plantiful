import * as React from 'react';
import PropTypes from 'prop-types';
import './styles.css';

import { Plant } from '../Plant';

export class PlantList extends React.Component {
  render() {
    return (
      <ul className="plant-list">
        {
          this.props.plants.map((plant) => {
            console.log(plant);
            return (
              <li key={ plant.name } className="plant-list-item">
                <Plant { ...plant } />
              </li>
            );
          })
        }
      </ul>
    );
  }
}

PlantList.propTypes = {
  plants: PropTypes.arrayOf(PropTypes.object).isRequired,
};