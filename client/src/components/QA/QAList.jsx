/* eslint-disable react/prop-types */
import React from 'react';

import QAListItem from './QAListItem.jsx';

const QAList = ({ data, getQA, questionsDisplayed }) => (
  <div className='questionListContainer'>
    {data.length > 0 &&
      data.map((questionData) => (
        <QAListItem questionData={questionData} key={questionData.question_id} getQA={getQA} />
      ))}
  </div>
);

export default QAList;
