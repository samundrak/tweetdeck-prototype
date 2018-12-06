import React from 'react';
import Tweet from './Tweet';

const Tweets = ({ tweets, handleActions }) => {
  return (
    <div>
      {tweets.map(tweet => (
        <Tweet tweet={tweet} key={tweet.id} handleActions={handleActions} />
      ))}
    </div>
  );
};
export default Tweets;
