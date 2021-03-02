/* eslint-disable react/prop-types */
import React from 'react';
import ReviewStarRating from './ReviewStarRating.jsx';
import FormatDate from '../Shared/FormatDate.jsx';

const ReviewHeader = ({ review }) => (
  <div className='reviewHeader'>
    <ReviewStarRating review={review} />
    <div className='reviewDateAndUser'>
      <div className='reviewUsername'>{review.reviewer_name}</div>
      <FormatDate date={review.date} />
    </div>
  </div>
);

export default ReviewHeader;
