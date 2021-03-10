/* eslint-disable react/prop-types */
import React from 'react';

const ReviewSummary = ({ review, searchedTerm }) => (
  <div className='reviewUsername'>
    {searchedTerm.length >= 3 &&
    review.summary.toLowerCase().includes(searchedTerm.toLowerCase()) ? (
      <React.Fragment>
        {review.summary.indexOf(searchedTerm) !== -1 ? (
          <h3 className='reviewSummary'>
            <span>{review.summary.slice(0, review.summary.indexOf(searchedTerm))}</span>
            <span className='reviewHighlighted'>
              {review.summary.slice(
                review.summary.indexOf(searchedTerm),
                review.summary.indexOf(searchedTerm) + searchedTerm.length
              )}
            </span>
            <span>
              {review.summary.slice(review.summary.indexOf(searchedTerm) + searchedTerm.length)}
            </span>
          </h3>
        ) : (
          <h3 className='reviewSummary'>
            <span className='reviewHighlighted'>
              {review.summary.slice(
                0,
                review.summary.indexOf(searchedTerm) + searchedTerm.length + 1
              )}
            </span>
            <span>
              {review.summary.slice(review.summary.indexOf(searchedTerm) + searchedTerm.length + 1)}
            </span>
          </h3>
        )}
      </React.Fragment>
    ) : (
      <h3 className='reviewSummary'>{review.summary}</h3>
    )}
  </div>
);

export default ReviewSummary;
