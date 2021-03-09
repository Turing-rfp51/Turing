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
      .then(({data: {name, category, description}}) => this.setState({info: {
        name,
        category,
        description
      }}))
      .catch((err) => console.log(err));

    url += `/styles`;

    axios.get(url, {headers: {Authorization: TOKEN}})
      .then(({data: {results}}) => this.setState({styles: results}))
      .then(() => this.selectStyle(0))
      .catch((err) => console.log(err));
  }

  selectStyle (ind) {
    this.setState((state) => ({selectedStyle: state.styles[ind]}))
  }

  render () {
    const {name, category, description} = this.state.info;
    const {original_price, sale_price, skus, photos} = this.state.selectedStyle;
    const {styles, selectedStyle, url} = this.state;
    return (<div className='overviewBody'>
      <div className='infoStyleAdd'>
        <Header
          name={name}
          category={category}
          description={description}
          price={original_price}
          salePrice={sale_price}
        />
        <StyleSelector
          styles={styles}
          selectedStyle={selectedStyle}
          selectStyle={this.selectStyle}
        />
        <AddToCart
          skus={skus}
          url={url}/>
      </div>
      <ImagePreview
        photos={photos}
      />
    </div>);
  }
}

export default Overview;
