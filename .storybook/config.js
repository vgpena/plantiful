import { configure } from '@storybook/react';

const stories = require.context('../src/components/', true, /\/stories\.js$/);

function loadStories() {
  return stories.keys().forEach(stories);
};

configure(loadStories, module);
