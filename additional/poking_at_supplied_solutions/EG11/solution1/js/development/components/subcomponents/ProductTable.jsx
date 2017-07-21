import React from 'react';

import ProductCategoryRow from './ProductCategoryRow.jsx';
import ProductRow from './ProductRow.jsx';

export default class ProductTable extends React.Component {
  render() {
    let rows = [];
    let lastCategory = null;

    const Products = this.props.products.map((product) => {
        if (product.category !== lastCategory) {
            rows.push(<ProductCategoryRow category={product.category} key={Math.floor(Math.random() * 2000)}/>);
        }

        rows.push(<ProductRow key={product.id} {...product}/>);
        lastCategory = product.category;
    });

    return (
        <table>
            <thead>
                <tr>
                    <th>Product</th>
                    <th>Price</th>
                </tr>
            </thead>
            <tbody>
              {rows}
            </tbody>
        </table>
    );
  }
}
