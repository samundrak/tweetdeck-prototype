import React from 'react';
import { shallow } from 'enzyme';
import TwitterLink from '../../../components/TwitterLink';

describe('Test TwitterLink', () => {
  it('should render TwitterLink', () => {
    const handle = 'kardnumas';
    const wrapper = shallow(<TwitterLink handle={handle}>{handle}</TwitterLink>);
    expect(wrapper.text()).toBe(handle);
  });
  it('should test snapshot', () => {
    const handle = 'kardnumas';
    const wrapper = shallow(<TwitterLink handle={handle}>{handle}</TwitterLink>);
    expect(wrapper.html()).toMatchSnapshot();
  });
});
