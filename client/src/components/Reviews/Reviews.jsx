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
      sortMethod: 'relevant',
      numberToDisplay: 2
    }

    this.getReviews = this.getReviews.bind(this);
    this.updateSortBy = this.updateSortBy.bind(this);
    this.showMoreReviews = this.showMoreReviews.bind(this);
  }

  componentDidMount() {
    this.getReviews()
  }

  getReviews() {
    axios
      .get(`https://app-hrsei-api.herokuapp.com/api/fec2/hr-rfp/reviews?count=30&product_id=${this.props.productId}&sort=${this.state.sortMethod}`, { headers: { Authorization: TOKEN } })
      .then((obj) => {
        this.setState({reviews: obj.data.results})
        console.log(obj.data.results)
      })
      .catch((err) => console.error(err));
  };

  updateSortBy(method) {
    this.setState({sortMethod: method}, () => this.getReviews())
  };

  showMoreReviews() {
    this.setState(prevState => ({numberToDisplay: prevState.numberToDisplay + 2}), )
  }

  render() {
    return (
      <div className='reviewsModuleContainer'>
        <ReviewsBreakdown reviews={this.state.reviews}/>
        <ReviewsList reviews={this.state.reviews.slice(0, this.state.numberToDisplay)} updateSortBy={this.updateSortBy} showMoreReviews={this.showMoreReviews}/>
      </div>
    )
  }
}

export default Reviews;
