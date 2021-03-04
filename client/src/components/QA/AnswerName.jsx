import React from 'react';

const AnswerName = ({ userName, key }) => (
  <React.Fragment>
    <div className='qaAnswerName' key={key}>
      by {userName}
    </div>
  </React.Fragment>
);

export default AnswerName;
