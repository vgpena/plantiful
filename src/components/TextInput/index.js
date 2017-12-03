import * as React from 'react';
import PropTypes from 'prop-types';
import './styles.css';

export class TextInput extends React.Component {
  render() {
    return (
      <div>
        <label htmlFor={ this.props.name } className="label-text">
          { this.props.label }
        </label>
        <input type="text" id={ this.props.name } className="input-text" />
      </div>
    );
  }
}

TextInput.propTypes = {
  name: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
}