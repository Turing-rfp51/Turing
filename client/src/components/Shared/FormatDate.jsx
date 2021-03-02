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

const FormatDate = ({ date }) => (
  <div>
    {date.replace(
      /(\d+)-\d+-(\d+).+/gi,
      `${months[+date.match(/-\d\d-/gi)[0].slice(1, 3) - 1]} $2, $1`
    )}
  </div>
);

export default FormatDate;
