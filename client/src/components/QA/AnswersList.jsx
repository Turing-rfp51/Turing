/* eslint-disable react/prop-types */
import React from 'react';

import Answer from './Answer.jsx';
import AnswerName from './AnswerName.jsx';
import FormatDate from '../Shared/FormatDate.jsx';
import HelpfulAnswerUpvoteReport from './HelpfulAnswerUpvoteReport.jsx';

const AnswersList = ({ answers, getQA }) => {
  return (
    <React.Fragment>
      {Object.keys(answers).map((a) => (
        <div className='qaAnswerList' key={answers[a].id}>
          <div className='qaAnswer'>
            <Answer answer={answers[a].body} />
          </div>
          <div className='qaFooter' key={answers[a].id}>
            <AnswerName userName={answers[a].answerer_name} />
            <div className='qaDate'>
              <FormatDate date={answers[a].date} />
            </div>
            <HelpfulAnswerUpvoteReport
              answerid={answers[a].id}
              answerHelpfulness={answers[a].helpfulness}
              getQA={getQA}
            />
          </div>
        </div>
      ))}
    </React.Fragment>
  );
};

export default AnswersList;
