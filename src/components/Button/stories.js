import * as React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { withKnobs, text } from '@storybook/addon-knobs';

import { Button, BUTTON_TYPES } from './';

const stories = storiesOf('Button', {});
stories.addDecorator(withKnobs);

stories.add('default', () => {
  return (
    <Button
      content={ text("Content", "Button") }
      function={ action("clicked default button") }
    />
  );
});

stories.add('positive', () => {
  return (
    <Button
      type={ BUTTON_TYPES.POSITIVE }
      content={ "Save Plant" }
      function={ action("clicked positive button") }      
    />
  );
});

stories.add('danger', () => {
  return (
    <Button
      type={ BUTTON_TYPES.DANGER }
      content={ "Remove Plant" }
      function={ action("clicked danger button") }      
    />
  );
});

stories.add('functional', () => {
  return (
    <Button
      type={ BUTTON_TYPES.FUNCTION }
      content={ "Download Plants List" }
      function={ action("clicked functional button") }      
    />
  );
});