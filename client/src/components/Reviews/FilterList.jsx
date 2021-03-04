/* eslint-disable react/prop-types */
import React from 'react';
import FilterByStar from './FilterByStar.jsx';

const FilterList = ({ metadata }) => (
  <div className='reviewFilterBarsContainer'>
    <FilterByStar n={5} metadata={metadata} />
    <FilterByStar n={4} metadata={metadata} />
    <FilterByStar n={3} metadata={metadata} />
    <FilterByStar n={2} metadata={metadata} />
    <FilterByStar n={1} metadata={metadata} />
  </div>
);

export default FilterList;
