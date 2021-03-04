/* eslint-disable react/prop-types */
import React from 'react';
import FilterByStar from './FilterByStar.jsx';

const FilterList = ({ metadata, addOrRemoveFilters }) => (
  <div className='reviewFilterBarsContainer'>
    <FilterByStar n={5} metadata={metadata} addOrRemoveFilters={addOrRemoveFilters} />
    <FilterByStar n={4} metadata={metadata} addOrRemoveFilters={addOrRemoveFilters} />
    <FilterByStar n={3} metadata={metadata} addOrRemoveFilters={addOrRemoveFilters} />
    <FilterByStar n={2} metadata={metadata} addOrRemoveFilters={addOrRemoveFilters} />
    <FilterByStar n={1} metadata={metadata} addOrRemoveFilters={addOrRemoveFilters} />
  </div>
);

export default FilterList;
