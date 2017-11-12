import * as React from 'react';
import { storiesOf } from '@storybook/react';
import { Foo } from './';

const stories = storiesOf('Foo', module);

stories.add('default', () => {
  return <Foo name="foo" />
});

stories.add('and another one', () => {
  return <Foo name="bar" />
});