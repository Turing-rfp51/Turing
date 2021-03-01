/* eslint-disable react/prop-types */
import React from 'react';
import RatingSummary from './RatingSummary.jsx';
import RatingBreakdown from './RatingBreakdown.jsx';
import ProductBreakdown from './ProductBreakdown.jsx';

const ReviewsBreakdown = ({ reviews }) => (
  <div className='ReviewsBreakdownContainer'>
    <RatingSummary />
    <RatingBreakdown />
    <ProductBreakdown />
  </div>
);

export default ReviewsBreakdown;
