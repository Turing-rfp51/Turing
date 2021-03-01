/* eslint-disable react/prop-types */
import React from 'react';
import ReviewResponse from './ReviewResponse.jsx';
import ReviewHeader from './ReviewHeader.jsx';
import ReviewPhotos from './ReviewPhotos.jsx';

const ReviewsList = ({ review }) => (
  <div className='reviewListItem'>
    <ReviewHeader review={review} />
    <h4>{review.summary}</h4>
    <p>{review.body}</p>
    <ReviewPhotos review={review} />
    {review.recommend && <div>I recommend this product</div>}
    {review.response && <ReviewResponse review={review} />}
  </div>
);

export default ReviewsList;
