/* eslint-disable react/prop-types */
import React from 'react';

import QAListItem from './QAListItem.jsx';

const QAList = ({ data, getQA, answersDisplayed, showMoreAnswers }) => (
  <div className='questionListContainer'>
    {data.length > 0 &&
      data.map((questionData) => (
        <QAListItem
          questionData={questionData}
          questionDataID={questionData.id}
          answers={Object.keys(questionData.answers).map((a) => questionData.answers[a])}
          answersDisplayed={answersDisplayed}
          showMoreAnswers={showMoreAnswers}
          key={questionData.question_id}
          getQA={getQA}
        />
      ))}
  </div>
);

export default QAList;
