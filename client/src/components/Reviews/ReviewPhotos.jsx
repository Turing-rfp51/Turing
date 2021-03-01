/* eslint-disable react/prop-types */
import React from 'react';

const reviewPhotos = ({ review }) => (
  <div>
    {review.photos.map((p) => (
      <img className='reviewImage' src={p.url} alt='product' key={p.id} />
    ))}
  </div>
);

export default reviewPhotos;
