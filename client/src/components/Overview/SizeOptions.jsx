/* eslint-disable react/prop-types */
/* eslint-disable prettier/prettier */
import React from 'react';

const SizeOptions = ({skus, onSelectSize}) => {
  if (!skus) {
    return null;
  }
  const keys = Object.keys(skus);
  let inStock = false;
  const options = [];

  keys.forEach((sku) => {
    if (skus[sku].quantity > 0) {
      inStock = true;
      options.push({size: skus[sku].size, sku});
    }
  });

  const onSelect = (e) => {
    const selectedSizeSku = e.target[e.target.selectedIndex].id;
    onSelectSize(selectedSizeSku);
  }

  return (
    inStock
      ? (<select onChange={onSelect} defaultValue=''>
        <option disabled hidden value=''>Select Size</option>
        {options.map((option) => <option key={option.sku} id={option.sku}>{option.size}</option>)}
      </select>)
      : (<select disabled><option>OUT OF STOCK</option></select>)
  )
}

export default SizeOptions;