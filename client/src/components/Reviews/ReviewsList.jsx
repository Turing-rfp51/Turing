/* eslint-disable react/prop-types */
import React from 'react';
import ReviewListItem from './ReviewListItem.jsx';

const ReviewsList = ({ reviews, getReviews }) => (
  <div className='reviewListContainer'>
    {reviews.length > 0 && reviews.map((r) => <ReviewListItem review={r} key={r.review_id} />)}
  </div>
);

export default ReviewsList;
