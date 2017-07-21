import React from 'react';

import * as ProductActions from '../actions/ProductActions';
import ProductStore from '../stores/ProductStore';
import ProductTable from './subcomponents/ProductTable';
import SearchBar from './subcomponents/SearchBar';

export default class FilterableProductTable extends React.Component {
  constructor() {
    super();
    this.state = {
      filterText: '',
      inStockOnly: false,
      products: ProductStore.getAllProducts()
    };

    this.handleUserSearchInput = this.handleUserSearchInput.bind(this);
    this.handleUserStockInput = this.handleUserStockInput.bind(this);
    this._onChange = this._onChange.bind(this);
  }

  componentWillMount() {
    ProductStore.on("change", this._onChange);
  }

  componentWillUnmount() {
    ProductStore.removeEventListener("change", this._onChange);
  }

  _onChange() {
    this.setState({
      products: ProductStore.getFilteredProducts()
    });
  }

  handleUserSearchInput(filterText) {
    this.setState({
      filterText
    });
    ProductActions.filterBySearch(filterText);
  }

  handleUserStockInput(inStockOnly) {
    this.setState({
      inStockOnly
    });

    if(inStockOnly) {
      ProductActions.filterByStock(inStockOnly);
    }
    else {
      this.setState({
        products: ProductStore.getAllProducts()
      });
    }
  }

  render() {
    return (
      <div>
        <SearchBar
          filterText={this.state.filterText}

          onUserSearchInput={this.handleUserSearchInput}

        />
        <ProductTable products={this.state.products} />
      </div>
    );
  }
}
