/* eslint-disable no-plusplus */
/* eslint-disable react/prop-types */
/* eslint-disable react/destructuring-assignment */
import React from 'react';
import axios from 'axios';
import SizeOptions from './SizeOptions.jsx';
import QuantityOptions from './QuantityOptions.jsx';
import { TOKEN } from '../../../../config.js';

class AddToCart extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedSizeSku: null,
      stock: null,
      selectedQuantity: null,
    };
    this.onSelectSize = this.onSelectSize.bind(this);
    this.onSelectQuantity = this.onSelectQuantity.bind(this);
    this.onAddToCart = this.onAddToCart.bind(this);
  }

  onSelectSize(selectedSizeSku) {
    const selectedStock = this.props.skus[selectedSizeSku].quantity;
    this.setState({
      selectedSizeSku,
      stock: selectedStock,
      selectedQuantity: 1,
      displayInstructions: false,
    });
  }

  onSelectQuantity(quantity) {
    this.setState({ selectedQuantity: quantity });
  }

  onAddToCart(e) {
    const { selectedSizeSku, selectedQuantity } = this.state;
    const url = `${this.props.url}/cart`;
    e.preventDefault();
    if (!this.state.selectedSizeSku) {
      this.setState({ displayInstructions: true });
    } else {
      console.log('Added To Cart');
      for (let i = 0; i < selectedQuantity; i++) {
        axios
          .post(url, { sku_id: selectedSizeSku }, { headers: { Authorization: TOKEN } })
          .catch(console.error);
      }
    }
  }

  render() {
    return (
      <div className='addToCartContainer'>
        <form>
          <div hidden={!this.state.displayInstructions}>Please select size</div>
          <SizeOptions onSelectSize={this.onSelectSize} skus={this.props.skus} />
          <QuantityOptions
            onSelectQuantity={this.onSelectQuantity}
            stock={this.state.stock}
            selectedSizeSku={this.state.selectedSizeSku}
            selectedQuantity={this.state.selectedQuantity}
          />
        </form>
        <button onClick={this.onAddToCart} type='submit'>
          Add to Cart
        </button>
      </div>
    );
  }
}

export default AddToCart;
