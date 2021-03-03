/* eslint-disable react/prop-types */
import React from 'react';

const ReviewResponse = ({ review }) => (
  <div className='reviewResponseContainer'>
    <div className='reviewResponseFromSellerText'>Response from Seller:</div>
    <p className='reviewResponseBody'>{review.response}</p>
  </div>
);

export default ReviewResponse;
