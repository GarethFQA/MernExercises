import { EventEmitter } from 'events';

import dispatcher from '../dispatcher';

class ProductStore extends EventEmitter {
  constructor() {
    super();
    this.products = [
        {id: 1, category: 'Sporting Goods', price: '£49.99', stocked: true, name: 'Football'},
        {id: 2, category: 'Sporting Goods', price: '£9.99', stocked: true, name: 'Baseball'},
        {id: 3, category: 'Sporting Goods', price: '£29.99', stocked: false, name: 'Basketball'},
        {id: 4, category: 'Electronics', price: '£99.99', stocked: true, name: 'iPod Touch'},
        {id: 5, category: 'Electronics', price: '£399.99', stocked: false, name: 'iPhone 6s'},
        {id: 6, category: 'Electronics', price: '£199.99', stocked: true, name: 'Nexus 7'}
    ];
    this.filteredProducts = [];
  }

  getAllProducts() {
    return this.products;
  }

  getFilteredProducts() {
    return this.filteredProducts;
  }

  filterByStock(stockStatus) {
    this.filteredProducts = [];
    this.products.forEach((product) => {
      if(product.stocked === stockStatus && stockStatus === true) {
        this.filteredProducts.push(product);
      }
    });
    this.emit('change');
  }

  filterBySearch(searchParameters) {
    this.filteredProducts = [];
    this.products.forEach((product) => {
      if(product.name.indexOf(searchParameters) !== -1) {
        this.filteredProducts.push(product);
      }
    });
    this.emit('change');
  }

  handleActions(action) {
    switch(action.type) {
      case "FILTER_STOCK":
        this.filterByStock(action.stockStatus);
        //ProductStore.emit();
        break;
      case "FILTER_SEARCH":
        this.filterBySearch(action.searchParameters);
        //ProductStore.emit();
        break;
      default:
        break;
    }
  }
}

const productStore = new ProductStore;
dispatcher.register(productStore.handleActions.bind(productStore));
export default productStore;
