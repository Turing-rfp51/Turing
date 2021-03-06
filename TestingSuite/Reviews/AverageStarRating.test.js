/* eslint-disable no-undef */
/* eslint-disable react/jsx-filename-extension */
import React from 'react';
import { shallow } from 'enzyme';

import AverageStarRating from '../../client/src/components/Shared/AverageStarRating.jsx';

const fakeData = {
  recommended: {
    true: 1,
    false: 1,
  },
  ratings: {
    3: 1,
    5: 1,
  },
};

describe('<Reviews />', () => {
  it('calculates average properly', () => {
    const wrap = shallow(<AverageStarRating metadata={fakeData} />);
    expect(wrap.state('average')).toEqual(4);
  });

  it('calculates average properly', () => {
    const wrap = shallow(<AverageStarRating metadata={fakeData} />);
    expect(wrap.state('average')).not.toEqual(3);
  });
});
