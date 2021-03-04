/* eslint-disable no-undef */
/* eslint-disable react/jsx-filename-extension */
import React from 'react';
import { shallow } from 'enzyme';

import FilterList from '../../client/src/components/Reviews/FilterList.jsx';
import FilterByStar from '../../client/src/components/Reviews/FilterByStar.jsx';
// import Reviews from '../../client/src/components/Reviews/Reviews.jsx';

// const { addOrRemoveFilters } = Reviews;

describe('<FilterList />', () => {
  it('renders five <FilterByStar /> Components', () => {
    const wrapper = shallow(<FilterList />);
    expect(wrapper.find(FilterByStar)).toHaveLength(5);
  });

  // it('should apply filter when bar is clicked', () => {
  //   const wrapper = shallow(<FilterByStar n={1} addOrRemoveFilters={addOrRemoveFilters} />);
  //   wrapper.find(wrapper.children()).simulate('click');
  //   const temp = shallow(<Reviews productId={17762} />);
  //   expect(temp.state.starFilters).toHaveLength(1);
  // });
});
