import * as React from 'react';
import './styles.css';

export class LineItem extends React.Component {
  render() {
    return (
      <tr className="lineitem">
        <td className="lineitem-name">
          { this.props.name }
        </td>
        <td className="lineitem-value">
          { this.props.value }
        </td>
      </tr>
    );
  }
}