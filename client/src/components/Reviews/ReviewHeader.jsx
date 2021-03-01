/* eslint-disable react/prop-types */
import React from 'react';

const ReviewHeader = ({ review }) => (
  <div className='reviewHeader'>
    <div>{review.rating}</div>
    <div className='reviewDateAndUser'>
      {/* check if user is verified */}
      <div>{review.reviewer_name}</div>
      <div>{review.date}</div>
    </div>
  </div>
);

export default ReviewHeader;
