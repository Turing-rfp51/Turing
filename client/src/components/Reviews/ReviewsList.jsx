/* eslint-disable react/prop-types */
import React from 'react';
import ReviewListItem from './ReviewListItem.jsx';
import ReviewsSortDropdown from './ReviewsSortDropdown.jsx';

const ReviewsList = ({ reviews, updateSortBy }) => (
  <div className='reviewListContainer'>
    <ReviewsSortDropdown updateSortBy={updateSortBy} />
    {reviews.length > 0 && reviews.map((r) => <ReviewListItem review={r} key={r.review_id} />)}
  </div>
);

export default ReviewsList;
