/* eslint-disable react/prop-types */
/* eslint-disable prettier/prettier */
import React from 'react';

const QuantityOptions = ({selectedSizeSku, onSelectQuantity, stock, selectedQuantity}) => {
  let options, num, selected;
  if (stock > 15) {
    num = 15;
  } else {
    num = stock;
  }
  if (!selectedSizeSku) {
    options = ['-'];
    selected = '-';
  } else {
    options = [...Array(num).keys()].map((n) => n + 1)
    selected = selectedQuantity;
  }
  return (<select
    value={selected}
    disabled={!selectedSizeSku}
    onChange={(e) => onSelectQuantity(e.target.value)}
    >
      {options.map((option) => <option key={option}>{option}</option>)}
    </select>
  )
}

export default QuantityOptions;