/* eslint-disable react/prop-types */
import React from 'react';

const Price = ({ price, salePrice }) => {
  if (salePrice > 0) {
    return (
      <>
        <h4>{salePrice}</h4>
        <h4>{price}</h4>
      </>
    );
  }
  return <h4>{price}</h4>;
};

export default Price;
