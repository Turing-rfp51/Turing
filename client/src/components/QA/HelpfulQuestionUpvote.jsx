/* eslint-disable react/prop-types */
import React from 'react';

import { updateHelpfulCount } from '../Shared/HelpfulCount.js';

class HelpfulQuestionUpvote extends React.Component {
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
      updateHelpfulCount('qa/questions', questionData.question_id, () =>
        this.setState({ voted: true }, getQA)
      );
    }
  }

  render() {
    const { questionData } = this.props;

    return (
      <div className='questionHelpfulCountContainer'>
        <div>Helpful?</div>
        <button
          type='button'
          className='questionVotedHelpful'
          onClick={this.triggerUpdateHelpfulCount}
        >
          Yes
        </button>
        <div className='questionHelpfulVoteCount'>({questionData.question_helpfulness})</div>
      </div>
    );
  }
}

export default HelpfulQuestionUpvote;
