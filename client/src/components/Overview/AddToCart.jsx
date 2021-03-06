/* eslint-disable react/prop-types */
/* eslint-disable react/destructuring-assignment */
import React from 'react';
import SizeOptions from './SizeOptions.jsx';
import QuantityOptions from './QuantityOptions.jsx';

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
    e.preventDefault();
    if (!this.state.selectedSizeSku) {
      this.setState({ displayInstructions: true });
    } else {
      console.log('Added To Cart');
    }
    // Post Req Here...Need more info on it.
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
