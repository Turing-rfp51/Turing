/* eslint-disable react/prop-types */
import React from 'react';

const ReviewRatingBar = ({ n, metadata }) => (
  <div className='reviewSingleFilterBar'>
    <div className='reviewFilterBackgroundBar' />
    <div
      className='reviewFilterForegroundBar'
      style={{
        width: `${Math.round(
          (+(metadata.ratings[n] || 0) /
            (+(metadata.recommended.true || 0) + +(metadata.recommended.false || 0))) *
            100
        ).toString()}%`,
      }}
    />
  </div>
);

export default ReviewRatingBar;
