import React from 'react';

export default class ProductRow extends React.Component {

  render() {

    const { price, name, stocked } = this.props;

    const displayName = (stocked) ? name : <span style={{color: 'red'}}>{name}</span>;

    return (
      <tr>
        <td>{displayName}</td>
        <td>{price}</td>
      </tr>
    );
  }
}
