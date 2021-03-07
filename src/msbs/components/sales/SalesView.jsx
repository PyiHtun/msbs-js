/* eslint-disable func-names */
import React from 'react';
import { PageHeader } from 'antd';
import PXlogo from '../../logo/Logo.png';

const SalesView = function () {
  return (
    <div>
      <PageHeader title="Sales" subTitle="Point of sales" avatar={{ src: PXlogo }} style={{ borderBottom: '1px solid #e8792e', borderTop: '1px solid #e8792e' }} />
    </div>
  );
};
export default SalesView;
