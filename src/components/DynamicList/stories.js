import * as React from 'react';
import { storiesOf } from '@storybook/react';

import { DynamicList } from './';

const stories = storiesOf('DynamicList', {});

stories.add('default', () => {
  return (
    <DynamicList />
  );
});