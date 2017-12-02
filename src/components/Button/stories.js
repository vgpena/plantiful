import * as React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';

import { Button, BUTTON_TYPES } from './';

const stories = storiesOf('Button', {});

stories.add('default', () => {
  return (
    <Button
      content="Save"
      onClick={ action('clicked default button') }
    />
  );
});

stories.add('caution', () => {
  return (
    <Button
      type={ BUTTON_TYPES.CAUTION }
      content="Delete"
      onClick={ action('clicked caution button') }
    />
  );
});