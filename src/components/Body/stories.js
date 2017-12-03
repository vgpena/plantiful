import * as React from 'react';
import { storiesOf } from '@storybook/react';

import { Body } from './';

const stories = storiesOf('Body', {});

stories.add('default', () => {
  return <Body />;
});