/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable no-plusplus */
/* eslint-disable react/prop-types */
import React from 'react';
import { v4 as uuid } from 'uuid';
import star from './stars/star.svg';
import starOutline from './stars/star-outline.svg';
import starOneQuarter from './stars/star-one-quarter.svg';
import starHalf from './stars/star-half.svg';
import starThreeQuarter from './stars/star-three-quarter.svg';

class AverageStarRating extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      average: 0,
    };
  }

  componentDidMount() {
    this.calculateAverage();
  }

  calculateAverage() {
    const { metadata } = this.props;
    const total = +metadata.recommended.false + +metadata.recommended.true;
    let sum = 0;
    for (let i = 1; i < 6; i++) {
      sum += metadata.ratings[i] * i;
    }
    this.setState({ average: Math.round((sum / total) * 10) / 10 });
  }

  render() {
    const { average } = this.state;
    return (
      <div className='reviewAverageContainer'>
        <div className='reviewAverageNumber'>{average}</div>
        {Array.apply(1, Array(Math.floor(average))).map(() => (
          <img src={star} className='starIcon' alt='star' key={uuid()} />
        ))}
        <span className='fractionStar fa fa-star' key={uuid()} />
        {Array.apply(1, Array(5 - Math.ceil(average))).map(() => (
          <img src={starOutline} className='starIcon' alt='star' key={uuid()} />
        ))}
      </div>
    );
  }
}

export default AverageStarRating;
