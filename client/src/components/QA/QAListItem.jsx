/* eslint-disable react/prop-types */
import React from 'react';

import QAHeader from './QAHeader.jsx';
import AnswersList from './AnswersList.jsx';
import QAFooter from './QAFooter.jsx';

const QAListItem = ({ questionData, getQA }) => (
  <div className='QAListItem'>
    <QAHeader questionData={questionData} getQA={getQA} />
    <AnswersList answers={questionData.answers} />
    <QAFooter answers={questionData.answers} getQA={getQA} />
  </div>
);

export default QAListItem;
