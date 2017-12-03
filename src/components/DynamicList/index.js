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
    this.clearList = this.clearList.bind(this);
    this.downloadPlants = this.downloadPlants.bind(this);    
    
    this.state = {
      plants: [],
      hasPlants: false,
      editing: false,
    }
  }

  componentWillMount() {
    localStorage.clear();    
  }

  componentWillUnmount() {
    localStorage.clear();
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
      hasPlants: true,
      plants: plants,
      editing: false,
    });
  }

  dontSavePlant() {
    this.setState({
      editing: false,
    });
  }

  clearList() {
    localStorage.clear();
    this.setState({
      hasPlants: false,
      plants: [],
    });
  }

  downloadPlants() {
    window.print();
  }
  
  render() {
    return (
      <div>
        {
          (!this.state.editing || this.state.hasPlants) &&
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
          <div className="button-wrap hide-in-print">
            <Button
              type={ BUTTON_TYPES.POSITIVE }
              content="Add Plant"
              function={ this.addPlant }
            />
          </div>
        }
        {
          (!this.state.editing && this.state.hasPlants) &&
          <div className="dynamic-list-buttons button-wrap hide-in-print">
            <Button
              type={ BUTTON_TYPES.DANGER }
              content="💀 Clear all"
              function={ this.clearList }
            />
            <Button
              type={ BUTTON_TYPES.FUNCTION }
              content="Download list"
              function={ this.downloadPlants }
            />
          </div>
        }
      </div>
    );
  }
}