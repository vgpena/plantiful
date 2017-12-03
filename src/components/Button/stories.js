import * as React from 'react';
import { storiesOf } from '@storybook/react';

import { Button, BUTTON_TYPES } from './';

const stories = storiesOf('Button', {});

stories.add('default', () => {
  return (
    <Button
      content={ "Button" }
    />
  );
});

stories.add('positive', () => {
  return (
    <Button
      type={ BUTTON_TYPES.POSITIVE }
      content={ "Save Plant" }
    />
  );
});

stories.add('danger', () => {
  return (
    <Button
      type={ BUTTON_TYPES.DANGER }
      content={ "Remove Plant" }
    />
  );
});

stories.add('function', () => {
  return (
    <Button
      type={ BUTTON_TYPES.FUNCTION }
      content={ "Download Plants List" }
    />
  );
});