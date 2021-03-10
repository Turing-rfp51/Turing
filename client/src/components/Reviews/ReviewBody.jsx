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
    const { review, searchedTerm } = this.props;
    const { expanded } = this.state;
    return (
      <React.Fragment>
        {searchedTerm.length >= 3 &&
        review.body.toLowerCase().includes(searchedTerm.toLowerCase()) ? (
          <React.Fragment>
            {review.body.indexOf(searchedTerm) !== -1 ? (
              <p>
                <span>{review.body.slice(0, review.body.indexOf(searchedTerm))}</span>
                <span className='reviewHighlighted'>
                  {review.body.slice(
                    review.body.indexOf(searchedTerm),
                    review.body.indexOf(searchedTerm) + searchedTerm.length
                  )}
                </span>
                <span>
                  {review.body.slice(review.body.indexOf(searchedTerm) + searchedTerm.length)}
                </span>
              </p>
            ) : (
              <p>
                <span className='reviewHighlighted'>
                  {review.body.slice(
                    0,
                    review.body.indexOf(searchedTerm) + searchedTerm.length + 1
                  )}
                </span>
                <span>
                  {review.body.slice(review.body.indexOf(searchedTerm) + searchedTerm.length + 1)}
                </span>
              </p>
            )}
          </React.Fragment>
        ) : (
          <React.Fragment>
            {(review.body.length <= 250 || expanded) && <p>{review.body}</p>}
            {review.body.length > 250 && !expanded && (
              <React.Fragment>
                <p>{review.body.slice(0, 250)}</p>
                <div className='showMoreButtonContainer'>
                  <i className='fas fa-chevron-down' />
                  <button
                    type='button'
                    id='showMoreButton'
                    onClick={() => this.setState({ expanded: true })}
                  >
                    Show More
                  </button>
                </div>
              </React.Fragment>
            )}
          </React.Fragment>
        )}
      </React.Fragment>
    );
  }
}

export default ReviewBody;
