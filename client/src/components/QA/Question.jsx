/* eslint-disable react/prop-types */
import React from 'react';

const Question = ({ questionData }) => (
  <h3 className='question'>Q: {questionData.question_body}</h3>
);

export default Question;
