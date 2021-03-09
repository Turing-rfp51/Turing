/* eslint-disable react/prop-types */
import React from 'react';
import AverageStarRating from '../Shared/AverageStarRating.jsx';

const RatingSummary = ({ metadata }) => (
  <div className='ratingSummaryContainer'>
    <AverageStarRating metadata={metadata} />
    <div className='totalReviewCountText'>
      {+(metadata.recommended.true || 0) + +(metadata.recommended.false || 0)} Reviews
    </div>
  </div>
);

export default RatingSummary;
