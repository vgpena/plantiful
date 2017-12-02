import { configure } from '@storybook/react';
import { setOptions } from '@storybook/addon-options';

const stories = require.context('../src/components/', true, /\/stories\.js$/);

function loadStories() {
  return stories.keys().forEach(stories);
};

setOptions({
  name: '1337 Storybook',
  url: 'https://alert-oriole.glitch.me',
  downPanelInRight: true,
});

configure(loadStories, module);