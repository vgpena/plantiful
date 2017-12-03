import * as React from 'react';
import PropTypes from 'prop-types';
import './styles.css';

import { SiteTitle } from '../SiteTitle';
import { DynamicList } from '../DynamicList';
import { Button } from '../Button';

export class Body extends React.Component {
  render() {
    return (
      <div className="app">
        <SiteTitle />
        <DynamicList />
      </div>
    );
  }
}