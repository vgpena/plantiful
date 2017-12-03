import * as React from 'react';
import { storiesOf } from '@storybook/react';

import { App } from './';

const stories = storiesOf('App', {});

stories.add('default', () => {
  return <App name="App" />;
});