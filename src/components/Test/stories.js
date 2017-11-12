import * as React from 'react';
import { storiesOf } from '@storybook/react';

import { Test } from './';

const stories = storiesOf('Test', {});

stories.add('default', () => {
  return <Test name="Test" />;
});