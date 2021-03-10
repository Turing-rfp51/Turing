/* eslint-disable react/prop-types */
/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable react/no-array-index-key */
import React from 'react';

const ThumbnailScroll = ({ photos, selectInd, selectedIndex }) =>
  photos ? (
    <div className='thumbnailBox'>
      <div className='thumbnailScroll'>
        <div className='prevThumb' />
        {photos.map((photo, i) => (
          <div name={`thumb${i}`} className='thumbnailImageBox' key={i}>
            <img
              src={photo.thumbnail_url}
              alt=''
              className='thumbnailImages'
              id={i}
              key={i}
              onClick={(e) => selectInd(Number(e.target.id))}
            />
          </div>
        ))}
        <div className='nextThumb' />
      </div>
    </div>
  ) : null;

export default ThumbnailScroll;
