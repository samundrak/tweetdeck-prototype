import React from 'react';
import { Avatar, List } from 'antd';
import PropTypes from 'prop-types';
import TwitterLink from './TwitterLink';

const AvatarsList = ({ users }) => (
  <List
    itemLayout="horizontal"
    dataSource={users}
    renderItem={item => (
      <List.Item>
        <List.Item.Meta
          avatar={<Avatar src={`http://avatars.io/twitter/${item.screen_name}`} />}
          title={<TwitterLink handle={item.screen_name}>{item.screen_name}</TwitterLink>}
          description={item.name}
        />
      </List.Item>
    )}
  />
);
AvatarsList.propTypes = {
  users: PropTypes.array.isRequired,
};
export default AvatarsList;
