/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable react/prop-types */
import React from 'react';
import { v4 as uuid } from 'uuid';
import star from '../Shared/stars/star.svg';
import starOutline from '../Shared/stars/star-outline.svg';

const ReviewStarRating = ({ review }) => (
  <div>
    {Array.apply(1, Array(review.rating)).map(() => (
      <img src={star} className='starIconSmall' alt='star' key={uuid()} />
    ))}

    {Array.apply(1, Array(5 - review.rating)).map(() => (
      <img src={starOutline} className='starIconSmall' alt='star' key={uuid()} />
    ))}
  </div>
);

export default ReviewStarRating;
