/* eslint-disable react/prop-types */
import React from 'react';
import ReviewStarRating from './ReviewStarRating.jsx';
import FormatDate from '../Shared/FormatDate.jsx';

const ReviewHeader = ({ review, searchedTerm }) => (
  <div className='reviewHeader'>
    <ReviewStarRating review={review} />
    <div className='reviewDateAndUser'>
      <div className='reviewUsername'>
        {searchedTerm.length >= 3 &&
        review.reviewer_name.toLowerCase().includes(searchedTerm.toLowerCase()) ? (
          <React.Fragment>
            {review.reviewer_name.indexOf(searchedTerm) !== -1 ? (
              <React.Fragment>
                <span>
                  {review.reviewer_name.slice(0, review.reviewer_name.indexOf(searchedTerm))}
                </span>
                <span className='reviewHighlighted'>
                  {review.reviewer_name.slice(
                    review.reviewer_name.indexOf(searchedTerm),
                    review.reviewer_name.indexOf(searchedTerm) + searchedTerm.length
                  )}
                </span>
                <span>
                  {review.reviewer_name.slice(
                    review.reviewer_name.indexOf(searchedTerm) + searchedTerm.length
                  )}
                </span>
              </React.Fragment>
            ) : (
              <React.Fragment>
                <span className='reviewHighlighted'>
                  {review.reviewer_name.slice(
                    0,
                    review.reviewer_name.indexOf(searchedTerm) + searchedTerm.length + 1
                  )}
                </span>
                <span>
                  {review.reviewer_name.slice(
                    review.reviewer_name.indexOf(searchedTerm) + searchedTerm.length + 1
                  )}
                </span>
              </React.Fragment>
            )}
          </React.Fragment>
        ) : (
          <div>{review.reviewer_name}</div>
        )}
      </div>
      <FormatDate date={review.date} />
    </div>
  </div>
);

export default ReviewHeader;
