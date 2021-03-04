/* eslint-disable react/prop-types */
import React from 'react';

const ProductBreakdownBar = ({ char, avg, min, max }) => (
  <div className='reviewCharacteristicContainer'>
    <div className='reviewCharacteristicBarTitle'>{char}</div>
    <div className='reviewCharacteristicBarContainer'>
      <div className='reviewCharacteristicBarBackground' />
      <div
        className='reviewCharacteristicBarForeground'
        style={{ left: `${Math.round(avg * 10).toString()}%` }}
      />
    </div>
    <div className='reviewCharacteristicMinMax'>
      <span>{min}</span>
      <span>{max}</span>
    </div>
  </div>
);

export default ProductBreakdownBar;
