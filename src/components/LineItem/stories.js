import * as React from 'react';
import { storiesOf } from '@storybook/react';

import { LineItem } from './';

const stories = storiesOf('LineItem', {});

stories.add('default', () => {
  return (
    <LineItem
      name="fertilize"
      value="every 7-10 days"
    />
  );
});