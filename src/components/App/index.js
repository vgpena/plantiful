import * as React from 'react';
import PropTypes from 'prop-types';
import './styles.css';

import { SiteTitle } from '../SiteTitle';
import { DynamicList } from '../DynamicList';
import { Button } from '../Button';

export class App extends React.Component {
  render() {
    return (
      <div>
        <SiteTitle />
        <DynamicList />
      </div>
    );
  }
}