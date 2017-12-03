import * as React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';

import { AddPlantForm } from './';

const stories = storiesOf('AddPlantForm', {});

stories.add('default', () => {
  return (
    <AddPlantForm
      saveFunction={ action("Save plant and leave editing mode") }
      dontSaveFunction={ action("Clear form and leave editing mode") }
    />
  );
});