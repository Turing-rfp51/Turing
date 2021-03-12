/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-static-element-interactions */
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
import NewReviewModal from './NewReviewModal.jsx';

class Reviews extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      reviews: [],
      metadata: {},
      sortMethod: 'relevant',
      starFilters: [],
      filteredReviews: [],
      productName: '',
      showNewReviewModal: false,
    };

    this.getReviews = this.getReviews.bind(this);
    this.getMetadata = this.getMetadata.bind(this);
    this.updateSortBy = this.updateSortBy.bind(this);
    this.toggleShowNewReviewModal = this.toggleShowNewReviewModal.bind(this);
    this.addOrRemoveFilters = this.addOrRemoveFilters.bind(this);
    this.filterReviews = this.filterReviews.bind(this);
    this.clearFilters = this.clearFilters.bind(this);
  }

  componentDidMount() {
    this.getReviews();
    this.getMetadata();
    this.getProductName();
  }

  getReviews() {
    axios
      .get(
        `https://app-hrsei-api.herokuapp.com/api/fec2/hr-rfp/reviews?count=500&product_id=${this.props.productId}&sort=${this.state.sortMethod}`,
        { headers: { Authorization: this.props.TOKEN } }
      )
      .then((obj) => {
        this.setState({ reviews: obj.data.results });
      })
      .then(this.state.starFilters.length > 0 && this.filterReviews)
      .catch((err) => console.error(err));
  }

  getMetadata() {
    axios
      .get(
        `https://app-hrsei-api.herokuapp.com/api/fec2/hr-rfp/reviews/meta?product_id=${this.props.productId}`,
        { headers: { Authorization: this.props.TOKEN } }
      )
      .then((obj) => {
        this.setState({ metadata: obj.data });
      })
      .catch((err) => console.error(err));
  }

  getProductName() {
    axios
      .get(`https://app-hrsei-api.herokuapp.com/api/fec2/hr-rfp/products/${this.props.productId}`, {
        headers: { Authorization: this.props.TOKEN },
      })
      .then((obj) => {
        this.setState({ productName: obj.data.name });
      })
      .catch((err) => console.error(err));
  }

  updateSortBy(method) {
    this.setState({ sortMethod: method }, () => this.getReviews());
  }

  toggleShowNewReviewModal() {
    const { showNewReviewModal } = this.state;
    this.setState({ showNewReviewModal: !showNewReviewModal });
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
    const { reviews, starFilters, searchedTerm } = this.state;

    const filtered = [];

    for (let i = 0; i < reviews.length; i++) {
      if (starFilters.includes(+reviews[i].rating)) {
        filtered.push(reviews[i]);
      }
    }

    if (searchedTerm) {
      this.filterBySearch(searchedTerm);
    }

    this.setState({ filteredReviews: filtered });
  }

  clearFilters() {
    this.setState({ starFilters: [] });
  }

  render() {
    const {
      metadata,
      reviews,
      filteredReviews,
      starFilters,
      showNewReviewModal,
      productName,
    } = this.state;
    const { postInteraction } = this.props;
    return (
      <div
        className='reviewsModuleContainer'
        onClick={(event) => postInteraction(event, 'reviews')}
      >
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
          reviews={starFilters.length > 0 ? filteredReviews : reviews}
          updateSortBy={this.updateSortBy}
          showMoreReviews={this.showMoreReviews}
          toggleShowNewReviewModal={this.toggleShowNewReviewModal}
          getReviews={this.getReviews}
        />
        {showNewReviewModal && (
          <NewReviewModal
            metadata={metadata}
            productName={productName}
            toggleShowNewReviewModal={this.toggleShowNewReviewModal}
            getReviews={this.getReviews}
            getMetadata={this.getMetadata}
          />
        )}
      </div>
    );
  }
}

export default Reviews;
