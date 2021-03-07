/* eslint-disable react/require-default-props */
import React, { useState, useRef } from 'react';
import PropTypes from 'prop-types';
import {
  Modal, Table, Input, Button, Space,
} from 'antd';
import { SearchOutlined } from '@ant-design/icons';
import Highlighter from 'react-highlight-words';

const propsType = {
  productList: PropTypes.arrayOf(PropTypes.object),
  onSelectedProduct: PropTypes.func,
  visible: PropTypes.bool,
  onClose: PropTypes.func,
};

const defaultProps = {
  onSelectedProduct: () => {},
  onClose: () => {},
};

const ProductSearchModal = (props) => {
  const {
    productList, onSelectedProduct, visible, onClose,
  } = props;

  const [searchText, setSearchText] = useState('');
  const [searchColumn, setSearchColumn] = useState('');
  const [selectedRecord, setSelectedRecord] = useState([]);

  const nodeRef = useRef();

  const handleSearch = (selectedKeys, confirm, dataIndex) => {
    confirm();
    setSearchText(selectedKeys[0]);
    setSearchColumn(dataIndex);
  };

  const handleReset = (clearFilters) => {
    clearFilters();
    setSearchText('');
  };

  const getColumnSearchProps = (dataIndex) => ({
    filterDropdown: ({
      // eslint-disable-next-line react/prop-types
      setSelectedKeys, selectedKeys, confirm, clearFilters,
    }) => (
      <div style={{ padding: 8 }}>
        <Input
          ref={nodeRef}
          placeholder={`Search ${dataIndex}`}
          value={selectedKeys[0]}
          onChange={(e) => setSelectedKeys(e.target.value ? [e.target.value] : [])}
          onPressEnter={() => handleSearch(selectedKeys, confirm, dataIndex)}
          style={{ width: 188, marginBottom: 8, display: 'block' }}
        />
        <Space>
          <Button
            type="primary"
            onClick={() => handleSearch(selectedKeys, confirm, dataIndex)}
            icon={<SearchOutlined />}
            size="small"
            style={{ width: 90 }}
          >
            Search
          </Button>
          <Button onClick={() => handleReset(clearFilters)} size="small" style={{ width: 90 }}>
            Reset
          </Button>
        </Space>
      </div>
    ),
    filterIcon: (filtered) => <SearchOutlined style={{ color: filtered ? '#1890ff' : undefined }} />,
    onFilter: (value, record) => (record[dataIndex]
      ? record[dataIndex].toString().toLowerCase().includes(value.toLowerCase())
      : ''),
    onFilterDropdownVisibleChange: (v) => {
      if (v) {
        setTimeout(() => nodeRef.current, 100);
      }
    },
    render: (text) => (searchColumn === dataIndex ? (
      <Highlighter
        highlightStyle={{ backgroundColor: '#ffc069', padding: 0 }}
        searchWords={[searchText]}
        autoEscape
        textToHighlight={text ? text.toString() : ''}
      />
    ) : (
      text
    )),
  });

  const productSearchCol = [
    {
      title: 'Product',
      dataIndex: 'name',
      key: 'name',
      sorter: (a, b) => a.name.localeCompare(b.name),
      ...getColumnSearchProps('name'),
    },
    {
      title: 'Category',
      dataIndex: 'catg',
      key: 'catg',
      sorter: (a, b) => a.catg.localeCompare(b.catg),
      ...getColumnSearchProps('catg'),
    },
  ];

  // rowSelection object indicates the need for row selection
  const rowSelection = {
    onChange: (selectedRowKeys, selectedRows) => {
      setSelectedRecord(selectedRows);
      console.log('PH 2', selectedRecord);
      console.log('PH Row', selectedRows);
    },
    getCheckboxProps: (record) => ({
      name: record.name,
    }),
  };
  console.log('PH 3', selectedRecord);
  return (
    <>
      <Modal
        title="Search"
        destroyOnClose
        visible={visible}
        onOk={onSelectedProduct(selectedRecord)}
        onCancel={onClose}
        style={{ top: 20 }}
      >
        <Table
          rowSelection={{
            type: 'radio',
            ...rowSelection,
          }}
          size="small"
          columns={productSearchCol}
          bordered
          dataSource={productList}
          tableLayout="auto"

        />
      </Modal>
    </>
  );
};

ProductSearchModal.propTypes = propsType;
ProductSearchModal.defaultProps = defaultProps;
export default ProductSearchModal;
