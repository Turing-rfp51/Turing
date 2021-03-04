/* eslint-disable react/prop-types */
import React from 'react';
import RatingSummary from './RatingSummary.jsx';
import RatingBreakdown from './RatingBreakdown.jsx';
import ProductBreakdown from './ProductBreakdown.jsx';

const ReviewsBreakdown = ({ reviews, metadata, addOrRemoveFilters }) => (
  <div className='ReviewsBreakdownContainer'>
    <RatingSummary reviews={reviews} metadata={metadata} />
    <RatingBreakdown metadata={metadata} addOrRemoveFilters={addOrRemoveFilters} />
    <ProductBreakdown />
  </div>
);

export default ReviewsBreakdown;
