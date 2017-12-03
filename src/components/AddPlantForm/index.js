import * as React from 'react';
import PropTypes from 'prop-types';
import './styles.css';

import { TextInput } from '../TextInput';
import { DropdownInput } from '../DropdownInput';
import { Checkboxes } from '../Checkboxes';
import { ImageUpload } from '../ImageUpload';
import { Button, BUTTON_TYPES } from '../Button';

function boxIsChecked(id) {
  return document.getElementById(id).checked;
}

function getToxic() {
  const toxicTo = [ "Cats", "Dogs", "Humans" ].filter(boxIsChecked);
  if (!toxicTo.length) {
    return "N/A";
  }

  return toxicTo.join(', ');
}

function valueOrPlaceholder(id) {
  const val = document.getElementById(id).value;
  return val.length ? val : "???";
}

function saveImageToLocalStorage(url, prefix) {
  const canvas = document.createElement('canvas');
  const img = new Image();
  img.src = url;
  canvas.width = img.width;
  canvas.height = img.height;
  const ctx = canvas.getContext("2d");
  ctx.drawImage(img, 0, 0);
  const dataURL = canvas.toDataURL("image/png");
  const saveableData = dataURL.replace(/^data:image\/(png|jpg);base64,/, "");
  const fileName = `plantiful-${ prefix }-${ Date() }`;
  localStorage.setItem(fileName, saveableData);
  return fileName;
}

function serializeForm() {
  let imageID = null;
  if (document.getElementById('image-upload').style.backgroundImage) {
    imageID = saveImageToLocalStorage(document.getElementById('image-upload').dataset.imageurl, valueOrPlaceholder('plantName'));
    imageID = `data:image/png;base64,${ localStorage.getItem(imageID) }`;
  }

  return {
    'name': valueOrPlaceholder('plantName'),
    'image': imageID,
    'stats': [
      ['location', valueOrPlaceholder('plantLocation')],
      ['water', valueOrPlaceholder('plantWater')],
      ['light', valueOrPlaceholder('plantLight')],
      ['fertilize', valueOrPlaceholder('plantFertilize')],
      ['toxic to', getToxic()],
    ],
  };
}

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
          name="plantFertilize"
          label="Fertilize"
        />
        <Checkboxes
          name="plantToxicity"
          label="Toxic to"
          options={[ "Cats", "Dogs", "Humans" ]}
        />
        <ImageUpload />
        <fieldset className="add-plant-fieldset button-wrap">
          <Button
            type={ BUTTON_TYPES.POSITIVE }
            content={ "Add Plant" }
            function={ () => this.props.saveFunction(serializeForm()) }
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