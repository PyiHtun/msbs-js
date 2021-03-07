/* eslint-disable */
import React, { useState } from 'react';
import {
  PageHeader, Table, Tag, Drawer, Button,
} from 'antd';

import moment from 'moment';
import '../common.css';
import { LockFilled, AppstoreAddOutlined } from '@ant-design/icons';
import PXlogo from '../../logo/Logo.png';
import ProductionModifyView from './ProductionModifyView';

// TODO need create mock class
import productionList from './Production.mock';
import productList from '../product/ProductList.mock';

const ProductionsSummaryView = function () {
  const [drawerVisible, setDrawerVisible] = useState(false);

  const drawerContorl = () => {
    setDrawerVisible((prevDrawerVisible) => !prevDrawerVisible);
  };

  // const onSearch = () => {};

  const columns = [
    {
      title: 'Production',
      dataIndex: 'production',
      key: 'production',
      sorter: (a, b) => a.production.localeCompare(b.production),
      // render: text => <a>{text}</a>,
    },
    {
      title: 'Start Date',
      dataIndex: 'start_date',
      key: 'start_date',
      sorter: (a, b) => moment(a.start_date || 0).unix() - moment(b.start_date || 0).unix(),
    },
    {
      title: 'Product',
      dataIndex: 'product',
      key: 'product',
      sorter: (a, b) => a.product.localeCompare(b.product),

    },
    {
      title: 'Type',
      dataIndex: 'prod_type',
      key: 'prod_type',
      sorter: (a, b) => a.prod_type.localeCompare(b.prod_type),

    },
    {
      title: 'Status',
      key: 'prod_status',
      dataIndex: 'prod_status',
      sorter: (a, b) => a.prod_status.localeCompare(b.prod_status),
      render: (prod_status) => (
        <>
          <Tag color={prod_status == 'Completed' ? 'green' : 'volcano'} key={prod_status}>
            {prod_status.toUpperCase()}
          </Tag>
        </>
      ),
    },
    {
      title: 'Contract Farmer',
      key: 'contractor_name',
      dataIndex: 'contractor_name',
      sorter: (a, b) => a.contractor_name?.localeCompare(b.contractor_name),

    },
    {
      title: 'Supervisor',
      key: 'supervisor_name',
      dataIndex: 'supervisor_name',
      sorter: (a, b) => a.supervisor_name?.localeCompare(b.supervisor_name),

    },
  ];

  const personnelSearchCols = [
    {
      title: 'Production',
      dataIndex: 'production',
      key: 'production',
      sorter: (a, b) => a.production.localeCompare(b.production),
      // render: text => <a>{text}</a>,
    },
    {
      title: 'Start Date',
      dataIndex: 'start_date',
      key: 'start_date',
      sorter: (a, b) => moment(a.start_date || 0).unix() - moment(b.start_date || 0).unix(),
    },
  ];

  const productSearchCols = [
    {
      title: 'Production',
      dataIndex: 'production',
      key: 'production',
      sorter: (a, b) => a.production.localeCompare(b.production),
      // render: text => <a>{text}</a>,
    },
    {
      title: 'Start Date',
      dataIndex: 'start_date',
      key: 'start_date',
      sorter: (a, b) => moment(a.start_date || 0).unix() - moment(b.start_date || 0).unix(),
    },
  ];

  return (
    <div>
      <PageHeader
        title="Productions"
        subTitle="Productions Summary"
        avatar={{ src: PXlogo }}
        style={{ borderBottom: '1px solid #e8792e', borderTop: '1px solid #e8792e' }}
        extra={[
          <Button key="1" icon={<AppstoreAddOutlined />} onClick={drawerContorl}>New Production</Button>,
          <Button key="2" icon={<LockFilled />} onClick={drawerContorl}>Add Transaction</Button>,
        ]}
      />
      <Table
        size="small"
        columns={columns}
        bordered
        dataSource={productionList}
        tableLayout="auto"
        onRow={(record, rowIndex) => ({
          onClick: (event) => {
            drawerContorl();
          }, // click row
        })}
      />
      {/* <Modal title="Search" visible={modalVisible} onOk={modalContorl} onCancel={modalContorl}> */}
      {/* </Modal> */}
      <Drawer
        destroyOnClose
        title="Create a production"
        width={520}
        onClose={drawerContorl}
        visible={drawerVisible}
        bodyStyle={{ paddingBottom: 80 }}
        footer={(
          <div
            style={{
              textAlign: 'right',
            }}
          >
            <Button onClick={drawerContorl} style={{ marginRight: 8 }}>
              Cancel
            </Button>
            <Button disabled onClick={drawerContorl} type="primary">
              Save
            </Button>
          </div>
        )}
      >
        <ProductionModifyView productList={productList} />
      </Drawer>
    </div>
  );
};
export default ProductionsSummaryView;
