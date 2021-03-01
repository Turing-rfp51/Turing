/* eslint-disable react/prop-types */
import React from 'react';

const months = [
  'January',
  'February',
  'March',
  'April',
  'May',
  'June',
  'July',
  'August',
  'September',
  'October',
  'November',
  'December',
];

const ReviewDateFormatted = ({ review }) => (
  <div>
    {review.date.replace(
      /(\d+)-\d+-(\d+).+/gi,
      `${months[review.date.match(/-\d\d-/gi)[0].slice(1, 2)]} $2, $1`
    )}
  </div>
);

export default ReviewDateFormatted;
