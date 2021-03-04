import React from 'react';
import FilterList from './FilterList.jsx';

const RatingBreakdown = () => (
  <div className='reviewRatingBreakdownContainer'>
    <div className='reviewRatingBreakdownText'>Rating Breakdown</div>
    <div className='reviewFilterHeader'>Current Filters -------- Remove Filters</div>
    <FilterList />
    <div className='reviewRecommendationPercentage'>% Recommend this Product</div>
  </div>
);

export default RatingBreakdown;
