import React, { useState } from 'react';
import { Layout, Typography } from 'antd';
import SideMenu from './msbs/components/menu/SideMenu';
import ProductionsSummaryView from './msbs/components/productions/ProductionsSummaryView';
import WarehouseSummaryView from './msbs/components/warehouse/WarehouseSummaryView';
import SalesView from './msbs/components/sales/SalesView';
import LedgerSummaryView from './msbs/components/ledger/LedgerSummaryView';
import Home from './msbs/components/Home';
import { MENU_ITEMS } from './msbs/components/common/SharedTypes';

const { Header, Content } = Layout;
const { Title } = Typography;

function App() {
  const [currentContent, setCurrentContent] = useState(MENU_ITEMS.MAIN_HOME);

  const handleMenuSelection = (menuKey) => {
    setCurrentContent(menuKey);
  };
  let contentToDisplay;
  switch (currentContent) {
    case MENU_ITEMS.MAIN_PRODUCTIONS:
      contentToDisplay = <ProductionsSummaryView />;
      break;
    case MENU_ITEMS.MAIN_WAREHOUSE:
      contentToDisplay = <WarehouseSummaryView />;
      break;
    case MENU_ITEMS.MAIN_SALES:
      contentToDisplay = <SalesView />;
      break;
    case MENU_ITEMS.MAIN_LEDGER:
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
          <Header style={{ background: 'white', maxHeight: '34px', textAlign: 'center' }}>
            <Title level={4} style={{ color: '#041527' }}>
              <text type="secondary"> Seed Business Solution</text>
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
