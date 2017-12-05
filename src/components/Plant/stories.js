import * as React from 'react';
import { storiesOf } from '@storybook/react';

import { Plant } from './';

const stories = storiesOf('Plant', {});

stories.add('default', () => {
  return (
    <Plant
      name="Cymbidium Orchid"
      image="https://www.orchidweb.com/images/cymbidium_orchid_plant.jpg"
      stats={[
        [ 'location', 'living room by window' ],
        [ 'light', 'full sun' ],
        [ 'water', 'once every 2-3 days' ],
        [ 'fertilize', 'once every 2 weeks' ],
        [ 'toxic to', 'dogs' ],
      ]}
    />
  );
});

stories.add('no photo', () => {
  return (
    <Plant
      name="Plant"
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