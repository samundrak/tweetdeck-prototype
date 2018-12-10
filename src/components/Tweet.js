import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import { Skeleton, Card, Icon, Avatar } from 'antd';
import styled from 'styled-components';
import distanceInWordsToNow from 'date-fns/distance_in_words_to_now';
import TwitterLink from './TwitterLink';

const { Meta } = Card;
const CreatedAt = styled.div`
  position: absolute;
  float: right;
  right: 0px;
  padding-right: 10px;
  margin-top: 0px;
  color: darkgray;
`;
const Counts = styled.span``;

const gotoTweet = (handle, tweetId) => () => window.open(`https://twitter.com/${handle}/status/${tweetId}`);
const Tweet = ({ tweet, handleActions }) => (
  <Card
    style={{}}
    actions={[
      <Fragment>
        <div tabIndex="0" role="link" onClick={handleActions({ type: 'retweets', tweet })}>
          <Icon type="retweet" title="Retweets" />
          <Counts> {tweet.retweet_count}</Counts>
        </div>
      </Fragment>,
      <Fragment>
        <div tabIndex="0" role="link" onClick={handleActions({ type: 'mentions', tweet })}>
          <Icon type="tag" title="mentions" />
          <Counts> {tweet.entities.user_mentions.length || ''}</Counts>
        </div>
      </Fragment>,
    ]}
  >
    <Skeleton loading={false} avatar active>
      <CreatedAt>{distanceInWordsToNow(tweet.created_at)} ago</CreatedAt>
      <Meta
        avatar={<Avatar src={tweet.user.profile_image_url} />}
        title={<TwitterLink handle={tweet.user.screen_name} />}
        description={
          <div tabIndex="0" role="link" style={{ cursor: 'pointer' }} onClick={gotoTweet(tweet.user.screen_name, tweet.id_str)}>
            {tweet.text}
          </div>
        }
      />
    </Skeleton>
  </Card>
);
Tweet.propTypes = {
  tweet: PropTypes.object.isRequired,
  handleActions: PropTypes.func.isRequired,
};
export default Tweet;
