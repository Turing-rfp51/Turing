/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable react/prop-types */
import React from 'react';
import { v4 as uuid } from 'uuid';

const ReviewStarRating = ({ review }) => (
  <div>
    {Array.apply(1, Array(review.rating)).map(() => (
      <i className='fas fa-star' key={uuid()} />
    ))}

    {Array.apply(1, Array(5 - review.rating)).map(() => (
      <i className='far fa-star' key={uuid()} />
    ))}
  </div>
);

export default ReviewStarRating;
