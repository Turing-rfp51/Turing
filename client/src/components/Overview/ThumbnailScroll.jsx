/* eslint-disable react/prop-types */
/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable react/no-array-index-key */
import React from 'react';

const ThumbnailScroll = ({
  photos,
  selectInd,
  selectedIndex,
  startInd,
  scroll,
  nextThumbClick,
  prevThumbClick,
  move,
}) => {
  const getIndex = (i) => i % photos.length;

  return photos ? (
    <div className='thumbnailBox'>
      <div className={`thumbnailScroll ${scroll} ${move}`} id='thumbnailScroll'>
        <div className={`thumbnailImageBox ${scroll} ${move}`}>
          <img
            src={photos[getIndex(startInd - 2 + photos.length)].thumbnail_url}
            alt='Missing'
            className={`thumbnailImages`}
            id={getIndex(startInd - 1 + photos.length)}
            key={getIndex(startInd - 1 + photos.length)}
          />
        </div>
        <div className={`thumbnailImageBox ${scroll} ${move}`}>
          <img
            src={photos[getIndex(startInd - 1 + photos.length)].thumbnail_url}
            alt='Missing'
            className={`thumbnailImages`}
            id={getIndex(startInd - 1 + photos.length)}
            key={getIndex(startInd - 1 + photos.length)}
          />
        </div>
        {photos.map((photo, i) => {
          const ind = getIndex(i + startInd);
          return (
            <div className='thumbnailImageBox' key={ind}>
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
        <div className={`thumbnailImageBox ${scroll} ${move}`}>
          <img
            src={photos[getIndex(startInd)].thumbnail_url}
            alt='Missing'
            className={`thumbnailImages`}
            id={getIndex(startInd - 1 + photos.length)}
            key={getIndex(startInd - 1 + photos.length)}
          />
        </div>
        <div className={`thumbnailImageBox ${scroll} ${move}`}>
          <img
            src={photos[getIndex(startInd + 1)].thumbnail_url}
            alt='Missing'
            className={`thumbnailImages`}
            id={getIndex(startInd - 1 + photos.length)}
            key={getIndex(startInd - 1 + photos.length)}
          />
        </div>
      </div>
      <div className={`prevThumb ${scroll}`} onClick={prevThumbClick}>
        {' '}
        &#8656;
      </div>
      <div className={`nextThumb ${scroll}`} onClick={nextThumbClick}>
        &#8658;
      </div>
    </div>
  ) : null;
};

export default ThumbnailScroll;
