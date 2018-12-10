import React from 'react';
import PropTypes from 'prop-types';
import Tweet from './Tweet';

const Tweets = ({ tweets, handleActions }) => (
  <div>
    {tweets.map(tweet => (
      <Tweet tweet={tweet} key={tweet.id} handleActions={handleActions} />
    ))}
  </div>
);
Tweets.defaultProps = {
  tweets: [],
};
Tweets.propTypes = {
  tweets: PropTypes.array,
  handleActions: PropTypes.func.isRequired,
};
export default Tweets;
