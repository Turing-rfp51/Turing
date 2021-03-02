/* eslint-disable react/prop-types */
import React from 'react';

const ReviewResponse = ({ review }) => (
  <div className='reviewResponseContainer'>
    <div>Response from Seller:</div>
    <p>{review.response}</p>
  </div>
);

export default ReviewResponse;
