import React from 'react';
import PropTypes from 'prop-types';
import { Layout, Menu, Breadcrumb } from 'antd';

const { Header, Content, Footer } = Layout;
const AppLayout = ({ children }) => {
  return (
    <Layout className="layout" style={{}}>
      <Header>
        <div className="logo"> </div>
        <Menu
          theme="dark"
          mode="horizontal"
          defaultSelectedKeys={['2']}
          style={{ lineHeight: '64px' }}
        >
          <Menu.Item key="1">TweetDeck</Menu.Item>
        </Menu>
      </Header>
      <Content style={{ padding: '0 50px' }}>
        <br />
        <div style={{ background: '#fff', padding: 1 }}>{children}</div>
      </Content>
      <Footer style={{ textAlign: 'center' }} />
    </Layout>
  );
};
AppLayout.propTypes = {
  children: PropTypes.node.isRequired,
};
export default AppLayout;
