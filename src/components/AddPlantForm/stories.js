import * as React from 'react';
import { storiesOf } from '@storybook/react';

import { AddPlantForm } from './';

const stories = storiesOf('AddPlantForm', {});

stories.add('default', () => {
  return <AddPlantForm name="AddPlantForm" />;
});