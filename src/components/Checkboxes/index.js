import * as React from 'react';
import PropTypes from 'prop-types';
import './styles.css';

export class Checkboxes extends React.Component {
  render() {
    return (
      <fieldset className="fieldset">
        <legend className="legend">
          { this.props.label }
        </legend>
        {
          this.props.options.map((option) => {
            return (
              <div className="checkbox-wrap">
                <label for={ option } className="label-checkbox">
                  { option }
                </label>
                <input type="checkbox" value={ option } id={ option } />
              </div>
            )
          })
        }
      </fieldset>
    );
  }
}

Checkboxes.propTypes = {
  name: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  options: PropTypes.arrayOf(PropTypes.string).isRequired,
}