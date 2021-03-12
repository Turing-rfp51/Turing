/* eslint-disable no-nested-ternary */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
import React from 'react';
import FB from './logos/FB.png';
import T from './logos/T.png';
import P from './logos/P.png';

const ShareButtons = () => (
  <div className='shareButtons'>
    <img src={FB} alt='' className='shareButton' onClick={() => openLink('F')} />
    <img src={T} alt='' className='shareButton' onClick={() => openLink('T')} />
    <img src={P} alt='' className='shareButton' onClick={() => openLink()} />
  </div>
);
const openLink = (site) =>
  site === 'F'
    ? window.open('https://facebook.com', '_blank')
    : site === 'T'
    ? window.open('https://twitter.com', '_blank')
    : window.open('https://pinterest.com', '_blank');
export default ShareButtons;
