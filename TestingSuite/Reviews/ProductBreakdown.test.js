/* eslint-disable no-undef */
/* eslint-disable react/jsx-filename-extension */
import React from 'react';
import { shallow } from 'enzyme';

import ProductBreakdown from '../../client/src/components/Reviews/ProductBreakdown.jsx';
import ProductBreakdownBar from '../../client/src/components/Reviews/ProductBreakdownBar.jsx';

const props1 = {
  characteristics: {
    Comfort: { id: 59530, value: '2.8636363636363636' },
    Quality: { id: 59531, value: '2.7272727272727273' },
    Size: { id: 59528, value: '2.9545454545454545' },
  },
};

const props2 = {
  characteristics: {
    Width: { id: 59529, value: '2.9743589743589744' },
  },
};

describe('<ProductBreakdown />', () => {
  it('renders three characteristics', () => {
    const wrapper = shallow(<ProductBreakdown metadata={props1} />);
    expect(wrapper.find(ProductBreakdownBar)).toHaveLength(3);
  });

  it('renders one characteristic', () => {
    const wrapper = shallow(<ProductBreakdown metadata={props2} />);
    expect(wrapper.find(ProductBreakdownBar)).toHaveLength(1);
  });
});
