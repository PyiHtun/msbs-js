/* eslint-disable react/require-default-props */
import React, { useState, useRef } from 'react';
import PropTypes from 'prop-types';
import {
  Modal, Table, Input, Button, Space,
} from 'antd';
import { SearchOutlined } from '@ant-design/icons';
import Highlighter from 'react-highlight-words';

const propsType = {
  sourceDataList: PropTypes.arrayOf(PropTypes.object),
  columnsList: PropTypes.arrayOf(PropTypes.object),
  onSelectionConfirm: PropTypes.func,
  visible: PropTypes.bool,
  onClose: PropTypes.func,
};

const defaultProps = {
  onSelectionConfirm: () => {},
  onClose: () => {},
};

const SearchModal = (props) => {
  const {
    sourceDataList, columnsList, onSelectionConfirm, visible, onClose,
  } = props;

  const [searchText, setSearchText] = useState('');
  const [searchColumn, setSearchColumn] = useState('');
  const [selectedRecord, setSelectedRecord] = useState(undefined);

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

  const columns = () => {
    if (!columnsList || !columnsList.length) {
      return [];
    }

    return columnsList.map((obj) => ({
      title: obj.title,
      key: obj.key,
      sorter: obj.sorter ? (a, b) => a[obj.key].localeCompare(b[obj.key]) : undefined,
      ...(obj.search ? getColumnSearchProps(obj.key) : undefined),
    }));
  };

  const rowSelection = {
    onChange: (selectedRowKeys, selectedRows) => {
      setSelectedRecord(selectedRows.length ? selectedRows[0] : {});
    },
    getCheckboxProps: (record) => ({
      name: record.name,
    }),
  };

  const handleClickOK = () => {
    onSelectionConfirm(selectedRecord);
  };

  return (
    <>
      <Modal
        title="Search"
        destroyOnClose
        visible={visible}
        onOk={handleClickOK}
        onCancel={onClose}
        style={{ top: 20 }}
        okButtonProps={{ disabled: (!selectedRecord) }}
      >
        <Table
          rowSelection={{
            type: 'radio',
            ...rowSelection,
          }}
          size="small"
          columns={columns}
          bordered
          dataSource={sourceDataList}
          tableLayout="auto"

        />
      </Modal>
    </>
  );
};

SearchModal.propTypes = propsType;
SearchModal.defaultProps = defaultProps;
export default SearchModal;
