/* eslint-disable func-names */
import React from 'react';
import { PageHeader } from 'antd';
import PXlogo from '../../logo/Logo.png';

const WarehouseSummaryView = function () {
  return (
    <div>
      <PageHeader title="Warehouse" subTitle="Warehouse Summary" avatar={{ src: PXlogo }} style={{ borderBottom: '1px solid #e8792e', borderTop: '1px solid #e8792e' }} />
    </div>
  );
};
export default WarehouseSummaryView;
