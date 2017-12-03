import * as React from 'react';
import { storiesOf } from '@storybook/react';

import { Button } from './';

const stories = storiesOf('Button', {});

stories.add('default', () => {
  return (
    <Button
      content={ "Button" }
    />
  );
});