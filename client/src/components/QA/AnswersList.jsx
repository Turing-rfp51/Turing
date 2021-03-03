/* eslint-disable react/prop-types */
import React from 'react';

const AnswersList = ({ answers }) => (
  <React.Fragment>
    {Object.keys(answers).map((a) => (
      <div>A: {answers[a].body}</div>
    ))}
  </React.Fragment>
);

export default AnswersList;
