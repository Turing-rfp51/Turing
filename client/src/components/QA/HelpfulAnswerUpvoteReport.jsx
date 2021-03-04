/* eslint-disable react/destructuring-assignment */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable react/prop-types */
import React from 'react';

import { updateHelpfulCount, reportItem } from '../Shared/HelpfulCount.js';

class HelpfulAnswerUpvoteReport extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      voted: false,
    };

    this.triggerUpdateHelpfulCount = this.triggerUpdateHelpfulCount.bind(this);
  }

  triggerUpdateHelpfulCount() {
    const { voted } = this.state;
    const { questionData, getQA } = this.props;
    if (!voted) {
      updateHelpfulCount('qa/answers', this.props.answers.review_id, () =>
        this.setState({ voted: true }, getQA)
      );
    }
  }

  render() {
    return (
      <div className='qaHelpfulAnswerUpvoteReport'>
        <div>Helpful? </div>
        <button
          type='button'
          className='qaAnswerHelpfulUpvote'
          onClick={this.triggerUpdateHelpfulCount}
        >
          Yes
        </button>
        <div className='qaAnswerHelpfulVoteCount'>({this.props.answers.helpfulness})</div>
        <button
          type='button'
          className='qaAnswerReport'
          onClick={() => reportItem('qa/answers', this.props.answers.id, getQA)}
        >
          Report
        </button>
      </div>
    );
  }
}

export default HelpfulAnswerUpvoteReport;
