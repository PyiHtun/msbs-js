import React, { useState } from 'react';
import { Layout, Typography } from 'antd';
import SideMenu from './msbs/components/menu/SideMenu';
import ProductionsSummaryView from './msbs/components/productions/ProductionsSummaryView';
import WarehouseSummaryView from './msbs/components/warehouse/WarehouseSummaryView';
import SalesView from './msbs/components/sales/SalesView';
import LedgerSummaryView from './msbs/components/ledger/LedgerSummaryView';
import Home from './msbs/components/Home';

const { Header, Content } = Layout;
const { Title } = Typography;

function App() {
  const [currentContent, setCurrentContent] = useState('Home');

  const handleMenuSelection = (menuKey) => {
    setCurrentContent(menuKey);
    console.log(menuKey);
  };
  let contentToDisplay;
  switch (currentContent) {
    case 'productions':
      contentToDisplay = <ProductionsSummaryView />;
      break;
    case 'warehouse':
      contentToDisplay = <WarehouseSummaryView />;
      break;
    case 'sales':
      contentToDisplay = <SalesView />;
      break;
    case 'ledger':
      contentToDisplay = <LedgerSummaryView />;
      break;
    default:
      contentToDisplay = <Home />;
  }

  return (
    <>
      <Layout style={{ minHeight: '100vh' }}>
        <SideMenu selectedMenu={handleMenuSelection} />
        <Layout>
          <Header style={{ background: 'white', paddingLeft: '4px', maxHeight: '34px' }}>
            <Title level={4} code style={{ color: '#e8792e' }}>
              Seed Business Solution
            </Title>
          </Header>
          <Content style={{ background: 'white' }}>
            {contentToDisplay}
          </Content>
        </Layout>
      </Layout>
    </>
  );
}

export default App;
