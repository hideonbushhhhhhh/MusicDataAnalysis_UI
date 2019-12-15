import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { renderRoutes } from 'react-router-config';
import { menuConfig } from '../../router/config';
import { Layout, Menu, Icon } from 'antd';
const { Header, Sider, Content } = Layout;

function Manage (props) {

  const [collapsed, setCollapsed] = useState(false);

  function toggle () {
    setCollapsed(!collapsed);
  }

  return (
    <Layout>
      <Sider trigger={null} collapsible collapsed={collapsed} style={{ flex: ' 0 0 256px' }}>
        <div className="logo">ranck admin</div>
        <Menu theme="dark" mode="inline" defaultSelectedKeys={[props.location.pathname]}>
          {
            menuConfig.map(menu =>
              <Menu.Item key={menu.path}>
                <Link to={menu.path}>
                  <Icon type={menu.icon} />
                  <span>{menu.title}</span>
                </Link>
              </Menu.Item>)
          }
        </Menu>
      </Sider>
      <Layout style={{ minHeight: '100vh' }}>
        <Header style={{ background: '#fff', padding: 0 }}>
          <Icon
            className="trigger"
            type={collapsed ? 'menu-unfold' : 'menu-fold'}
            onClick={toggle}
          />
        </Header>
        <Content
          style={{
            margin: '24px 16px',
            padding: 24,
            background: '#fff',
          }}
        >
          {renderRoutes(menuConfig)}
        </Content>
      </Layout>
    </Layout>
  );
}

export default Manage;
