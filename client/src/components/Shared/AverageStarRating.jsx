/* eslint-disable no-plusplus */
/* eslint-disable react/prop-types */
import React from 'react';

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
      <React.Fragment>
        <div>{average}</div>
      </React.Fragment>
    );
  }
}

export default AverageStarRating;
