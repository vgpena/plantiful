import * as React from 'react';
import PropTypes from 'prop-types';
import './styles.css';

import { TextInput } from '../TextInput';
import { DropdownInput } from '../DropdownInput';
import { Checkboxes } from '../Checkboxes';
import { Button, BUTTON_TYPES } from '../Button';

function boxIsChecked(id) {
  return document.getElementById(id).checked;
}

export class AddPlantForm extends React.Component {
  constructor(props) {
    super(props);
    this.serializeForm = this.serializeForm.bind(this);
  }

  getToxic() {
    const toxicTo = [ "Cats", "Dogs", "Humans" ].filter(boxIsChecked);
    if (!toxicTo.length) {
      return "N/A";
    }

    return toxicTo.join(', ');
  }

  serializeForm() {
    return {
      'name': document.getElementById('plantName').value,
      'location': document.getElementById('plantLocation').value, 
      'water': document.getElementById('plantWater').value, 
      'light': document.getElementById('plantLight').value,       
      'fertilize': document.getElementById('plantFertilize').value,       
      'toxic to': this.getToxic(),       
    };
  }
  
  render() {
    return (
      <form>
        <TextInput
          name="plantName"
          label="Plant Name"
        />
        <TextInput
          name="plantLocation"
          label="Plant Location"
        />
        <TextInput
          name="plantWater"
          label="Water"
        />
        <DropdownInput
          name="plantLight"
          label="Light"
          choices={[ "Full Sun", "Partial Sun", "Shade Tolerant" ]}
        />
        <TextInput
          name="plantFertilize"
          label="Fertilize"
        />
        <Checkboxes
          name="plantToxicity"
          label="Toxic to"
          options={[ "Cats", "Dogs", "Humans" ]}
        />
        <fieldset className="add-plant-fieldset">
          <Button
            type={ BUTTON_TYPES.POSITIVE }
            content={ "Add Plant" }
            function={ () => this.props.saveFunction(this.serializeForm()) }
          />
          <Button
            type={ BUTTON_TYPES.DANGER }
            content="Never Mind"
            function={ this.props.dontSaveFunction }
          />
        </fieldset>
      </form>
    );
  }
}

AddPlantForm.propTypes = {
  saveFunction: PropTypes.func.isRequired,
  dontSaveFunction: PropTypes.func.isRequired,
};