/* eslint-disable react/prop-types */
import React from 'react';

import QAHeader from './QAHeader.jsx';
import AnswersList from './AnswersList.jsx';

const QAListItem = ({
  questionData,
  answers,
  answersDisplayed,
  showMoreAnswers,
  questionDataID,
  getQA,
}) => {
  return (
    <div className='QAListItem'>
      <QAHeader questionData={questionData} getQA={getQA} questionId={questionData.question_id} />
      <AnswersList
        questionDataID={questionDataID}
        totalAnswers={answers.length}
        answers={answers.length > 0 ? answers.slice(0, answersDisplayed) : questionData.answers}
        answersDisplayed={answersDisplayed}
        showMoreAnswers={showMoreAnswers}
        getQA={getQA}
      />
    </div>
  );
};

export default QAListItem;
