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
  user: PropTypes.object,

  selectedMenu: PropTypes.func

}
const { Sider } = Layout;
const { SubMenu } = Menu;

const defaultProps = {
  selectedMenu: () => {},
};

const SideMenu = (props) => {
  const { user, selectedMenu} = props;
  const [ isCollapsed, setIsCollapsed ] = useState( 1 )

  return (
    <Sider collapsible collapsed={isCollapsed} onCollapse={() => setIsCollapsed(prevIsCollapsed => !prevIsCollapsed )}>
      <div/>
      <Menu theme="dark" defaultSelectedKeys={['1']} mode="inline" multiple={false}>
        <Menu.Item key="Home" icon={<HomeOutlined />}>
          Home
        </Menu.Item>
        <Menu.Item key="Productions" icon={<TableOutlined />}>
          Productions
        </Menu.Item>
        <Menu.Item key="Warehouse" icon={<ShopOutlined />}>
          Warehouse
        </Menu.Item>
        <Menu.Item key="Sales" icon={<ShoppingCartOutlined />}>
          Sales
        </Menu.Item>
        <Menu.Item key="Ledger" icon={<BookOutlined />}>
          Ledger
        </Menu.Item>
        <SubMenu key="Prsnl" icon={<TeamOutlined />} title="Personnel">
          <Menu.Item key="Prsnl-Setting">Setting</Menu.Item>
          <Menu.Item key="Prsnl-Prsnl">Personnel</Menu.Item>
        </SubMenu>
        <SubMenu key="Reports" icon={<LineChartOutlined />} title="Reports">
          <Menu.Item key="Rpt-Productions">Productions</Menu.Item>
          <Menu.Item key="Rpt-Warehouse">Warehouse</Menu.Item>
          <Menu.Item key="Rpt-Sales">Sales</Menu.Item>
        </SubMenu>
      </Menu>
    </Sider>
  )
}

SideMenu.propTypes = propsType;
SideMenu.defaultProps = defaultProps;
export default SideMenu;