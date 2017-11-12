import * as React from 'react';
import { storiesOf } from '@storybook/react';

import { Header } from './';

const stories = storiesOf('Header', {});

stories.add('default', () => {
  return <Header name="Header" />;
});