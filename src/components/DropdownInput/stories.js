import * as React from 'react';
import { storiesOf } from '@storybook/react';

import { DropdownInput } from './';

const stories = storiesOf('DropdownInput', {});

stories.add('default', () => {
  return (
    <DropdownInput
      name="dropdown"
      label="Light Level"
      choices={ ["full sun", "partial sun", "shade tolerant"] }
    />
  );
});