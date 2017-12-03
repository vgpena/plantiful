import * as React from 'react';
import PropTypes from 'prop-types';
import './styles.css';

import { action } from '@storybook/addon-actions';

import { TextInput } from '../TextInput';
import { DropdownInput } from '../DropdownInput';
import { Checkboxes } from '../Checkboxes';
import { Button, BUTTON_TYPES } from '../Button';

export class AddPlantForm extends React.Component {
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
          name="plantfertilize"
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
            function={ action("Save plant and leave editing mode") }
          />
          <Button
            type={ BUTTON_TYPES.DANGER }
            content="Never Mind"
            function={ action("Clear form and leave editing mode") }
          />
        </fieldset>
      </form>
    );
  }
}

AddPlantForm.propTypes = {
  name: PropTypes.string,
};