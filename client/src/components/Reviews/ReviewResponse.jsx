/* eslint-disable react/prop-types */
import React from 'react';

const ReviewResponse = ({ review }) => (
  <div>
    <h4>Response from Seller:</h4>
    <p>{review.response}</p>
  </div>
);

export default ReviewResponse;
