import React from 'react';
import { PageHeader } from 'antd';
import PXlogo from '../../logo/Logo.png';

const LedgerSummaryView = function() {

  return(
    <div>
      <PageHeader title="Ledger" subTitle="Money transaction" avatar={{ src:PXlogo }} style={{borderBottom: '1px solid #e8792e', borderTop: '1px solid #e8792e'}} />
    </div>
    );

}
export default LedgerSummaryView;