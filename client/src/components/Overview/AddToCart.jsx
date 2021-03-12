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
      buttonText: false,
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
      this.setState({ displayInstructions: 'showSizeInstructions' });
    } else {
      console.log('Added To Cart');
      for (let i = 0; i < selectedQuantity; i++) {
        axios
          .post(url, { sku_id: selectedSizeSku }, { headers: { Authorization: TOKEN } })
          .catch(console.error)
          .then(() => this.setState({ buttonText: 'Added to cart' }));
      }
    }
  }

  render() {
    const {
      displayInstructions,
      stock,
      selectedSizeSku,
      selectedQuantity,
      buttonText,
    } = this.state;
    const { skus } = this.props;
    return (
      <>
        <div className={`selectSizeText ${displayInstructions || ''}`}>Please select size</div>
        <div className='addToCartContainer'>
          <form className='cartMenus'>
            <SizeOptions onSelectSize={this.onSelectSize} skus={skus} />
            <QuantityOptions
              onSelectQuantity={this.onSelectQuantity}
              stock={stock}
              selectedSizeSku={selectedSizeSku}
              selectedQuantity={selectedQuantity}
            />
          </form>
          <button
            onClick={this.onAddToCart}
            type='submit'
            className={`addToCartButton ${buttonText ? 'addedToCart' : ''}`}
          >
            {buttonText || 'Add to Cart'}
          </button>
        </div>
      </>
    );
  }
}

export default AddToCart;
