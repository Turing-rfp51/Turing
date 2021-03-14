/* eslint-disable react/prop-types */
import React from 'react';
import Price from './Price.jsx';
import ShareButtons from './ShareButtons.jsx';

const Header = ({ name, category, price, salePrice }) => (
  <>
    <h3 className='productName'>{name}</h3>
    <h5 className='productCategory'>{`(${category})`}</h5>
    <Price price={price} salePrice={salePrice} />
    <ShareButtons />
  </>
);

export default Header;
