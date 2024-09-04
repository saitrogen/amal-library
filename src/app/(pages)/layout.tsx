import Sidebar from "@/components/sections/Sidebar";
import { Breadcrumb, Layout, Menu, theme } from 'antd';
import Sider from "antd/es/layout/Sider";
import { LaptopOutlined, NotificationOutlined, UserOutlined } from '@ant-design/icons';
import React from "react";
import { Content } from "antd/es/layout/layout";


// const items2 = [UserOutlined, LaptopOutlined, NotificationOutlined].map((icon, index) => {
//   const key = String(index + 1);
//   return {
//     key: `sub${key}`,
//     icon: React.createElement(icon),
//     label: `subnav ${key}`,
//     children: new Array(4).fill(null).map((_, j) => {
//       const subKey = index * 4 + j + 1;
//       return {
//         key: subKey,
//         label: `option${subKey}`,
//       };
//     }),
//   };
// });

export default function pagesLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <Layout>
        <Sider>
        {/* <Menu
            mode="inline"
            defaultSelectedKeys={['1']}
            defaultOpenKeys={['sub1']}
            style={{
              height: '100%',
              borderRight: 0,
            }}
            items={items2}
          /> */}
          <Sidebar />
        </Sider>
        <Layout>
          <Content>
            {children}
          </Content>
        </Layout>
      </Layout>
    </>


  );
}