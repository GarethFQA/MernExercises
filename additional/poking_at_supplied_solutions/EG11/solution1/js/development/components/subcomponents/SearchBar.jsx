import React from 'react';

export default class SearchBar extends React.Component {
  constructor(props) {
    super(props);
    this.handleSearchChange = this.handleSearchChange.bind(this);
    this.handleStockChange = this.handleStockChange.bind(this);
  }

  handleSearchChange() {
    this.props.onUserSearchInput(this.filterTextInput.value);
  }

  handleStockChange() {
    this.props.onUserStockInput(this.inStockOnlyInput.checked);
  }

  render() {
    return (
      <form>
        <input
          type="text"
          placeholder="Search..."
          value={this.props.filterText}
          ref={(input) => this.filterTextInput = input}
          onChange={this.handleSearchChange}
        />
      <p>
        <input
          type="checkbox"
          checked={this.props.inStockOnly}
          ref={(input) => this.inStockOnlyInput = input}
          onChange={this.handleStockChange}
        />
      {' '}
      Check to only show products in stock
      </p>
      </form>
    )
  }
}
