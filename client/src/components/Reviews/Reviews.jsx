/* eslint-disable react/destructuring-assignment */
/* eslint-disable prettier/prettier */
/* eslint-disable react/prefer-stateless-function */
/* eslint-disable func-names */
import React from 'react';
import axios from 'axios';

import ReviewsBreakdown from './ReviewsBreakdown.jsx';
import ReviewsList from './ReviewsList.jsx';

const { TOKEN } = require('../../../../config.js');

const productId = 17762; // will likely come in as props. Only hardcoded for now

class Reviews extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      reviews: []
    }
  }

  componentDidMount() {
    this.initializeReviews()
  }

  initializeReviews() {
    axios
      .get(`https://app-hrsei-api.herokuapp.com/api/fec2/hr-rfp/reviews?product_id=${productId}`, { headers: { Authorization: TOKEN } })
      .then((obj) => {
        this.setState({reviews: obj.data.results})
        console.log(obj)
      })
      .catch((err) => console.error(err));
  };

  render() {
    return (
      <div>
        {this.state.reviews.map(r => <div key={r.review_id}>{r.summary}</div>)}
        <ReviewsList />
        <ReviewsBreakdown />
      </div>
    )
  }
}

export default Reviews;
