import { configure } from '@storybook/react';
import { setOptions } from '@storybook/addon-options';

const stories = require.context('../src/components/', true, /\/stories\.js$/);

function loadStories() {
  return stories.keys().forEach(stories);
};

setOptions({
  name: 'plantiful',
  url: 'https://plantiful.glitch.me',
  downPanelInRight: true,
});

configure(loadStories, module);