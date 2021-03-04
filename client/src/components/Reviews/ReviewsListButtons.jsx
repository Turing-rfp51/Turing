/* eslint-disable react/prop-types */
import React from 'react';

const ReviewsListButtons = ({ showMoreReviews, numOfReviews, addNewReview, totalLength }) => (
  <React.Fragment>
    {numOfReviews !== 0 && numOfReviews !== totalLength && (
      <button type='button' className='reviewsButton' onClick={showMoreReviews}>
        Show More Reviews
      </button>
    )}
    <button type='button' className='reviewsButton' onClick={addNewReview}>
      + Add New Review
    </button>
  </React.Fragment>
);

export default ReviewsListButtons;
