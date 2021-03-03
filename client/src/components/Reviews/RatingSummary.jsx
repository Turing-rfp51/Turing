/* eslint-disable react/prop-types */
import React from 'react';
import AverageStarRating from '../Shared/AverageStarRating.jsx';

const RatingSummary = ({ reviews, metadata }) => (
  <AverageStarRating reviews={reviews} metadata={metadata} />
);

export default RatingSummary;
