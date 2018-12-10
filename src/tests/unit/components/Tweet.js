import React from 'react';
import { mount } from 'enzyme';
import tweets from '../../tweets.json';
import Tweet from '../../../components/Tweet';

describe('Test Tweet', () => {
  it('it should render tweet ', () => {
    const mockFn = () => null;
    const wrapper = mount(<Tweet handleActions={mockFn} tweet={tweets[0]} />);
    expect(wrapper.text()).toBe(tweets[0].text);
  });
  it('should test snapshot', () => {
    const mockFn = () => null;
    const wrapper = mount(<Tweet handleActions={mockFn} tweet={tweets[0]} />);
    expect(wrapper.html()).toMatchSnapshot();
  });
});
