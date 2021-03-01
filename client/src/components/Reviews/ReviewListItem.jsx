/* eslint-disable react/prop-types */
import React from 'react';
import ReviewResponse from './ReviewResponse.jsx';

const ReviewsList = ({ review }) => (
  <div className='reviewListItem'>
    <div className='reviewHeader'>
      <div>{review.rating}</div>
      <div className='reviewDateAndUser'>
        {/* check if user is verified */}
        <div>{review.reviewer_name}</div>
        <div>{review.date}</div>
      </div>
    </div>
    <h4>{review.summary}</h4>
    <p>{review.body}</p>
    <div>
      {review.photos.map((p) => (
        <img className='reviewImage' src={p.url} alt='product' key={p.id} />
      ))}
    </div>
    {review.recommend && <div>I recommend this product</div>}
    {review.response && <ReviewResponse review={review} />}
  </div>
);

export default ReviewsList;
