import React, { useState } from 'react';
import { PageHeader, Table, Tag, Drawer, Button, Divider, Tabs,
  Typography, Input, Row, Col, Select, Modal, InputNumber, DatePicker} from 'antd';
import { production_list } from './Production.mock'
import PXlogo from '../../logo/Logo.png';
import moment from 'moment';
import '../common.css';
import { LockFilled, AppstoreAddOutlined, PlusSquareTwoTone, GoldFilled, EditFilled } from '@ant-design/icons';

const { Text } = Typography;
const { Search } = Input;
const { Option } = Select;
const { TabPane } = Tabs;

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
            <Button disabled onClick={drawerContorl} type="primary">
              Save
            </Button>
          </div>
        }
      >
        <Tabs defaultActiveKey="1">
          <TabPane tab={<span><EditFilled />Details</span>} key="1">
            <Row gutter={[8, 16]}>
              <Col span={20}>
                <Text>Production Name</Text>
                <Input style={{width:'100%'}}  placeholder="Production Name"/>
              </Col>
            </Row>
            <Row gutter={[8, 16]}>
              <Col span={10}>
                <Text>Product</Text>
                <Search style={{width:'100%'}} placeholder="Product Search" allowClear onSearch={modalContorl} />
              </Col>
              <Col span={10}>
                <Text>Production Supervisor</Text>
                <Search style={{width:'100%'}} placeholder="Personnel Search" allowClear onSearch={modalContorl} />
              </Col>
            </Row>
            <Row gutter={[8, 16]}>
              <Col span={10}>
                <Text>Start Date</Text>
                <DatePicker style={{width:'100%'}} />
              </Col>
              <Col span={10}>
                <Text>Production Season</Text>
                <Select style={{width:'100%'}} placeholder="Select Season">
                  <Option value="1">Flooded</Option>
                  <Option value="2">Rainy</Option>
                  <Option value="3">Summer</Option>
                </Select>
              </Col>
            </Row>
            <Row gutter={[8, 16]}>
              <Col span={10}>
                <Text>Production Type</Text>
                <Select style={{width:'100%'}} placeholder="Select Type" >
                  <Option value="1">Contractor</Option>
                  <Option value="2">Own</Option>
                </Select>
              </Col>
              <Col span={10}>
                <Text>Contractor</Text>
                <Search style={{width:'100%'}} placeholder="Contractor Search" allowClear onSearch={modalContorl} />
              </Col>
            </Row>
            <Row gutter={[8, 16]}>
              <Col span={10}>
                <Text>Location</Text>
                <Search style={{width:'100%'}} placeholder="Location Search" allowClear onSearch={modalContorl} />
              </Col>
              <Col span={10}>
                <Text>Production Area (Acre)</Text>
                <InputNumber style={{width:'100%'}} min={0} max={10000} size="middle"/>
              </Col>
            </Row>
          </TabPane>
          <TabPane tab={<span><GoldFilled />Resource Input</span>} key="2">
            <Row gutter={[8, 16]}>
              <Col span={10}>
                <Text>Product</Text>
                <Search style={{width:'100%'}} placeholder="Product Search" allowClear onSearch={modalContorl} />
              </Col>
              <Col span={10}>
                <Text>Transaction Date</Text>
                <DatePicker style={{width:'100%'}} />
              </Col>
            </Row>
            <Row gutter={[8, 16]}>
              <Col span={8}>
                <Text>Unit Price</Text>
                <InputNumber style={{width:'100%'}} min={0} size="middle" />
              </Col>
              <Col span={4}>
                <Text>Quantity </Text>
                <InputNumber style={{width:'100%'}}  min={0} size="middle"/>
              </Col>
              <Col span={8}>
                <Text>Total Amount</Text>
                <InputNumber style={{width:'100%'}} disabled size="middle"/>
              </Col>
            </Row>
            <Row gutter={[8, 16]}>
              <Col span={10}>
                <Text>Requested By</Text>
                <Search style={{width:'100%'}} placeholder="Personnel Search" allowClear onSearch={modalContorl} />
              </Col>
              <Col span={10}>
                <Text>Authorized By</Text>
                <Search style={{width:'100%'}} placeholder="Personnel Search" allowClear onSearch={modalContorl} />
              </Col>
            </Row>
            <Row gutter={[8, 16]}>
              <Col span={20} style={{textAlign:'right'}}>
                <Button icon={<PlusSquareTwoTone /> }  onClick={console.log("Added")} type="small">
                  Add
                </Button>
              </Col>
            </Row>

            <Table size="small" columns={resourceInput} bordered={true}  tableLayout='auto' />
          </TabPane>
        </Tabs>
      </Drawer>
    </div>
    );
}
export default ProductionsSummaryView;