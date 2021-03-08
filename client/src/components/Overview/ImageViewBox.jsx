import React from 'react';
import ThumbnailScroll from './ThumbnailScroll.jsx';

const ImageViewBox = ({ photos, selectedIndex }) => (
  <>
    <div className='imageBox'>
      <img src={photos[selectedIndex].url} alt='' className='selectedImage' />
    </div>
    <ThumbnailScroll />
  </>
);

export default ImageViewBox;
