/* eslint-disable react/prop-types */
/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import React from 'react';

const StyleSelector = ({ styles, selectedStyleName, selectStyle }) => {
  if (!styles || !selectedStyleName) {
    return null;
  }
  return (
    <>
      <div>{selectedStyleName}</div>
      {styles.map((style, i) => (
        <img
          src={style.photos[0].thumbnail_url}
          alt={style.name}
          key={style.style_id}
          id={i}
          onClick={(e) => selectStyle(e.target.id)}
        />
      ))}
    </>
  );
};

export default StyleSelector;
