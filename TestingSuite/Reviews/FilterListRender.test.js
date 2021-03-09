/* eslint-disable no-undef */
/* eslint-disable react/jsx-filename-extension */
import React from 'react';
import { shallow } from 'enzyme';

import FilterList from '../../client/src/components/Reviews/FilterList.jsx';
import FilterByStar from '../../client/src/components/Reviews/FilterByStar.jsx';

describe('<FilterList />', () => {
  it('renders five <FilterByStar /> Components', () => {
    const wrapper = shallow(<FilterList />);
    expect(wrapper.find(FilterByStar)).toHaveLength(5);
  });
});
