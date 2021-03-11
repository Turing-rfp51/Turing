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
    const { answerid, getQA } = this.props;
    if (!voted) {
      updateHelpfulCount('qa/answers', answerid, () => this.setState({ voted: true }, getQA));
    }
  }

  render() {
    const { answerid, answerHelpfulness, getQA } = this.props;
    const { voted } = this.state;
    return (
      <div className='qaHelpfulAnswerUpvoteReport'>
        <div>Helpful? </div>
        <button
          type='button'
          className={
            voted === true ? 'qaAnswerHelpfulUpvote reviewVotedHelpful' : 'qaAnswerHelpfulUpvote'
          }
          onClick={this.triggerUpdateHelpfulCount}
        >
          Yes
        </button>
        <div className='qaAnswerHelpfulVoteCount'>({answerHelpfulness})</div>
        <button
          type='button'
          className='qaAnswerReport'
          onClick={() => reportItem('qa/answers', answerid, getQA)}
        >
          Report
        </button>
      </div>
    );
  }
}

export default HelpfulAnswerUpvoteReport;
