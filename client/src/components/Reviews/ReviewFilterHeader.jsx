/* eslint-disable react/prop-types */
import React from 'react';

const ReviewFilterHeader = ({ clearFilters, starFilters }) => (
  <div className='reviewFilterHeader'>
    <div>
      Current Star Filters:
      {starFilters.map((n) => (
        <span className='reviewFilterNumberLabel' key={n}>
          {n}
          {starFilters.indexOf(n) !== starFilters.length - 1 && ','}
        </span>
      ))}
    </div>
    <button className='reviewClearFiltersButton reviewsButton' type='button' onClick={clearFilters}>
      Clear Filters
    </button>
  </div>
);

export default ReviewFilterHeader;
