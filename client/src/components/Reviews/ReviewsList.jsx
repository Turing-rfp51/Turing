/* eslint-disable react/prop-types */
import React from 'react';
import ReviewListItem from './ReviewListItem.jsx';
import ReviewsSortDropdown from './ReviewsSortDropdown.jsx';
import ReviewsListButtons from './ReviewsListButtons.jsx';

const ReviewsList = ({
  reviews,
  updateSortBy,
  showMoreReviews,
  toggleShowNewReviewModal,
  getReviews,
  totalLength,
}) => (
  <div className='reviewListContainer'>
    {reviews.length > 0 && <ReviewsSortDropdown updateSortBy={updateSortBy} />}
    <div className='reviewListDisplay'>
      {reviews.length > 0 &&
        reviews.map((r) => <ReviewListItem review={r} key={r.review_id} getReviews={getReviews} />)}
    </div>
    <ReviewsListButtons
      showMoreReviews={showMoreReviews}
      numOfReviews={reviews.length}
      toggleShowNewReviewModal={toggleShowNewReviewModal}
      totalLength={totalLength}
    />
  </div>
);

export default ReviewsList;
