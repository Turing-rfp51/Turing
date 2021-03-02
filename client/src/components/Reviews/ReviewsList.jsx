/* eslint-disable react/prop-types */
import React from 'react';
import ReviewListItem from './ReviewListItem.jsx';
import ReviewsSortDropdown from './ReviewsSortDropdown.jsx';
import ReviewsListButtons from './ReviewsListButtons.jsx';

const ReviewsList = ({ reviews, updateSortBy, showMoreReviews }) => (
  <div className='reviewListContainer'>
    <ReviewsSortDropdown updateSortBy={updateSortBy} />
    <div className='reviewListDisplay'>
      {reviews.length > 0 && reviews.map((r) => <ReviewListItem review={r} key={r.review_id} />)}
      <ReviewsListButtons showMoreReviews={showMoreReviews} />
    </div>
  </div>
);

export default ReviewsList;
