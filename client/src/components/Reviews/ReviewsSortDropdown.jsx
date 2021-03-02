/* eslint-disable jsx-a11y/label-has-for */
/* eslint-disable jsx-a11y/label-has-associated-control */
/* eslint-disable react/prop-types */
import React from 'react';

const ReviewsSortDropdown = ({ updateSortBy }) => (
  <form>
    <label htmlFor='reviewSortDropdown'>Sort on</label>
    <select
      id='reviewSortDropdown'
      name='sortMethod'
      onChange={(e) => updateSortBy(e.target.value)}
    >
      <option value='helpful'>Helpful</option>
      <option value='newest'>Newest</option>
      <option value='relevant'>Relevant</option>
    </select>
  </form>
);

export default ReviewsSortDropdown;
