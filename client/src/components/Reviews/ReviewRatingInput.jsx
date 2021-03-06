/* eslint-disable react/prop-types */
/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import React from 'react';

import star from '../Shared/stars/star.svg';
import starOutline from '../Shared/stars/star-outline.svg';

const ReviewRatingInput = ({ updateStarRating, rating }) => (
  <React.Fragment>
    <span>Overall Rating*</span>
    <div className='reviewAllStarsInputContainer'>
      {[1, 2, 3, 4, 5].map((n) => (
        <div className='reviewStarInputContainer'>
          <img
            src={rating >= n ? star : starOutline}
            className='starIcon reviewInputStar'
            alt='star'
            key={n}
            onClick={() => updateStarRating(n)}
          />
        </div>
      ))}
    </div>
  </React.Fragment>
);

export default ReviewRatingInput;
