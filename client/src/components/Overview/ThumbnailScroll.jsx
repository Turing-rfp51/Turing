/* eslint-disable react/prop-types */
/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable react/no-array-index-key */
import React from 'react';

const ThumbnailScroll = ({ photos, selectInd, selectedIndex, startInd }) => {
  const getIndex = (i) => (i + startInd) % photos.length;

  return photos ? (
    <div className='thumbnailBox'>
      <div className='thumbnailScroll'>
        {photos.map((photo, i) => {
          const ind = getIndex(i);
          return (
            <div name={`thumb${ind}`} className='thumbnailImageBox' key={ind}>
              <img
                src={photos[ind].thumbnail_url}
                alt='Missing'
                className={`thumbnailImages ${selectedIndex === ind ? 'selectedThumb' : ''}`}
                id={ind}
                key={ind}
                onClick={(e) => selectInd(Number(e.target.id), 'moveUp')}
              />
            </div>
          );
        })}
      </div>
      <div className='prevThumb'>L</div>
      <div className='nextThumb'>R</div>
    </div>
  ) : null;
      }



export default ThumbnailScroll;
