/* eslint-disable camelcase */
/* eslint-disable no-plusplus */
/* eslint-disable react/no-did-update-set-state */
/* eslint-disable react/prop-types */
import React from 'react';
import ReviewListItem from './ReviewListItem.jsx';
import ReviewsSortDropdown from './ReviewsSortDropdown.jsx';
import ReviewsListButtons from './ReviewsListButtons.jsx';
import ReviewSearch from './ReviewSearch.jsx';

class ReviewsList extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      searchedTerm: '',
      filtered: [],
      numberToDisplay: 2,
      reviewsInLength: 0,
      prevFirstReviewId: 0,
    };

    this.filterBySearch = this.filterBySearch.bind(this);
    this.showMoreReviews = this.showMoreReviews.bind(this);
  }

  componentDidMount() {
    const { searchedTerm } = this.state;
    this.filterBySearch(searchedTerm);
  }

  componentDidUpdate() {
    const { reviews } = this.props;
    const { reviewsInLength, searchedTerm, prevFirstReviewId } = this.state;
    if (reviews.length !== reviewsInLength) {
      this.setState({ reviewsInLength: reviews.length }, () => this.filterBySearch(searchedTerm));
    } else if (prevFirstReviewId !== reviews[0]?.review_id) {
      this.setState({ prevFirstReviewId: reviews[0]?.review_id }, () =>
        this.filterBySearch(searchedTerm)
      );
    }
  }

  filterBySearch(term) {
    const { reviews } = this.props;
    const unfiltered = reviews;

    if (term && term.length >= 3) {
      const regex = new RegExp(term, 'gi');
      const matches = unfiltered.filter(
        (r) => regex.test(r.body) || regex.test(r.summary) || regex.test(r.reviewer_name)
      );
      this.setState({
        searchedTerm: term,
        filtered: [...matches],
        reviewsInLength: reviews.length,
      });
    } else {
      this.setState({
        filtered: [...unfiltered],
        reviewsInLength: reviews.length,
        searchedTerm: '',
      });
    }
  }

  showMoreReviews() {
    this.setState((prevState) => ({ numberToDisplay: prevState.numberToDisplay + 2 }));
  }

  render() {
    const { updateSortBy, toggleShowNewReviewModal, getReviews, reviews } = this.props;
    const { filtered, numberToDisplay, searchedTerm } = this.state;
    return (
      <div className='reviewListContainer'>
        <div className='reviewListHeader'>
          <ReviewSearch filterBySearch={this.filterBySearch} />
          <ReviewsSortDropdown updateSortBy={updateSortBy} />
        </div>
        <div className='reviewListDisplay'>
          {searchedTerm.length >= 3
            ? filtered
                .slice(0, numberToDisplay)
                .map((r) => (
                  <ReviewListItem
                    review={r}
                    key={r.review_id}
                    getReviews={getReviews}
                    searchedTerm={searchedTerm}
                  />
                ))
            : reviews
                .slice(0, numberToDisplay)
                .map((r) => (
                  <ReviewListItem
                    review={r}
                    key={r.review_id}
                    getReviews={getReviews}
                    searchedTerm={searchedTerm}
                  />
                ))}
        </div>
        <ReviewsListButtons
          showMoreReviews={this.showMoreReviews}
          numOfReviews={numberToDisplay}
          toggleShowNewReviewModal={toggleShowNewReviewModal}
          totalLength={searchedTerm.length >= 3 ? filtered.length : reviews.length}
        />
      </div>
    );
  }
}

export default ReviewsList;
