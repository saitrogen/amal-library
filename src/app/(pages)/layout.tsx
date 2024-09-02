import { Layout } from "antd";
import { Content } from "antd/es/layout/layout";
import Sider from "antd/es/layout/Sider";

export default function PageLayout({ children }: { children: React.ReactNode }) {
  return <>
    <Layout>
      <Layout>
        <Sider></Sider>
        <Content>
        {children}
        </Content>

      </Layout>
    </Layout>

  </>;
}