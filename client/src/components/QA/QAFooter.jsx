/* eslint-disable react/prop-types */
import React from 'react';

import AnswerName from './AnswerName.jsx';
import HelpfulAnswerUpvoteReport from './HelpfulAnswerUpvoteReport.jsx';

const QAFooter = ({ answers, getQA }) => {
  return (
    <div className='qaFooter'>
      <AnswerName answers={answers} />
      <HelpfulAnswerUpvoteReport answers={answers} getQA={getQA} />
    </div>
  );
};

export default QAFooter;
