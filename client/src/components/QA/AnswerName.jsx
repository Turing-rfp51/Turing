import React from 'react';

const AnswerName = ({ answers }) => (
  <React.Fragment>
    {Object.keys(answers).map((a) => (
      <div key={answers[a].id}>by {answers[a].answerer_name}</div>
    ))}
  </React.Fragment>
);

export default AnswerName;
