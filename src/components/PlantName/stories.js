import * as React from 'react';
import { storiesOf } from '@storybook/react';

import { PlantName } from './';

const stories = storiesOf('PlantName', {});

stories.add('default', () => {
  return <PlantName name="Cymbidium Orchid" />;
});