/* eslint-disable react/prop-types */
import React from 'react';

import QAListItem from './QAListItem.jsx';

const QAList = ({ sortedData, data, getQA }) => (
  <div className='questionListContainer'>
    {data.length > 0 &&
      data.map((questionData) => (
        <QAListItem questionData={questionData} key={questionData.question_id} getQA={getQA} />
      ))}
  </div>
);

export default QAList;
