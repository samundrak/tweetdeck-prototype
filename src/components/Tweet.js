import React from 'react';
import { Skeleton, Switch, Card, Icon, Avatar } from 'antd';
import TwitterLink from './TwitterLink';

const { Meta } = Card;

const Tweet = ({ tweet }) => {
  return (
    <Card style={{}}>
      <Skeleton loading={false} avatar active>
        <Meta
          avatar={<Avatar src={tweet.user.profile_image_url} />}
          title={<TwitterLink handle={tweet.user.screen_name} />}
          description={tweet.text}
        />
      </Skeleton>
    </Card>
  );
};
export default Tweet;
