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
import { MENU_ITEMS } from '../common/SharedTypes';

const propsType = {
  selectedMenu: PropTypes.func,
};
const { Sider } = Layout;
const { SubMenu } = Menu;

const defaultProps = {
  selectedMenu: () => {},
};

const SideMenu = (props) => {
  const { selectedMenu } = props;
  const [isCollapsed, setIsCollapsed] = useState(1);

  return (
    <Sider
      collapsible
      collapsed={isCollapsed}
      onCollapse={() => setIsCollapsed((prevIsCollapsed) => !prevIsCollapsed)}
    >
      <div />
      <Menu theme="dark" defaultSelectedKeys={['1']} mode="inline" multiple={false} onSelect={(e) => selectedMenu(e.key)}>
        <Menu.Item key={MENU_ITEMS.MAIN_HOME} icon={<HomeOutlined />}>
          Home
        </Menu.Item>
        <Menu.Item key={MENU_ITEMS.MAIN_PRODUCTIONS} icon={<TableOutlined />}>
          Productions
        </Menu.Item>
        <Menu.Item key={MENU_ITEMS.MAIN_WAREHOUSE} icon={<ShopOutlined />}>
          Warehouse
        </Menu.Item>
        <Menu.Item key={MENU_ITEMS.MAIN_SALES} icon={<ShoppingCartOutlined />}>
          Sales
        </Menu.Item>
        <Menu.Item key={MENU_ITEMS.MAIN_LEDGER} icon={<BookOutlined />}>
          Ledger
        </Menu.Item>
        <SubMenu key={MENU_ITEMS.MAIN_PRSNL} icon={<TeamOutlined />} title="Personnel">
          <Menu.Item key={MENU_ITEMS.SUB_PRSNL_SETTING}>Setting</Menu.Item>
          <Menu.Item key={MENU_ITEMS.SUB_PRSNL_PRSNL}>Personnel</Menu.Item>
        </SubMenu>
        <SubMenu key={MENU_ITEMS.MAIN_REPORTS} icon={<LineChartOutlined />} title="Reports">
          <Menu.Item key={MENU_ITEMS.SUB_REPORTS_PRODUCTIONS}>Productions</Menu.Item>
          <Menu.Item key={MENU_ITEMS.SUB_REPORTS_WAREHOUSE}>Warehouse</Menu.Item>
          <Menu.Item key={MENU_ITEMS.SUB_REPORTS_SALES}>Sales</Menu.Item>
        </SubMenu>
      </Menu>
    </Sider>
  );
};

SideMenu.propTypes = propsType;
SideMenu.defaultProps = defaultProps;
export default SideMenu;
