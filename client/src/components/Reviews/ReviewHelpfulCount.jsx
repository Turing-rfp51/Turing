/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable react/prop-types */
import React from 'react';

class ReviewHelpfulCount extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      vote: null,
    };

    this.triggerUpdateHelpfulCount = this.triggerUpdateHelpfulCount.bind(this);
  }

  triggerUpdateHelpfulCount(adj) {
    const { vote } = this.state;
    const { review, updateHelpfulCount } = this.props;
    if (vote) {
      this.setState({ vote: adj === 1 ? 'yes' : 'no' });
    }
    updateHelpfulCount(review.helpfulness + adj);
  }

  render() {
    const { review } = this.props;
    const { vote } = this.state;
    return (
      <div className='reviewHelpfulCountContainer'>
        <div>Was this review helpful?</div>
        <button
          type='button'
          className={
            vote === 'yes'
              ? 'reviewVotedHelpful reviewHelpfulVoteOption'
              : 'reviewHelpfulVoteOption'
          }
          onClick={() => this.triggerUpdateHelpfulCount(1)}
        >
          YES
        </button>
        <div className='reviewHelpfulVoteCount'>({review.helpfulness})</div>
        <button
          type='button'
          className={
            vote === 'no'
              ? 'reviewVotedNotHelpful reviewHelpfulVoteOption'
              : 'reviewHelpfulVoteOption'
          }
          onClick={() => this.triggerUpdateHelpfulCount(-1)}
        >
          NO
        </button>
      </div>
    );
  }
}

export default ReviewHelpfulCount;
