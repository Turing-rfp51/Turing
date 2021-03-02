/* eslint-disable react/prop-types */
import React from 'react';

const ReviewHelpfulCount = ({ review }) => (
  <div className='reviewHelpfulCountContainer'>
    <div>Was this review helpful?</div>
    <div className='reviewHelpfulVoteOption'>YES</div>
    <div className='reviewHelpfulVoteCount'>({review.helpfulness})</div>
    <div className='reviewHelpfulVoteOption'>NO</div>
  </div>
);

export default ReviewHelpfulCount;
