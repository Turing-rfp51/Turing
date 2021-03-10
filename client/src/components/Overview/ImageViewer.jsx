/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable react/prop-types */
/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import React from 'react';

const ImageViewer = ({
  photos,
  hidePrev,
  selectPrev,
  hideNext,
  selectNext,
  selectedIndex,
  toggleModal,
  moveClass,
  nextInd,
}) =>
  photos ? (
    <>
      <div className={`imageBox ${moveClass}`}>
        <div className='selectPrevImage' hidden={hidePrev} onClick={selectPrev}>
          {`<`}
        </div>
        <div className='selectNextImage' hidden={hideNext} onClick={selectNext}>{`>`}</div>
        <img
          src={photos[selectedIndex].url}
          alt=''
          className='selectedImage'
          onClick={toggleModal}
        />
      </div>
      <div className={`${moveClass ? `moveLeftBox ${moveClass}` : `moveLeftBox`} ${moveClass}`}>
        <img src={photos[nextInd].url} alt='' className='nextImage' />
      </div>
      <div className={`${moveClass ? `moveRightBox ${moveClass}` : `moveRightBox`} ${moveClass}`}>
        <img src={photos[nextInd].url} alt='' className='nextImage' />
      </div>
      <div className={`${moveClass ? `moveUpBox ${moveClass}` : `moveUpBox`} ${moveClass}`}>
        <img src={photos[nextInd].url} alt='' className='nextImage' />
      </div>
    </>
  ) : null;

export default ImageViewer;
