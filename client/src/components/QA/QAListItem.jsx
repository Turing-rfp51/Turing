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
    };
    this.showMoreAnswers = this.showMoreAnswers.bind(this);
  }

  showMoreAnswers() {
    this.setState((current) => ({ answersDisplayed: current.answersDisplayed + 2 }));
  }

  render() {
    const { questionData, getQA } = this.props;
    const { answersDisplayed } = this.state;
    const answers = this.props.answers.sort((a, b) => b.helpfulness - a.helpfulness);
    return (
      <div className='qaListItem'>
        <QAHeader questionData={questionData} getQA={getQA} questionId={questionData.question_id} />
        <AnswersList
          totalAnswers={answers.length}
          answers={answers.length > 0 ? answers.slice(0, answersDisplayed) : questionData.answers}
          answersDisplayed={answersDisplayed}
          getQA={getQA}
        />
        <div className='qaLoadMoreAnswers'>
          <LoadMoreAnswers
            totalAnswers={answers.length}
            numOfAnswers={answers.length}
            answersDisplayed={answersDisplayed}
            showMoreAnswers={this.showMoreAnswers}
          />
        </div>
      </div>
    );
  }
}

export default QAListItem;
