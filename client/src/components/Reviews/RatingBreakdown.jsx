/* eslint-disable react/prop-types */
import React from 'react';
import FilterList from './FilterList.jsx';

const RatingBreakdown = ({ metadata, addOrRemoveFilters }) => (
  <div className='reviewRatingBreakdownContainer'>
    <div className='reviewRatingBreakdownText'>Rating Breakdown</div>
    <div className='reviewFilterHeader'>Current Filters____________Remove Filters</div>
    <FilterList metadata={metadata} addOrRemoveFilters={addOrRemoveFilters} />
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
