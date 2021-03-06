/* eslint-disable react/prop-types */
import React from 'react';
import Price from './Price.jsx';
import Description from './Description.jsx';
import ShareAndStars from './ShareAndStars.jsx';

const Header = ({ name, category, price, salePrice, description }) => (
  <span className='overviewHeaderContainer'>
    <h3 className='productName'>{name}</h3>
    <h5 className='productCategory'>{`(${category})`}</h5>
    <Price price={price} salePrice={salePrice} />
    <Description description={description} />
    <ShareAndStars />
  </span>
);

export default Header;
