/* eslint-disable jsx-a11y/label-has-for */
/* eslint-disable jsx-a11y/label-has-associated-control */
/* eslint-disable react/prop-types */
import React from 'react';

const labels = {
  size: ['A size too small', '½ a size too small', 'Perfect', '½ a size too big', 'A size too big'],
  width: ['Too narrow', 'Slightly narrow', 'Perfect', 'Slightly wide', 'Too wide'],
  comfort: ['Uncomfortable', 'Slightly uncomfortable', 'Ok', 'Comfortable', 'Perfect'],
  quality: ['Poor', 'Below average', 'What I expected', 'Pretty great', 'Perfect'],
  length: ['Runs short', 'Runs slightly short', 'Perfect', 'Runs slightly long', 'Runs long'],
  fit: ['Runs tight', 'Runs slightly tight', 'Perfect', 'Runs slightly long', 'Runs long'],
};

const values = [1, 2, 3, 4, 5];

const ReviewCharacteristicsInput = ({
  characteristics,
  selectedCharacteristics,
  updateSelectedChar,
}) => (
  <React.Fragment>
    {Object.keys(characteristics).map((c) => (
      <div className='ReviewCharacteristicsInputContainer' key={c}>
        <div className='nrmRadioInputContainer'>
          <div className='nrmCharNameLabel'>
            {`${c}*`}
            {selectedCharacteristics[c] ? (
              <span className='nrmSelectedCharLabel'>
                - {labels[c.toLowerCase()][selectedCharacteristics[c] - 1]}
              </span>
            ) : (
              <span className='nrmSelectedCharLabel'>- none selected</span>
            )}
          </div>
          <div className='nrmRadioOptionsContainer'>
            {values.map((n) => (
              <input
                type='radio'
                className='nrmCharRadioButtons'
                id={`nrm${c}${n}`}
                key={`${c}${n}`}
                name={`nrm${c}`}
                value={n}
                required
                onChange={(e) => updateSelectedChar(`${c}`, +e.target.value)}
              />
            ))}
          </div>
          <div className='nrmRadioLabelsContainer'>
            <span>{labels[c.toLowerCase()][0]}</span>
            <span>{labels[c.toLowerCase()][4]}</span>
          </div>
        </div>
        <br />
      </div>
    ))}
  </React.Fragment>
);

export default ReviewCharacteristicsInput;
