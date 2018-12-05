import React from 'react';
import Tweet from './Tweet';

const Tweets = ({ tweets }) => {
  return (
    <div>
      {tweets.map(tweet => (
        <Tweet tweet={tweet} key={tweet.id} />
      ))}
    </div>
  );
};
export default Tweets;
