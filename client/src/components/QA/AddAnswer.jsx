import React from 'react';

import Modal from './Modal.jsx';

const AddAnswer = ({ open }) => (
  <button className='qaAddAnswer' type='button' onClick={open}>
    Add Answer
  </button>
);

export default AddAnswer;
