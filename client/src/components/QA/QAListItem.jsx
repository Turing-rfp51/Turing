/* eslint-disable react/prop-types */
import React from 'react';

import QAHeader from './QAHeader.jsx';
import Question from './Question.jsx';
import AnswersList from './AnswersList.jsx';
import HelpfulUpvote from './HelpfulUpvote.jsx';
import AddAnswer from './AddAnswer.jsx';
import QAFooter from './QAFooter.jsx';

const QAListItem = ({ questionData }) => (
  <div className='QAListItem'>
    <QAHeader />
    <Question questionData={questionData} />
    <AnswersList answers={questionData.answers} />
    <HelpfulUpvote />
    <AddAnswer />
    <QAFooter />
  </div>
);

export default QAListItem;
