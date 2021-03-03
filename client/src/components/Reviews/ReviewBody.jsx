/* eslint-disable react/prop-types */
import React from 'react';

class ReviewBody extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      expanded: false,
    };
  }

  render() {
    const { review } = this.props;
    const { expanded } = this.state;
    return (
      <React.Fragment>
        {(review.body.length <= 250 || expanded) && <p>{review.body}</p>}
        {review.body.length > 250 && !expanded && (
          <React.Fragment>
            <p>{review.body.slice(0, 250)}</p>
            <button type='button' onClick={() => this.setState({ expanded: true })}>
              Show More
            </button>
          </React.Fragment>
        )}
      </React.Fragment>
    );
  }
}

export default ReviewBody;
