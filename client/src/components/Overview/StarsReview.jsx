/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import React from 'react';

const StarsReview = () => (
  <div className='starsContainer' onClick={ClickHandler}>
    Reviews and stars here
  </div>
);
const ClickHandler = () => {
  const reviews = document.getElementById('reviewsContainer');
  reviews.scrollIntoView({ behavior: 'smooth' });
};

export default StarsReview;
