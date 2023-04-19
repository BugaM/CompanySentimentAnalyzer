import { useState } from "react";
import { useRouter } from "next/router";
import { Layout, Menu } from "antd";
import { LineChartOutlined, SettingOutlined } from "@ant-design/icons";

const { Sider } = Layout;

interface AuthSidebarItemData {
  title: string;
  icon?: JSX.Element;
  path?: string;
  subItems?: { [key: string]: AuthSidebarItemData };
}

const authSidebarData: { [key: string]: AuthSidebarItemData } = {
  analysis: {
    title: "Analysis",
    icon: <LineChartOutlined />,
    path: "/Analysis",
  },
  settings: {
    title: "Settings",
    icon: <SettingOutlined />,
    path: "/Settings",
  },
};

function getItem(itemID: string): AuthSidebarItemData {
  const split = itemID.split("-");
  if (split.length === 1) {
    return authSidebarData[split[0]];
  }
  return (authSidebarData[split[0]].subItems || {})[split[1]];
}

const Sidebar = () => {
  const [collapsed, setCollapsed] = useState<boolean>(true);
  const router = useRouter();
  const currentRoute = router.pathname;
  const current: string[] = [];

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
      style={{ background: "#f0fffa" }}
    >
      <Menu
        theme="light"
        mode="inline"
        style={{ background: "#f0fffa" }}
        onClick={(menuItem) => {
          const item = getItem(menuItem.key);
          if (item.path && item.path !== currentRoute) {
            router.push(item.path);
          }
        }}
        triggerSubMenuAction="hover"
        defaultSelectedKeys={current}
        defaultOpenKeys={current}
        items={Object.entries(authSidebarData).map(([index, item]) => ({
          key: index,
          icon: item.icon,
          label: item.title,
          path: item.path,
        }))}
      />
    </Sider>
  );
};

export default Sidebar;
