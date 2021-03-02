/* eslint-disable jsx-a11y/label-has-for */
/* eslint-disable jsx-a11y/label-has-associated-control */
/* eslint-disable react/prop-types */
import React from 'react';

const ReviewsSortDropdown = ({ updateSortBy }) => (
  <form>
    <label htmlFor='reviewSort'>Sort on</label>
    <select id='reviewSort'>
      <option>Helpful</option>
      <option>Newest</option>
      <option>Relevant</option>
    </select>
  </form>
);

export default ReviewsSortDropdown;
