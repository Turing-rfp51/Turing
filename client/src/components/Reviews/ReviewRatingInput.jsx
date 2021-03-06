/* eslint-disable react/prop-types */
/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import React from 'react';

import star from '../Shared/stars/star.svg';
import starOutline from '../Shared/stars/star-outline.svg';

const ratingLabels = ['', 'Poor', 'Fair', 'Average', 'Good', 'Great'];

const ReviewRatingInput = ({ updateStarRating, rating }) => (
  <React.Fragment>
    <div className='nrmRatingInputHeader'>
      <span>Overall Rating*</span>
      {rating > 0 && <span className='nrmSelectedCharLabel'>- {ratingLabels[rating]}</span>}
    </div>
    <div className='reviewAllStarsInputContainer'>
      {[1, 2, 3, 4, 5].map((n) => (
        <div className='reviewStarInputContainer' key={n}>
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
