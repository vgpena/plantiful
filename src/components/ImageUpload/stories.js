import * as React from 'react';
import { storiesOf } from '@storybook/react';

import { ImageUpload } from './';

const stories = storiesOf('ImageUpload', {});

stories.add('default', () => {
  return <ImageUpload name="ImageUpload" />;
});