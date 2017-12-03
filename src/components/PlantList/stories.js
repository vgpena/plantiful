import * as React from 'react';
import { storiesOf } from '@storybook/react';

import { PlantList } from './';

const stories = storiesOf('PlantList', {});

stories.add('default', () => {
  return (
    <PlantList
      plants={[
        {
          name: "Plant 1",
          image: "https://www.placecage.com/700/703",
          stats: [
            [ 'location', 'living room, by window' ],
            [ 'sun', 'full' ],
            [ 'water', 'once per week' ],
            [ 'fertilize', 'twice per year' ],
            [ 'toxic to', 'cats, dogs' ],
          ]
        },
        {
          name: "Plant 2",
          image: "https://www.placecage.com/700/704",
          stats: [
            [ 'location', 'bedroom' ],
            [ 'sun', 'full' ],
            [ 'water', 'once per week' ],
            [ 'fertilize', 'twice per year' ],
            [ 'toxic to', 'cats, dogs' ],
          ]
        },
      ]}
    />
  );
});

stories.add('empty', () => {
  return <PlantList />;
});