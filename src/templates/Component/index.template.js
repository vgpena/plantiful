import * as React from 'react';
import PropTypes from 'prop-types';
import './styles.css';

export class {{name}} extends React.Component {
  render() {
    return (
      <p className="{{name}}">Hello, { this.props.name }!</p>
    );
  }
}

{{name}}.propTypes = {
  name: PropTypes.string,
};