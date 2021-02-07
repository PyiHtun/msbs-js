import React, { useState } from 'react';
import { PageHeader, Table, Tag, Drawer, Button, Divider, Collapse, Space,
  Typography, Input, Row, Col, Select, Modal, InputNumber, DatePicker} from 'antd';
import { production_list } from './Production.mock'
import PXlogo from '../../logo/Logo.png';
import moment from 'moment';
import '../common.css';
import { LockFilled, AppstoreAddOutlined, PlusSquareOutlined } from '@ant-design/icons';

const { Text } = Typography;
const { Search } = Input;
const { Option } = Select;
const { Panel } = Collapse;

const ProductionsSummaryView = function() {
  const [ drawerVisible, setDrawerVisible ] = useState(false);
  const [ modalVisible, setModalVisible ] = useState(false);


  const drawerContorl = () => {
    setDrawerVisible(prevDrawerVisible => !prevDrawerVisible )
  }

  const modalContorl = () => {
    setModalVisible(prevModalVisible => !prevModalVisible )
  }
  // const onSearch = () => {};

  const columns = [
    {
      title: 'Production',
      dataIndex: 'production',
      key: 'production',
      sorter: (a, b) => { return a.production.localeCompare(b.production) },
      // render: text => <a>{text}</a>,
    },
    {
      title: 'Start Date',
      dataIndex: 'start_date',
      key: 'start_date',
      sorter: (a, b) => { return moment(a.start_date || 0).unix() - moment(b.start_date || 0).unix() }
    },
    {
      title: 'Product',
      dataIndex: 'product',
      key: 'product',
      sorter: (a, b) => { return a.product.localeCompare(b.product) },

    },
    {
      title: 'Type',
      dataIndex: 'prod_type',
      key: 'prod_type',
      sorter: (a, b) => { return a.prod_type.localeCompare(b.prod_type) },

    },
    {
      title: 'Status',
      key: 'prod_status',
      dataIndex: 'prod_status',
      sorter: (a, b) => { return a.prod_status.localeCompare(b.prod_status) },
      render: prod_status => (
        <>
          <Tag color={prod_status == 'Completed' ? 'green': 'volcano'} key={prod_status}>
            {prod_status.toUpperCase()}
          </Tag>
        </>
      ),
    },
    {
      title: 'Contract Farmer',
      key: 'contractor_name',
      dataIndex: 'contractor_name',
      sorter: (a, b) => { return a.contractor_name?.localeCompare(b.contractor_name) },

    },
    {
      title: 'Supervisor',
      key: 'supervisor_name',
      dataIndex: 'supervisor_name',
      sorter: (a, b) => { return a.supervisor_name?.localeCompare(b.supervisor_name) },

    },
  ];


  const resourceInput = [
    {
      title: 'Date',
      dataIndex: 'trans_date',
      key: 'trans_date',
      sorter: (a, b) => { return moment(a.trans_date || 0).unix() - moment(b.trans_date || 0).unix() }
    },
    {
      title: 'Product',
      dataIndex: 'product',
      key: 'product',
      sorter: (a, b) => { return a.product.localeCompare(b.product) },
    },
    {
      title: 'Qty',
      dataIndex: 'qty',
      key: 'qty',
      sorter: (a, b) => { return a.qty.localeCompare(b.qty) },

    },
    {
      title: 'Total Amount',
      key: 'total_price',
      dataIndex: 'total_price',
      sorter: (a, b) => { return a.unit_price?.localeCompare(b.unit_price) },

    },
  ];



  return(
    <div>
      <PageHeader title="Productions" subTitle="Productions Summary" avatar={{ src:PXlogo }}
                  style={{borderBottom: '1px solid #e8792e', borderTop: '1px solid #e8792e'}}
                  extra={[
                    <Button key="1" icon={ <AppstoreAddOutlined /> } onClick={drawerContorl}>New Production</Button>,
                    <Button key="2" icon={ <LockFilled /> } onClick={drawerContorl}>Add Transaction</Button>,
                  ]}/>
      <Table size="small" columns={columns} bordered={true} dataSource={production_list} tableLayout='auto'
             onRow={(record, rowIndex) => {
               return {
                 onClick: event => {
                   drawerContorl();
                 }, // click row
               };
             }}
      />
      <Modal title="Search" visible={modalVisible} onOk={modalContorl} onCancel={modalContorl}>
        <p>Some contents...</p>
        <p>Some contents...</p>
        <p>Some contents...</p>
      </Modal>
      <Drawer
        destroyOnClose
        title="Create a production"
        width={720}
        onClose={drawerContorl}
        visible={drawerVisible}
        bodyStyle={{ paddingBottom: 80 }}
        footer={
          <div
            style={{
              textAlign: 'right',
            }}
          >
            <Button onClick={drawerContorl} style={{ marginRight: 8 }}>
              Cancel
            </Button>
            <Button onClick={drawerContorl} type="primary">
              Save
            </Button>
          </div>
        }
      >
        <Row gutter={[0, 16]}>
          <Col span={22}>
            <Text>Production Name<Input placeholder="Production Name"/></Text>
          </Col>
        </Row>
        <Row gutter={[16, 16]}>
          <Col span={9}>
            <Text>
              Product<Search placeholder="Product search text" allowClear onSearch={modalContorl} />
            </Text>
          </Col>
          <Col span={9}>
            <Text>
              Location<Search placeholder="Location search text" allowClear onSearch={modalContorl} />
            </Text>
          </Col>
          <Col span={6}>
            <Text>
              Farm Area (Acre)
              <InputNumber min={0} max={100} />
            </Text>
          </Col>
        </Row>
        <Row gutter={[16, 32]}>
          <Col span={6}>
            <Text>Start Date
              <DatePicker />
            </Text>
          </Col>
          <Col span={6}>
            <Text>Production Season
              <Select placeholder="Select Season">
                <Option value="1">Flooded</Option>
                <Option value="2">Rainy</Option>
                <Option value="3">Summer</Option>
              </Select>
            </Text>
          </Col>
          <Col span={6}>
            <Text>Production Type
              <Select placeholder="Select Type" >
                <Option value="1">Contractor</Option>
                <Option value="2">Own</Option>
              </Select>
            </Text>
          </Col>
          <Col span={6}>
            <Text>Production Supervisor
              <Select placeholder="Select Supervisor">
                <Option value="1">ကိုမျိုး</Option>
                <Option value="2">ကိုကိုမျိုး</Option>
                <Option value="3">ကိုမျိုးမျိုးကိုမျိုးမျိုး</Option>
              </Select>
            </Text>
          </Col>
        </Row>
        <Divider orientation="left" style={{borderColor: '#e8792e' }}>
          Resource Input
        </Divider>
        <Row gutter={[16, 32]}>
          <Col span={9}>
            <Text>
              Product<Search placeholder="Product search text" allowClear onSearch={modalContorl} />
            </Text>
          </Col>
          <Col span={6}>
            <Text>Transaction Date
              <DatePicker />
            </Text>
          </Col>
          <Col span={5}>
            <Text>
              Unit Price
              <InputNumber min={0} size="middle" />
            </Text>
          </Col>
          <Col span={4}>
            <Text>
              Quantity
              <InputNumber min={0} size="middle"/>
            </Text>
          </Col>
        </Row>

            <div
              style={{
                textAlign: 'right',
              }}
            >
              <Button icon={<PlusSquareOutlined /> } shape="circle" onClick={console.log("Added")} type="small">
              </Button>
            </div>


            <Table size="small" columns={resourceInput} bordered={true}  tableLayout='auto' />

      </Drawer>
    </div>
    );
}
export default ProductionsSummaryView;