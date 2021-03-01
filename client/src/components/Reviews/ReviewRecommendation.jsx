/* eslint-disable react/prop-types */
import React from 'react';

const ReviewRecommendation = ({ review }) => (
  <div>
    {review.recommend && (
      <div className='reviewRecommendLine'>
        <i className='fas fa-check' />
        <div>I recommend this product</div>
      </div>
    )}
  </div>
);

export default ReviewRecommendation;
