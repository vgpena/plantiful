import * as React from 'react';
import './styles.css';

import { SiteTitle } from '../SiteTitle';
import { DynamicList } from '../DynamicList';

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