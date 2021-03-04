/* eslint-disable react/prop-types */
import React from 'react';
import FilterByStar from './FilterByStar.jsx';

const FilterList = ({ metadata, addOrRemoveFilters, starFilters }) => (
  <div className='reviewFilterBarsContainer'>
    <FilterByStar
      n={5}
      metadata={metadata}
      addOrRemoveFilters={addOrRemoveFilters}
      starFilters={starFilters}
    />
    <FilterByStar
      n={4}
      metadata={metadata}
      addOrRemoveFilters={addOrRemoveFilters}
      starFilters={starFilters}
    />
    <FilterByStar
      n={3}
      metadata={metadata}
      addOrRemoveFilters={addOrRemoveFilters}
      starFilters={starFilters}
    />
    <FilterByStar
      n={2}
      metadata={metadata}
      addOrRemoveFilters={addOrRemoveFilters}
      starFilters={starFilters}
    />
    <FilterByStar
      n={1}
      metadata={metadata}
      addOrRemoveFilters={addOrRemoveFilters}
      starFilters={starFilters}
    />
  </div>
);

export default FilterList;
