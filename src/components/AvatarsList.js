import React from 'react';
import { Avatar, List } from 'antd';
import TwitterLink from './TwitterLink';

const AvatarsList = ({ users }) => {
  return (
    <List
      itemLayout="horizontal"
      dataSource={users}
      renderItem={item => (
        <List.Item>
          <List.Item.Meta
            avatar={
              <Avatar src={`http://avatars.io/twitter/${item.screen_name}`} />
            }
            title={
              <TwitterLink handle={item.screen_name}>
                {item.screen_name}
              </TwitterLink>
            }
            description={item.name}
          />
        </List.Item>
      )}
    />
  );
};
export default AvatarsList;
