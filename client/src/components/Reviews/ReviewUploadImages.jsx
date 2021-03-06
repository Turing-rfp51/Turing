/* eslint-disable react/prop-types */
import React from 'react';

const ReviewUploadImages = ({ photoURLs, loadPhotos }) => (
  <React.Fragment>
    <input id='nrmPhotoUpload' type='file' accept='image/*' onChange={loadPhotos} />
    <div className='reviewUploadedImagesContainer'>
      {photoURLs[0] && (
        <img
          src={photoURLs[0]}
          className='reviewUploadImage'
          id='reviewUploadImage0'
          alt='product'
        />
      )}
      {photoURLs[1] && (
        <img
          src={photoURLs[1]}
          className='reviewUploadImage'
          id='reviewUploadImage1'
          alt='product'
        />
      )}
      {photoURLs[2] && (
        <img
          src={photoURLs[2]}
          className='reviewUploadImage'
          id='reviewUploadImage2'
          alt='product'
        />
      )}
      {photoURLs[3] && (
        <img
          src={photoURLs[3]}
          className='reviewUploadImage'
          id='reviewUploadImage3'
          alt='product'
        />
      )}
      {photoURLs[4] && (
        <img
          src={photoURLs[4]}
          className='reviewUploadImage'
          id='reviewUploadImage4'
          alt='product'
        />
      )}
    </div>
  </React.Fragment>
);

export default ReviewUploadImages;
