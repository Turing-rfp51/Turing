/* eslint-disable no-plusplus */
/* eslint-disable class-methods-use-this */
/* eslint-disable react/prop-types */
/* eslint-disable react/destructuring-assignment */
/* eslint-disable prettier/prettier */
/* eslint-disable react/prefer-stateless-function */
/* eslint-disable func-names */
import React from 'react';
import axios from 'axios';

import ReviewsBreakdown from './ReviewsBreakdown.jsx';
import ReviewsList from './ReviewsList.jsx';

const { TOKEN } = require('../../../../config.js');

class Reviews extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      reviews: [],
      metadata: {},
      sortMethod: 'relevant',
      numberToDisplay: 2,
      starFilters: [],
      filteredReviews: [],
    };

    this.getReviews = this.getReviews.bind(this);
    this.getMetadata = this.getMetadata.bind(this);
    this.updateSortBy = this.updateSortBy.bind(this);
    this.showMoreReviews = this.showMoreReviews.bind(this);
    this.addNewReview = this.addNewReview.bind(this);
    this.addOrRemoveFilters = this.addOrRemoveFilters.bind(this);
    this.filterReviews = this.filterReviews.bind(this);
    this.clearFilters = this.clearFilters.bind(this);
  }

  componentDidMount() {
    this.getReviews();
    this.getMetadata();
  }

  getReviews() {
    axios
      .get(
        `https://app-hrsei-api.herokuapp.com/api/fec2/hr-rfp/reviews?count=40&product_id=${this.props.productId}&sort=${this.state.sortMethod}`,
        { headers: { Authorization: TOKEN } }
      )
      .then((obj) => {
        this.setState({ reviews: obj.data.results });
        console.log(obj.data.results);
      })
      .then(this.state.starFilters.length > 0 && this.filterReviews)
      .catch((err) => console.error(err));
  }

  getMetadata() {
    axios
      .get(
        `https://app-hrsei-api.herokuapp.com/api/fec2/hr-rfp/reviews/meta?product_id=${this.props.productId}`,
        { headers: { Authorization: TOKEN } }
      )
      .then((obj) => {
        this.setState({ metadata: obj.data });
        console.log('data:', obj.data);
      })
      .catch((err) => console.error(err));
  }

  updateSortBy(method) {
    this.setState({ sortMethod: method }, () => this.getReviews());
  }

  showMoreReviews() {
    this.setState((prevState) => ({ numberToDisplay: prevState.numberToDisplay + 2 }));
  }

  addNewReview() {
    console.log('adding new review');
  }

  addOrRemoveFilters(n) {
    const { starFilters } = this.state;
    if (starFilters.includes(n)) {
      this.setState({ starFilters: starFilters.filter((x) => x !== n) }, this.filterReviews);
    } else {
      this.setState({ starFilters: [...starFilters, n] }, this.filterReviews);
    }
  }

  filterReviews() {
    const { reviews, starFilters } = this.state;

    const filtered = [];

    for (let i = 0; i < reviews.length; i++) {
      if (starFilters.includes(+reviews[i].rating)) {
        filtered.push(reviews[i]);
      }
    }

    this.setState({ filteredReviews: filtered });
  }

  clearFilters() {
    this.setState({ starFilters: [] });
  }

  render() {
    const { metadata, reviews, filteredReviews, starFilters, numberToDisplay } = this.state;
    return (
      <div className='reviewsModuleContainer'>
        {metadata.ratings && (
          <ReviewsBreakdown
            reviews={reviews}
            metadata={metadata}
            addOrRemoveFilters={this.addOrRemoveFilters}
            clearFilters={this.clearFilters}
            starFilters={starFilters}
          />
        )}
        <ReviewsList
          reviews={
            starFilters.length > 0
              ? filteredReviews.slice(0, numberToDisplay)
              : reviews.slice(0, numberToDisplay)
          }
          updateSortBy={this.updateSortBy}
          showMoreReviews={this.showMoreReviews}
          addNewReview={this.addNewReview}
          getReviews={this.getReviews}
          totalLength={starFilters.length > 0 ? filteredReviews.length : reviews.length}
        />
      </div>
    );
  }
}

export default Reviews;
