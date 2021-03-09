/* eslint-disable react/prop-types */
/* eslint-disable jsx-a11y/label-has-for */
/* eslint-disable jsx-a11y/label-has-associated-control */
import React from 'react';

class ReviewSearch extends React.Component {
  validateSearchTerm(term) {
    const { filterBySearch } = this.props;
    if (term.length >= 3) {
      filterBySearch(term);
    }
  }

  render() {
    return (
      <form className='reviewSearchContainer'>
        <label htmlFor='reviewSearchInput'>Search: </label>
        <input
          id='reviewSearchInput'
          type='text'
          onChange={(e) => this.validateSearchTerm(e.target.value)}
        />
        <button type='submit' className='fa fa-search reviewSearchIcon' />
      </form>
    );
  }
}

export default ReviewSearch;
