import {
  Button, Col, DatePicker, Input, InputNumber, Row, Select, Table, Tabs, Typography,
} from 'antd';
import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { EditFilled, GoldFilled, PlusSquareTwoTone } from '@ant-design/icons';
import moment from 'moment';
import ProductSearchModal from '../product/ProductSearchModal';

const { Text } = Typography;
const { Search } = Input;
const { Option } = Select;
const { TabPane } = Tabs;

const propsType = {
  // eslint-disable-next-line react/require-default-props
  productList: PropTypes.arrayOf(PropTypes.object),
};

const ProductionsModifyView = (props) => {
  const { productList } = props;

  const [modalVisible, setModalVisible] = useState(false);
  const [productionProduct, setProductionProduct] = useState({});

  const onSelectedProduct = (product) => {
    if (product) {
      setProductionProduct(product);
      setModalVisible(false);
    }
  };

  const onClose = (closeFlag) => {
    setModalVisible(closeFlag);
  };

  const modalContorl = () => {
    setModalVisible((prevModalVisible) => !prevModalVisible);
  };

  const resourceInput = [
    {
      title: 'Date',
      dataIndex: 'trans_date',
      key: 'trans_date',
      sorter: (a, b) => moment(a.trans_date || 0).unix() - moment(b.trans_date || 0).unix(),
    },
    {
      title: 'Product',
      dataIndex: 'product',
      key: 'product',
      sorter: (a, b) => a.product.localeCompare(b.product),
    },
    {
      title: 'Qty',
      dataIndex: 'qty',
      key: 'qty',
      sorter: (a, b) => a.qty.localeCompare(b.qty),

    },
    {
      title: 'Total Amount',
      key: 'total_price',
      dataIndex: 'total_price',
      sorter: (a, b) => a.unit_price?.localeCompare(b.unit_price),

    },
  ];

  return (
    <>
      <Tabs defaultActiveKey="1">
        <TabPane
          tab={(
            <span>
              <EditFilled />
              Details
            </span>
)}
          key="1"
        >
          <Row gutter={[8, 16]}>
            <Col span={20}>
              <Text>Production Name</Text>
              <Input style={{ width: '100%' }} placeholder="Production Name" />
            </Col>
          </Row>
          <Row gutter={[8, 16]}>
            <Col span={10}>
              <Text>Product</Text>
              <Search style={{ width: '100%' }} placeholder="Product Search" allowClear onSearch={modalContorl} value={productionProduct?.name} />
            </Col>
            <Col span={10}>
              <Text>Production Supervisor</Text>
              <Search style={{ width: '100%' }} placeholder="Personnel Search" allowClear onSearch={modalContorl} />
            </Col>
          </Row>
          <Row gutter={[8, 16]}>
            <Col span={10}>
              <Text>Start Date</Text>
              <DatePicker style={{ width: '100%' }} />
            </Col>
            <Col span={10}>
              <Text>Production Season</Text>
              <Select style={{ width: '100%' }} placeholder="Select Season">
                <Option value="1">Flooded</Option>
                <Option value="2">Rainy</Option>
                <Option value="3">Summer</Option>
              </Select>
            </Col>
          </Row>
          <Row gutter={[8, 16]}>
            <Col span={10}>
              <Text>Production Type</Text>
              <Select style={{ width: '100%' }} placeholder="Select Type">
                <Option value="1">Contractor</Option>
                <Option value="2">Own</Option>
              </Select>
            </Col>
            <Col span={10}>
              <Text>Contractor</Text>
              <Search style={{ width: '100%' }} placeholder="Contractor Search" allowClear onSearch={modalContorl} />
            </Col>
          </Row>
          <Row gutter={[8, 16]}>
            <Col span={10}>
              <Text>Location</Text>
              <Search style={{ width: '100%' }} placeholder="Location Search" allowClear onSearch={modalContorl} />
            </Col>
            <Col span={10}>
              <Text>Production Area (Acre)</Text>
              <InputNumber style={{ width: '100%' }} min={0} max={10000} size="middle" />
            </Col>
          </Row>
        </TabPane>
        <TabPane
          tab={(
            <span>
              <GoldFilled />
              Resource Input
            </span>
)}
          key="2"
        >
          <Row gutter={[8, 16]}>
            <Col span={10}>
              <Text>Product</Text>
              <Search style={{ width: '100%' }} placeholder="Product Search" allowClear onSearch={modalContorl} />
            </Col>
            <Col span={10}>
              <Text>Transaction Date</Text>
              <DatePicker style={{ width: '100%' }} />
            </Col>
          </Row>
          <Row gutter={[8, 16]}>
            <Col span={8}>
              <Text>Unit Price</Text>
              <InputNumber style={{ width: '100%' }} min={0} size="middle" />
            </Col>
            <Col span={4}>
              <Text>Quantity </Text>
              <InputNumber style={{ width: '100%' }} min={0} size="middle" />
            </Col>
            <Col span={8}>
              <Text>Total Amount</Text>
              <InputNumber style={{ width: '100%' }} disabled size="middle" />
            </Col>
          </Row>
          <Row gutter={[8, 16]}>
            <Col span={10}>
              <Text>Requested By</Text>
              <Search style={{ width: '100%' }} placeholder="Personnel Search" allowClear onSearch={modalContorl} />
            </Col>
            <Col span={10}>
              <Text>Authorized By</Text>
              <Search style={{ width: '100%' }} placeholder="Personnel Search" allowClear onSearch={modalContorl} />
            </Col>
          </Row>
          <Row gutter={[8, 16]}>
            <Col span={20} style={{ textAlign: 'right' }}>
              <Button icon={<PlusSquareTwoTone />} onClick={console.log('Added')} type="small">
                Add
              </Button>
            </Col>
          </Row>
          <Table size="small" columns={resourceInput} bordered tableLayout="auto" />
        </TabPane>
      </Tabs>
      <ProductSearchModal
        productList={productList}
        onSelectedProduct={onSelectedProduct}
        visible={modalVisible}
        onClose={onClose}
      />
    </>
  );
};

ProductionsModifyView.propTypes = propsType;
export default ProductionsModifyView;
