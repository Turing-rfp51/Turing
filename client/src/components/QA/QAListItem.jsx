/* eslint-disable react/prop-types */
import React from 'react';

import QAHeader from './QAHeader.jsx';
import AnswersList from './AnswersList.jsx';
import LoadMoreAnswers from './LoadMoreAnswers.jsx';

class QAListItem extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      answersDisplayed: 2,
      totalAnswers: this.props.answers.length,
    };
    this.showMoreAnswers = this.showMoreAnswers.bind(this);
  }

  showMoreAnswers() {
    this.setState((current) => ({ answersDisplayed: current.answersDisplayed + 2 }));
  }

  render() {
    const { questionData, answers, getQA } = this.props;
    const { answersDisplayed, totalAnswers } = this.state;
    return (
      <div className='qaListItem'>
        <QAHeader questionData={questionData} getQA={getQA} questionId={questionData.question_id} />
        <AnswersList
          totalAnswers={answers.length}
          answers={answers.length > 0 ? answers.slice(0, answersDisplayed) : questionData.answers}
          answersDisplayed={answersDisplayed}
          getQA={getQA}
        />
        <LoadMoreAnswers
          totalAnswers={answers.length}
          numOfAnswers={answers.length}
          answersDisplayed={answersDisplayed}
          showMoreAnswers={this.showMoreAnswers}
        />
      </div>
    );
  }
}

export default QAListItem;
