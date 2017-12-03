import * as React from 'react';
import PropTypes from 'prop-types';
import './styles.css';

export class DropdownInput extends React.Component {
  render() {
    return (
      <div className="dropdown-input-wrap">
        <label htmlFor={ this.props.name } className="label-dropdown">
          { this.props.label }
        </label>
        <select id={ this.props.name } name={ this.props.name } className="input-dropdown">
          {
            this.props.choices.map((choice) => {
              return (
                <option value={ choice } key={ choice }>
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

DropdownInput.propTypes = {
  name: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  choices: PropTypes.arrayOf(PropTypes.string).isRequired,
}