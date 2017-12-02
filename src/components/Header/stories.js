import * as React from 'react';
import { storiesOf } from '@storybook/react';

import { Header } from './';

const stories = storiesOf('Header', {});

stories.add('default', () => {
  return <Header content="I'm a header!" />;
});

stories.add('long text', () => {
  return <Header content="En un lugar de la Mancha, de cuyo nombre no quiero acordarme, no ha mucho tiempo que vivía un hidalgo de los de lanza en astillero, adarga antigua, rocín flaco y galgo corredor." />;
});