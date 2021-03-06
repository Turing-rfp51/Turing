import React from 'react';
import ThumbnailScroll from './ThumbnailScroll.jsx';

const ImageModal = ({ expanded }) => {
  if (expanded) {
    return <div onClick={props.toggleModal}>ImageModalHere</div>;
  }
  return null;
};

export default ImageModal;
