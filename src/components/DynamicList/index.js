import * as React from 'react';
import PropTypes from 'prop-types';
import './styles.css';

import { PlantList } from '../PlantList';
import { AddPlantForm } from '../AddPlantForm';
import { Button, BUTTON_TYPES } from '../Button';

export class DynamicList extends React.Component {
  constructor(props) {
    super(props);

    this.addPlant = this.addPlant.bind(this);
    this.savePlant = this.savePlant.bind(this);
    
    this.state = {
      plants: [],
      editing: false,
    }
  }

  addPlant() {
    this.setState({
      editing: true,
    });
  }

  savePlant(data) {
    const plants = this.state.plants;
    plants.push(data);
    this.setState({
      plants: plants,
      editing: false,
    });
  }

  dontSavePlant() {
    this.setState({
      editing: false,
    });
  }
  
  render() {
    return (
      <div>
        {
          this.state.plants.length > 0 &&
          <PlantList plants={ this.state.plants } />
        }
        {
          this.state.editing &&
          <AddPlantForm
            saveFunction={ (data) => this.savePlant(data) }
            dontSaveFunction={ () => this.dontSavePlant() }
          />
        }
        {
          !this.state.editing &&
          <Button
            type={ BUTTON_TYPES.POSITIVE }
            content="Add Plant"
            function={ this.addPlant }
          />
        }
      </div>
    );
  }
}

DynamicList.propTypes = {
  name: PropTypes.string,
};