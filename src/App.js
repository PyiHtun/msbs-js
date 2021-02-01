import React from 'react';
import { Layout, Avatar } from 'antd';
import SideMenu from './msbs/components/menu/SideMenu';
import PXlogo from './msbs/logo/Logo.png';

const { Header, Content } = Layout;

function App() {

  return (
    <>
      <Layout style={{ minHeight: '100vh' }}>
        <SideMenu />
        <Layout>
          <Header style={{ background: 'white', paddingLeft: '4px', paddingTop: '0', fontSize: '20px',
            borderBottom: '1px solid #f0f0f0'}}>
            <Avatar
              size={{ xs: 15, sm: 25, md: 40, lg: 40, xl: 50, xxl: 50 }}
              src={PXlogo}
            /> {'  Multi-tenant Seed Business Solution'}
          </Header>
          <Content style={{ background: 'white'}}>
          </Content>
        </Layout>
      </Layout>
    </>
  );
}

export default App;
