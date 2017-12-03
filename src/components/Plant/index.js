import * as React from 'react';
import PropTypes from 'prop-types';
import './styles.css';

import { PlantName } from '../PlantName';
import { PlantImage } from '../PlantImage';
import { LineItem } from '../LineItem';

export class Plant extends React.Component {
  render() {
    return (
      <div>
        <PlantName name={ this.props.name } />
        <PlantImage imageUrl={ this.props.image } />
        <table className="plant-stats">
          <tbody>
            {
              this.props.stats.map((stat) => {
                return (
                  <LineItem
                    key={ stat[0] }
                    name={ stat[0] }
                    value={ stat[1] }
                  />
                );
              })
            }
          </tbody>
        </table>
      </div>
    );
  }
}

Plant.propTypes = {
  name: PropTypes.string.isRequired,
  image: PropTypes.string,
  stats: PropTypes.arrayOf(PropTypes.arrayOf(PropTypes.string)).isRequired,
};