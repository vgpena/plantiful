import * as React from 'react';
import { storiesOf } from '@storybook/react';

import { PlantImage } from './';

const stories = storiesOf('PlantImage', {});

stories.add('default', () => {
  return <PlantImage imageUrl="https://www.placecage.com/700/700" />;
});