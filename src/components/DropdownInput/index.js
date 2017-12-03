import * as React from 'react';
import './styles.css';

export class DropdownInput extends React.Component {
  render() {
    return (
      <div>
        <label htmlFor={ this.props.name } className="label-dropdown">
          { this.props.label }
        </label>
        <select id={ this.props.name } name={ this.props.name } className="input-dropdown">
          {
            this.props.choices.map((choice) => {
              return (
                <option value={ choice }>
                  { choice }
                </option>
              )
            })
          }
        </select>
      </div>
    );
  }
}