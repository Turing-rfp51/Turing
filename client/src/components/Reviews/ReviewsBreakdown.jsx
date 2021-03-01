/* eslint-disable react/prop-types */
import React from 'react';

const ReviewsBreakdown = ({ reviews }) => (
  <div>
    <div>{reviews.length > 0 && reviews.map((r) => <div key={r.review_id}>{r.rating}</div>)}</div>
  </div>
);

export default ReviewsBreakdown;
