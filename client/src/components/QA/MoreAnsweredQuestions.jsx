import React from 'react';

const MoreAnsweredQuestions = ({ numOfQuestions, showMoreQuestions, questionsDisplayed }) => (
  <React.Fragment>
    {numOfQuestions !== 0 && numOfQuestions !== questionsDisplayed && (
      <button className='qaMoreAnsweredQuestions' type='button' onClick={showMoreQuestions}>
        MORE ANSWERED QUESTIONS
      </button>
    )}
  </React.Fragment>
);

export default MoreAnsweredQuestions;
