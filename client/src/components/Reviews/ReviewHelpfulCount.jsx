/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable react/prop-types */
import React from 'react';

const { updateHelpfulCount, reportItem } = require('../Shared/HelpfulCount.js');

class ReviewHelpfulCount extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      voted: false,
    };

    this.triggerUpdateHelpfulCount = this.triggerUpdateHelpfulCount.bind(this);
  }

  triggerUpdateHelpfulCount() {
    const { voted } = this.state;
    const { review } = this.props;
    if (!voted) {
      this.setState({ voted: true });
      updateHelpfulCount('reviews', review.review_id);
    }
  }

  render() {
    const { review } = this.props;
    const { voted } = this.state;
    return (
      <div className='reviewHelpfulCountContainer'>
        <div>Was this review helpful?</div>
        <button
          type='button'
          className={
            voted === true
              ? 'reviewVotedHelpful reviewHelpfulVoteOption'
              : 'reviewHelpfulVoteOption'
          }
          onClick={this.triggerUpdateHelpfulCount}
        >
          YES
        </button>
        <div className='reviewHelpfulVoteCount'>({review.helpfulness})</div>
        <button
          type='button'
          className='reviewHelpfulVoteOption'
          onClick={() => reportItem('reviews', review.review_id)}
        >
          Report
        </button>
      </div>
    );
  }
}

export default ReviewHelpfulCount;
