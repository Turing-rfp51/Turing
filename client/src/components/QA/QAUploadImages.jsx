import React from 'react';

const QAUploadImages = ({ photos, loadPhotos }) => (
  <React.Fragment>
    <input id='nrmPhotoUpload' type='file' accept='image/*' onChange={loadPhotos} />
    <div className='qaUploadedImagesContainer'>
      {photos[0] && (
        <img src={photos[0]} className='qaUploadImage' id='qaUploadImage0' alt='product' />
      )}
      {photos[1] && (
        <img src={photos[1]} className='qaUploadImage' id='qaUploadImage1' alt='product' />
      )}
      {photos[2] && (
        <img src={photos[2]} className='qaUploadImage' id='qaUploadImage2' alt='product' />
      )}
      {photos[3] && (
        <img src={photos[3]} className='qaUploadImage' id='qaUploadImage3' alt='product' />
      )}
      {photos[4] && (
        <img src={photos[4]} className='qaUploadImage' id='qaUploadImage4' alt='product' />
      )}
    </div>
  </React.Fragment>
);

export default QAUploadImages;
