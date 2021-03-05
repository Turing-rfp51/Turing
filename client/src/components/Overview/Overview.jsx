/* eslint-disable react/prop-types */
/* eslint-disable react/destructuring-assignment */
/* eslint-disable prettier/prettier */
import React from 'react';
import axios from 'axios';
import AddToCart from './AddToCart.jsx';
import Header from './Header.jsx';
import StyleSelector from './StyleSelector.jsx'
import ImagePreview from './ImagePreview.jsx'
import {TOKEN} from '../../../../config.js'

class Overview extends React.Component {
  constructor(props) {
    super(props)
    this.state ={
      url: `https://app-hrsei-api.herokuapp.com/api/fec2/hr-rfp`,
      styles: null,
      info: {name: null, category: null, description: null},
      selectedStyle: {skus: null, original_price: null, sale_price: null}
    }
    this.selectStyle = this.selectStyle.bind(this);
  }

  componentDidMount () {
    let url = `${this.state.url}/products/${this.props.productId}`

    axios.get(url, {headers: {Authorization: TOKEN}})
      .then((data) => this.setState({info: data.data}))
      .catch((err) => console.log(err));

    url += `/styles`;

    axios.get(url, {headers: {Authorization: TOKEN}})
      .then((data) => this.setState({styles: data.data.results}))
      .then(() => this.selectStyle(0))
      .catch((err) => console.log(err));
  }

  selectStyle (ind) {
    this.setState((state) => ({selectedStyle: state.styles[ind]}))
  }

  render () {
    return (<>
    <Header
      name={this.state.info.name}
      category={this.state.info.category}
      description={this.state.info.description}
      price={this.state.selectedStyle.original_price}
      salePrice={this.state.selectedStyle.sale_price}
    />
    <StyleSelector
      styles={this.state.styles}
      selectedStyleName={this.state.selectedStyle.name}
      selectStyle={this.selectStyle}
    />
    <AddToCart
      skus={this.state.selectedStyle.skus}
      url={this.state.url}/>
    <ImagePreview/>
    </>);
  }
}

export default Overview;
