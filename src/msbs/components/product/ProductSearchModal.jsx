/* eslint-disable react/require-default-props */
import React from 'react';
import PropTypes from 'prop-types';
import { Modal, Table } from 'antd';

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

  const productSearchCol = [
    {
      title: 'Product',
      dataIndex: 'name',
      key: 'name',
      sorter: (a, b) => a.name.localeCompare(b.name),
    },
    {
      title: 'Category',
      dataIndex: 'catg',
      key: 'catg',
      sorter: (a, b) => a.catg.localeCompare(b.catg),

    },
    {
      title: 'Class',
      key: 'class',
      dataIndex: 'class',
      sorter: (a, b) => a.class?.localeCompare(b.class),
    },
  ];
  let curProduct;
  return (
    <>
      <Modal
        title="Search"
        destroyOnClose
        visible={visible}
        onOk={onSelectedProduct(curProduct)}
        onCancel={onClose(false)}
        focusTriggerAfterClose
      >
        <Table
          size="small"
          columns={productSearchCol}
          bordered
          dataSource={productList}
          tableLayout="auto"
          onRow={(record) => ({
            onClick: () => {
              curProduct = record;
            },
            onDoubleClick: () => {
              onSelectedProduct(record);
            },
          })}
        />
      </Modal>
    </>
  );
};

ProductSearchModal.propTypes = propsType;
ProductSearchModal.defaultProps = defaultProps;
export default ProductSearchModal;
