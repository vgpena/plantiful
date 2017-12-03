import * as React from 'react';
import { storiesOf } from '@storybook/react';

import { Checkboxes } from './';

const stories = storiesOf('Checkboxes', {});

stories.add('default', () => {
  return (
    <Checkboxes
      name="toxic"
      label="Toxic to"
      options={ ["humans", "cats", "dogs"] }
    />
  );
});