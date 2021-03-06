/* eslint-disable react/prop-types */
import React from 'react';

const Description = ({ description }) => {
  if (description) {
    return <div>{description}</div>;
  }
  return null;
};

export default Description;
