import React from 'react';

class ShoppingList extends React.Component {
  render() {
    return (
      <div className="shoppingList">
        <h1>Shopping List for {this.props.name}</h1>
        <ul>
          <li>Facebook</li>
          <li>Instagram</li>
          <li>Line</li>
        </ul>
      </div>
    );
  }
}
