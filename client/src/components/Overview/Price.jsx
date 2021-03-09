/* eslint-disable react/prop-types */
import React from 'react';

const Price = ({ price, salePrice }) => {
  if (salePrice > 0) {
    return (
      <div className='originalPrice'>
        <div className='salePrice'>{`$${salePrice}`}</div>
        <div className='oldPrice'>{`$${price}`}</div>
      </div>
    );
  }
  return <div className='originalPrice'>{`$${price}`}</div>;
};

export default Price;
