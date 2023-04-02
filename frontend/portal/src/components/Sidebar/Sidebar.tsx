import { useState } from "react";
import { Layout, Menu } from "antd";
import {
  TwitterOutlined,
  LineChartOutlined,
  SettingOutlined,
} from "@ant-design/icons";
import type { MenuProps } from "antd";

const { Sider } = Layout;

type MenuItem = Required<MenuProps>["items"][number];

const sidebarItems: MenuItem[] = [
  {
    label: "Analysis",
    key: "analysis",
    icon: <LineChartOutlined />,
  },
  {
    label: "Twitter",
    key: "twitter",
    icon: <TwitterOutlined />,
  },
  {
    label: "Settings",
    key: "settings",
    icon: <SettingOutlined />,
  },
];

const Sidebar = () => {
  const [collapsed, setCollapsed] = useState<boolean>(true);

  return (
    <Sider
      breakpoint="lg"
      collapsible
      collapsed={collapsed}
      trigger={null}
      onBreakpoint={(broken) => {
        setCollapsed(broken);
      }}
      onCollapse={(collapsed) => {
        setCollapsed(collapsed);
      }}
      theme="light"
      width={150}
    >
      <Menu items={sidebarItems} />
    </Sider>
  );
};

export default Sidebar;
