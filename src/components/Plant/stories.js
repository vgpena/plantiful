import * as React from 'react';
import { storiesOf } from '@storybook/react';

import { Plant } from './';

const stories = storiesOf('Plant', {});

stories.add('default', () => {
  return (
    <Plant
      name="Plant"
      image="https://www.placecage.com/700/702"
      stats={[
        [ 'location', 'living room' ],
        [ 'sun', 'full' ],
        [ 'water', 'once per week' ],
        [ 'fertilize', 'twice per year' ],
        [ 'toxic to', 'cats, dogs' ],
      ]}
    />
  );
});