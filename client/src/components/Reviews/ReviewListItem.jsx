/* eslint-disable react/prop-types */
import React from 'react';

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
    {review.response && (
      <div>
        <h4>Response from Seller:</h4>
        <p>{review.response}</p>
      </div>
    )}
  </div>
);

export default ReviewsList;
