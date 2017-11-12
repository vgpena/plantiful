import * as React from 'react';
import { describe, expect, fake, it, shallow, specs, storiesOf } from 'storyUtils';

import { {{name}} } from './';

const stories = storiesOf('{{name}}', {});

stories.addWithInfo('default', 'Change me!', () => {
  const story = <{{name}} name={ fake('{{name.firstName}}') } />;

  specs(() => describe('default', () => {
    const element = shallow(story);

    it('should exist', () => {
      expect(element.exists()).toBe(true);
    });
  }));

  return story;
});