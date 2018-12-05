import React from 'react';
import { Skeleton, Switch, Card, Icon, Avatar } from 'antd';

const { Meta } = Card;

const Tweet = () => {
  return (
    <Card style={{}} actions={[<Icon type="setting" />, <Icon type="edit" />]}>
      <Skeleton loading={false} avatar active>
        <Meta
          avatar={
            <Avatar src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />
          }
          title="Card title"
          description="This is the description"
        />
      </Skeleton>
    </Card>
  );
};
export default Tweet;
