/* eslint-disable react/prop-types */
import React from 'react';
import FilterList from './FilterList.jsx';
import ReviewFilterHeader from './ReviewFilterHeader.jsx';

const RatingBreakdown = ({ metadata, addOrRemoveFilters, clearFilters, starFilters }) => (
  <div className='reviewRatingBreakdownContainer'>
    <div className='reviewRatingBreakdownText'>Rating Breakdown</div>
    {starFilters.length > 0 && (
      <ReviewFilterHeader clearFilters={clearFilters} starFilters={starFilters} />
    )}
    <FilterList
      metadata={metadata}
      addOrRemoveFilters={addOrRemoveFilters}
      starFilters={starFilters}
    />
    <div className='reviewRecommendationPercentage'>
      {Math.round(
        (+(metadata.recommended.true || 0) /
          (+(metadata.recommended.true || 0) + +(metadata.recommended.false || 0))) *
          100
      )}
      % Recommend this Product
    </div>
  </div>
);

export default RatingBreakdown;
