import * as React from 'react';
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