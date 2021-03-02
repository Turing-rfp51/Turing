/* eslint-disable react/prop-types */
import React from 'react';
import ReviewStarRating from './ReviewStarRating.jsx';
import ReviewDateFormatted from './ReviewDateFormatted.jsx';

const ReviewHeader = ({ review }) => (
  <div className='reviewHeader'>
    <ReviewStarRating review={review} />
    <div className='reviewDateAndUser'>
      <div className='reviewUsername'>{review.reviewer_name}</div>
      <ReviewDateFormatted review={review} />
    </div>
  </div>
);

export default ReviewHeader;
