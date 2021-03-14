/* eslint-disable camelcase */
/* eslint-disable class-methods-use-this */
/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable react/prop-types */
/* eslint-disable react/destructuring-assignment */
/* eslint-disable prettier/prettier */
import React from 'react';
import axios from 'axios';
import AddToCart from './AddToCart.jsx';
import Header from './Header.jsx';
import StyleSelector from './StyleSelector.jsx';
import ImagePreview from './ImagePreview.jsx';
import Description from './Description.jsx';
import AverageStarRating from '../Shared/AverageStarRating.jsx';
import { TOKEN } from '../../../../config.js';

class Overview extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      url: `https://app-hrsei-api.herokuapp.com/api/fec2/hr-rfp`,
      styles: null,
      info: { name: null, category: null, description: null },
      selectedStyle: { skus: null, original_price: null, sale_price: null },
      metadata: {},
      reviewNumber: 0,
    };
    this.selectStyle = this.selectStyle.bind(this);
    this.getTotalReviews = this.getTotalReviews.bind(this);
  }

  componentDidMount() {
    let url = `${this.state.url}/products/${this.props.productId}`;

    axios
      .get(url, { headers: { Authorization: TOKEN } })
      .then(({ data: { name, category, description } }) =>
        this.setState({
          info: {
            name,
            category,
            description,
          },
        })
      )
      .catch((err) => console.log(err));

    url += `/styles`;

    axios
      .get(url, { headers: { Authorization: TOKEN } })
      .then(({ data: { results } }) => {
        const styles = [];
        results.forEach(({ name, skus, original_price, sale_price, photos, style_id }) => {
          styles.push({ name, skus, original_price, sale_price, photos, style_id });
        });
        return styles;
      })
      .then((styles) => this.setState({ styles }))
      .then(() => this.selectStyle(0))
      .catch((err) => console.log(err));
    this.getMetadata();
  }

  getMetadata() {
    axios
      .get(
        `https://app-hrsei-api.herokuapp.com/api/fec2/hr-rfp/reviews/meta?product_id=${this.props.productId}`,
        { headers: { Authorization: TOKEN } }
      )
      .then((obj) => {
        this.setState({ metadata: obj.data });
      })
      .catch((err) => console.error(err))
      .then(this.getTotalReviews);
  }

  getTotalReviews() {
    const { metadata } = this.state;
    let total = 0;
    total += +metadata?.recommended?.true;
    total += +metadata?.recommended?.false;
    this.setState({ reviewNumber: total });
  }

  selectStyle(ind) {
    this.setState((state) => ({ selectedStyle: state.styles[ind] }));
  }

  scrollClickHandler() {
    const reviews = document.getElementById('reviewsContainer');
    reviews.scrollIntoView({ behavior: 'smooth' });
  }

  render() {
    const { name, category, description } = this.state.info;
    const { original_price, sale_price, skus, photos } = this.state.selectedStyle;
    const { styles, selectedStyle, url, metadata, reviewNumber } = this.state;
    const { postInteraction } = this.props;
    return (
      <div className='overviewBody' onClick={(event) => postInteraction(event, 'overview')}>
        <div className='infoStyleAdd'>
          <span className='overviewHeaderContainer'>
            <Header name={name} category={category} price={original_price} salePrice={sale_price} />
            <div className='starsContainer' onClick={this.scrollClickHandler}>
              {metadata.recommended && <AverageStarRating metadata={metadata} inOverview />}
              {reviewNumber > 0 ? (
                <div className='overviewshowAllReviews'>{`Read all ${reviewNumber} reviews.`}</div>
              ) : null}
            </div>
          </span>
          <StyleSelector
            styles={styles}
            selectedStyle={selectedStyle}
            selectStyle={this.selectStyle}
          />
          <AddToCart skus={skus} url={url} />
          <Description description={description} />
        </div>
        <ImagePreview photos={photos} />
      </div>
    );
  }
}

export default Overview;
