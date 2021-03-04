import React from 'react';
import FilterByStar from './FilterByStar.jsx';

const FilterList = () => (
  <React.Fragment>
    <FilterByStar n={5} />
    <FilterByStar n={4} />
    <FilterByStar n={3} />
    <FilterByStar n={2} />
    <FilterByStar n={1} />
  </React.Fragment>
);

export default FilterList;
