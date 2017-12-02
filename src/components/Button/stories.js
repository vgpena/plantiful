import * as React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { withKnobs, text, boolean } from '@storybook/addon-knobs';

import { Button, BUTTON_TYPES } from './';

const stories = storiesOf('Button', {}).addDecorator(withKnobs);

stories.add('default', () => {
  return (
    <Button
      content={ text('Content', 'Save') }
      onClick={ action('clicked default button') }
      disabled={ boolean('Disabled', false) }
    />
  );
});

stories.add('caution', () => {
  return (
    <Button
      type={ BUTTON_TYPES.CAUTION }
      content={ text('Content', 'Delete') }
      onClick={ action('clicked caution button') }
      disabled={ boolean('Disabled', false) }
    />
  );
});

stories.add('special', () => {
  return (
    <Button
      type={ BUTTON_TYPES.SPECIAL }
      content={ text('Content', 'Party') }
      onClick={ action('clicked special button') }
      disabled={ boolean('Disabled', false) }
    />
  );
});