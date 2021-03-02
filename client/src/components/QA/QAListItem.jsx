import React from 'react';

import QAHeader from './QAHeader.jsx';
import Question from './Question.jsx';
import Answer from './Answer.jsx';
import HelpfulUpvote from './HelpfulUpvote.jsx';
import AddAnswer from './AddAnswer.jsx';
import QAFooter from './QAFooter.jsx';

const QAListItem = ({ questionData }) => (
  <div className='QAListItem'>
    <QAHeader />
    <Question questionData={questionData} />
    <Answer questionData={questionData} />
    <HelpfulUpvote />
    <AddAnswer />
    <QAFooter />
  </div>
);

export default QAListItem;
