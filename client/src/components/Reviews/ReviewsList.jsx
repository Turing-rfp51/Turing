/* eslint-disable react/prop-types */
import React from 'react';

const ReviewsList = ({ reviews }) => (
  <div>{reviews.length > 0 && reviews.map((r) => <div key={r.review_id}>{r.rating}</div>)}</div>
);

export default ReviewsList;
