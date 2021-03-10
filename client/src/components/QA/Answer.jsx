import React from 'react';

const Answer = ({ answer, key }) => (
  <React.Fragment>
    <div key={key} className='qaAnswer'>
      <strong>A:</strong> {answer}
    </div>
  </React.Fragment>
);

export default Answer;
