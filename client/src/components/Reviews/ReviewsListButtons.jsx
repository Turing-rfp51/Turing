/* eslint-disable react/prop-types */
import React from 'react';

const ReviewsListButtons = ({
  showMoreReviews,
  numOfReviews,
  toggleShowNewReviewModal,
  totalLength,
}) => (
  <React.Fragment>
    {numOfReviews !== 0 && numOfReviews < totalLength && (
      <button type='button' className='reviewsButton' onClick={showMoreReviews}>
        SHOW MORE REVIEWS
      </button>
    )}
    <button type='button' className='reviewsButton' onClick={toggleShowNewReviewModal}>
      + ADD NEW REVIEW
    </button>
  </React.Fragment>
);

export default ReviewsListButtons;
