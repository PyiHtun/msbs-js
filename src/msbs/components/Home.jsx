import React from 'react';
import { PageHeader } from 'antd';
import PXlogo from '../logo/Logo.png';

const Home = function() {

  return(
    <div>
      <PageHeader title="Home" subTitle="Multi-tanent Seed Business Solution" avatar={{ src:PXlogo }} style={{borderBottom: '1px solid #e8792e', borderTop: '1px solid #e8792e'}} />
    </div>
    );

}
export default Home;