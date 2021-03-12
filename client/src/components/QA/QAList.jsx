/* eslint-disable react/prop-types */
import React from 'react';

import QAListItem from './QAListItem.jsx';

const QAList = ({ data, getQA }) => (
  <div className='qaListContainer'>
    {data.length > 0 &&
      data.map((questionData) => (
        <QAListItem
          questionData={questionData}
          answers={Object.keys(questionData.answers).map((a) => questionData.answers[a])}
          key={questionData.question_id}
          getQA={getQA}
        />
      ))}
  </div>
);

export default QAList;
