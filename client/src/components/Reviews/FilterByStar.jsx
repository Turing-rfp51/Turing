/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable react/prop-types */
import React from 'react';
import ReviewRatingBar from './ReviewRatingBar.jsx';

class FilterByStar extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      active: false,
    };
  }

  toggleFilter() {
    const { n, addOrRemoveFilters } = this.props;
    const { active } = this.state;
    this.setState({ active: !active }, () => addOrRemoveFilters(n));
  }

  render() {
    const { n, metadata } = this.props;
    const { active } = this.state;

    return (
      <div>
        <div
          onClick={this.toggleFilter.bind(this)}
          className={
            active
              ? 'reviewActiveFilter reviewSingleFilterContainer'
              : 'reviewSingleFilterContainer'
          }
        >
          {n} Star{n !== 1 && 's'}
          <ReviewRatingBar n={n} metadata={metadata} />
          {metadata.ratings[n] || 0}
        </div>
      </div>
    );
  }
}

export default FilterByStar;