import React from 'react';
import PropTypes from 'prop-types';
import renderIf from 'render-if';
import { Layout, Menu, Breadcrumb, Drawer, Spin, Icon } from 'antd';
import Preferences from '../containers/Preferences';
const { Header, Content, Footer } = Layout;
const AppLayout = ({
  children,
  handleMenuClick,
  isPreferencesVisible,
  handlePreferenceClose,
  preferences,
}) => {
  return (
    <Layout className="layout" style={{}}>
      <Header>
        <div className="logo"> </div>
        <Menu
          onClick={handleMenuClick}
          theme="dark"
          mode="horizontal"
          defaultSelectedKeys={['2']}
          style={{ lineHeight: '64px' }}
        >
          <Menu.Item key="home">TweetDeck</Menu.Item>
          <Menu.Item key="preferences">
            <Icon type="setting" />
          </Menu.Item>
        </Menu>
      </Header>
      <Content
        style={{
          padding: '0 50px',
          background:
            preferences.theme === 'default' ? '#1da1f2' : preferences.theme,
        }}
      >
        <br />
        <div style={{ background: '#fff' }}>{children}</div>
        <Drawer
          width={500}
          title="Preferences"
          placement="right"
          closable={false}
          onClose={handlePreferenceClose}
          visible={isPreferencesVisible}
        >
          <Preferences />
        </Drawer>
      </Content>
      <Footer style={{ textAlign: 'center' }} />
    </Layout>
  );
};
AppLayout.defaultProps = {
  children: <div />,
  preferences: {
    theme: 'default',
  },
};
AppLayout.propTypes = {
  children: PropTypes.node,
};
export default AppLayout;
