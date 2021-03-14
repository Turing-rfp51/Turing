/* eslint-disable class-methods-use-this */
/* eslint-disable no-plusplus */
/* eslint-disable react/prop-types */
import React from 'react';
import AverageStarDisplay from './AverageStarDisplay.jsx';

class AverageStarRating extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      average: -1,
    };
  }

  componentDidMount() {
    this.calculateAverage();
  }

  calculateAverage() {
    const { metadata } = this.props;

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
      average = sum / total;
    }
    this.setState({ average });
  }

  render() {
    const { average } = this.state;
    const { inOverview } = this.props;
    return (
      <div className={inOverview ? 'overviewStarAverageContainer' : 'reviewAverageContainer'}>
        <div className={inOverview ? 'overviewAverageNumber' : 'reviewAverageNumber'}>
          {`${(Math.round(average * 10) / 10).toString()}.0`.slice(0, 3)}
        </div>
        {average !== -1 && <AverageStarDisplay average={average} />}
      </div>
    );
  }
}

export default AverageStarRating;
