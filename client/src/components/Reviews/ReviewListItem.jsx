/* eslint-disable react/prop-types */
import React from 'react';
import ReviewResponse from './ReviewResponse.jsx';
import ReviewHeader from './ReviewHeader.jsx';
import ReviewPhotos from './ReviewPhotos.jsx';
import ReviewRecommendation from './ReviewRecommendation.jsx';
import ReviewHelpfulCount from './ReviewHelpfulCount.jsx';
import ReviewBody from './ReviewBody.jsx';

const ReviewsList = ({ review, updateHelpfulCount, reportReview, getReviews, searchedTerm }) => (
  <div className='reviewListItem'>
    <ReviewHeader review={review} searchedTerm={searchedTerm} />
    <h3 className='reviewSummary'>{review.summary}</h3>
    <ReviewBody review={review} searchedTerm={searchedTerm} />
    {review.photos.length > 0 && <ReviewPhotos review={review} />}
    <ReviewRecommendation review={review} />
    {review.response && <ReviewResponse review={review} />}
    <ReviewHelpfulCount review={review} getReviews={getReviews} />
  </div>
);

export default ReviewsList;
