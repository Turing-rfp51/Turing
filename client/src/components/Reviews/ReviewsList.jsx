/* eslint-disable react/prop-types */
import React from 'react';
import ReviewListItem from './ReviewListItem.jsx';
import ReviewsSortDropdown from './ReviewsSortDropdown.jsx';
import ReviewsListButtons from './ReviewsListButtons.jsx';

const ReviewsList = ({ reviews, updateSortBy, showMoreReviews, addNewReview }) => (
  <div className='reviewListContainer'>
    {reviews.length > 0 && <ReviewsSortDropdown updateSortBy={updateSortBy} />}
    <div className='reviewListDisplay'>
      {reviews.length > 0 && reviews.map((r) => <ReviewListItem review={r} key={r.review_id} />)}
    </div>
    <ReviewsListButtons
      showMoreReviews={showMoreReviews}
      numOfReviews={reviews.length}
      addNewReview={addNewReview}
    />
  </div>
);

export default ReviewsList;
