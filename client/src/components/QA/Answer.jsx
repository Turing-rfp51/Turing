import React from 'react';

const Answer = ({ answer, key }) => (
  <React.Fragment>
    <div key={key}>A: {answer}</div>
  </React.Fragment>
);

export default Answer;
