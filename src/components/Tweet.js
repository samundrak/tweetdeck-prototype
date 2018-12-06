import React, { Fragment } from 'react';
import { Skeleton, Switch, Card, Icon, Avatar, Row, Col } from 'antd';
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
const Footer = styled.div`
  padding-left: 10px;
`;
const gotoTweet = (handle, tweetId) => () => {
  return window.open(`https://twitter.com/${handle}/status${tweetId}`);
};
const Tweet = ({ tweet }) => {
  return (
    <Card
      style={{}}
      actions={[
        <Fragment>
          <Icon type="retweet" title="Retweets" />
          <Counts> {tweet.retweet_count}</Counts>
        </Fragment>,
        <Fragment>
          <Icon type="tag" title="mentions" />
          <Counts> {tweet.entities.user_mentions.length || ''}</Counts>
        </Fragment>,
      ]}
    >
      <Skeleton loading={false} avatar active>
        <CreatedAt>{distanceInWordsToNow(tweet.created_at)} ago</CreatedAt>
        <Meta
          avatar={<Avatar src={tweet.user.profile_image_url} />}
          title={<TwitterLink handle={tweet.user.screen_name} />}
          description={
            <div
              style={{ cursor: 'pointer' }}
              onClick={gotoTweet(tweet.user.screen_name, tweet.id_str)}
            >
              {tweet.text}
            </div>
          }
        />
      </Skeleton>
    </Card>
  );
};
export default Tweet;
