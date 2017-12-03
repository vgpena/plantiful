import * as React from 'react';
import { storiesOf } from '@storybook/react';

import { TextInput } from './';

const stories = storiesOf('TextInput', {});

stories.add('default', () => {
  return <TextInput name="TextInput" label="Test Label" />;
});