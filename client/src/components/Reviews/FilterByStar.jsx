/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable react/prop-types */
import React from 'react';
import ReviewRatingBar from './ReviewRatingBar.jsx';

const FilterByStar = ({ n, metadata, addOrRemoveFilters, starFilters }) => (
  <div
    onClick={() => addOrRemoveFilters(n)}
    className={
      starFilters.includes(n)
        ? 'reviewActiveFilter reviewSingleFilterContainer'
        : 'reviewSingleFilterContainer'
    }
  >
    <span className='reviewFilterLabel'>
      <span className='reviewFilterLabelStarNumber'>{n}</span>
      <span className='reviewFilterLabelStarText'>Star{n !== 1 && 's'}</span>
    </span>
    <ReviewRatingBar n={n} metadata={metadata} />
    <span className='reviewFilterCount'>{metadata.ratings[n] || 0} </span>
  </div>
);

export default FilterByStar;
