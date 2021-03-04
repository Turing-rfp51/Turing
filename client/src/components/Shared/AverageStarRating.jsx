/* eslint-disable class-methods-use-this */
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
      fractionStar: star,
    };
  }

  componentDidMount() {
    this.calculateAverage();
  }

  calculateAverage() {
    const { metadata } = this.props;
    console.log('metadata:', metadata);

    let total = 0;
    if (metadata.recommended.true) {
      total += +metadata.recommended.true;
    }
    if (metadata.recommended.false) {
      total += +metadata.recommended.false;
    }
    let sum = 0;
    for (let i = 1; i < 6; i++) {
      if (metadata.ratings[i]) {
        sum += metadata.ratings[i] * i;
      }
    }

    let average = 0;
    if (sum > 0 && total > 0) {
      average = Math.round((sum / total) * 10) / 10;
      if (![1, 2, 3, 4, 5].includes(average)) {
        this.determineStarImage(sum / total);
      }
    }
    this.setState({ average });
  }

  determineStarImage(average) {
    console.log('average:', average);

    const decimal = (+average.toString().split('.')[1] * 10).toString().slice(0, 2);

    if (decimal < 12) {
      this.setState({ fractionStar: starOutline });
    } else if (decimal >= 12 && decimal < 37) {
      this.setState({ fractionStar: starOneQuarter });
    } else if (decimal >= 37 && decimal < 62) {
      this.setState({ fractionStar: starHalf });
    } else if (decimal >= 62 && decimal < 87) {
      this.setState({ fractionStar: starThreeQuarter });
    } else {
      this.setState({ fractionStar: star });
    }
  }

  render() {
    const { average, fractionStar } = this.state;
    return (
      <div className='reviewAverageContainer'>
        <div className='reviewAverageNumber'>{average}</div>
        {Array.apply(1, Array(Math.floor(average))).map(() => (
          <img src={star} className='starIcon' alt='star' key={uuid()} />
        ))}
        {average > 0 && ![1, 2, 3, 4, 5].includes(average) && (
          <img src={fractionStar} className='starIcon' alt='star' key={uuid()} />
        )}
        {Array.apply(1, Array(5 - Math.ceil(average))).map(() => (
          <img src={starOutline} className='starIcon' alt='star' key={uuid()} />
        ))}
      </div>
    );
  }
}

export default AverageStarRating;
