import React from 'react';
import { mount } from 'enzyme';
import tweets from '../../tweets.json';
import Tweets from '../../../components/Tweets';
import Tweet from '../../../components/Tweet';

describe('Test Tweets', () => {
  it('should render list of tweets', () => {
    const mockFn = () => null;
    const wrapper = mount(<Tweets tweets={tweets} handleActions={mockFn} />);
    expect(wrapper.find(Tweet).length).toBe(4);
  });
  it('should test snapshot', () => {
    const mockFn = () => null;
    const wrapper = mount(<Tweets tweets={tweets} handleActions={mockFn} />);
    expect(wrapper.html()).toMatchSnapshot();
  });
});
