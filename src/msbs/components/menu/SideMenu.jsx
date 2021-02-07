import React, { useState } from 'react';
import { Layout, Menu } from 'antd';
import PropTypes from 'prop-types';
import 'antd/dist/antd.css';

import {
  HomeOutlined,
  TableOutlined,
  BookOutlined,
  LineChartOutlined,
  TeamOutlined,
  ShoppingCartOutlined,
  ShopOutlined,
} from '@ant-design/icons';

const propsType = {
  selectedMenu: PropTypes.func.isRequired
}
const { Sider } = Layout;
const { SubMenu } = Menu;

const defaultProps = {
  selectedMenu: () => {},
};

const SideMenu = (props) => {
  const selectedMenu = props.selectedMenu;
  const [ isCollapsed, setIsCollapsed ] = useState( 1 )

  return (
    <Sider collapsible collapsed={isCollapsed} onCollapse={() => setIsCollapsed(prevIsCollapsed => !prevIsCollapsed )}>
      <div/>
      <Menu theme="dark" defaultSelectedKeys={['1']} mode="inline" multiple={false} onSelect={(e) => selectedMenu(e.key)}>
        <Menu.Item key="home" icon={<HomeOutlined />}>
          Home
        </Menu.Item>
        <Menu.Item key="productions" icon={<TableOutlined />}>
          Productions
        </Menu.Item>
        <Menu.Item key="warehouse" icon={<ShopOutlined />}>
          Warehouse
        </Menu.Item>
        <Menu.Item key="sales" icon={<ShoppingCartOutlined />}>
          Sales
        </Menu.Item>
        <Menu.Item key="ledger" icon={<BookOutlined />}>
          Ledger
        </Menu.Item>
        <SubMenu key="prsnl" icon={<TeamOutlined />} title="Personnel">
          <Menu.Item key="prsnlSetting">Setting</Menu.Item>
          <Menu.Item key="prsnlPrsnl">Personnel</Menu.Item>
        </SubMenu>
        <SubMenu key="reports" icon={<LineChartOutlined />} title="Reports">
          <Menu.Item key="reportProductions">Productions</Menu.Item>
          <Menu.Item key="reportWarehouse">Warehouse</Menu.Item>
          <Menu.Item key="reportSales">Sales</Menu.Item>
        </SubMenu>
      </Menu>
    </Sider>
  )
}

SideMenu.propTypes = propsType;
SideMenu.defaultProps = defaultProps;
export default SideMenu;