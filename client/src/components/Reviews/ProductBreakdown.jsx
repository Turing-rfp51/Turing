/* eslint-disable react/prop-types */
import React from 'react';
import ProductBreakdownBar from './ProductBreakdownBar.jsx';

const ProductBreakdown = ({ metadata }) => (
  <div className='reviewProductBreakdownContainer'>
    {metadata.characteristics.Size && (
      <ProductBreakdownBar
        char='Size'
        avg={metadata.characteristics.Size.value}
        min='Too Small'
        max='Too Big'
      />
    )}
    {metadata.characteristics.Width && (
      <ProductBreakdownBar
        char='Width'
        avg={metadata.characteristics.Width.value}
        min='Too Narrow'
        max='Too Wide'
      />
    )}
    {metadata.characteristics.Comfort && (
      <ProductBreakdownBar
        char='Comfort'
        avg={metadata.characteristics.Comfort.value}
        min='Uncomfortable'
        max='Perfect'
      />
    )}
    {metadata.characteristics.Quality && (
      <ProductBreakdownBar
        char='Quality'
        avg={metadata.characteristics.Quality.value}
        min='Poor'
        max='Perfect'
      />
    )}
    {metadata.characteristics.Length && (
      <ProductBreakdownBar
        char='Length'
        avg={metadata.characteristics.Length.value}
        min='Runs Short'
        max='Runs Long'
      />
    )}
    {metadata.characteristics.Fit && (
      <ProductBreakdownBar
        char='Fit'
        avg={metadata.characteristics.Fit.value}
        min='Runs Tight'
        max='Runs Long'
      />
    )}
  </div>
);

export default ProductBreakdown;
