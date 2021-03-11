/* eslint-disable react/jsx-no-duplicate-props */
/* eslint-disable camelcase */
/* eslint-disable react/no-array-index-key */
/* eslint-disable react/prop-types */
/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import React from 'react';

const StyleSelector = ({ styles, selectedStyle: { name, style_id }, selectStyle }) =>
  styles && name ? (
    <div className='styleSelector'>
      <div className='selectedStyle'>{name}</div>
      <div className='photosGrid'>
        {styles.map((style, i) => {
          let displayCheck = 'doNotDisplay';
          let selectedPhoto = 'notSelectedPhoto';
          if (style.style_id === style_id) {
            displayCheck = 'displayCheckMark';
            selectedPhoto = 'selectedPhoto';
          }
          return (
            <div className='stylePhotos' key={i}>
              <img
                className={selectedPhoto}
                src={style.photos[0].thumbnail_url}
                alt={style.name}
                key={style.style_id}
                id={i}
                onClick={(e) => selectStyle(e.target.id)}
              />
              <div className={displayCheck} style={{ fontSize: '80px' }} key={i}>
                &#10003;
              </div>
            </div>
          );
        })}
      </div>
    </div>
  ) : null;

export default StyleSelector;
