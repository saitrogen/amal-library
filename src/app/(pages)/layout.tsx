import Sidebar from "@/components/sections/Sidebar";
import Layout from "antd/es/layout/layout";
import Sider from "antd/es/layout/Sider";


export default function pagesLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
    <Layout>
      <Sider>
        
          
      <Sidebar  />
        
      </Sider>
    
      {children}
   
    </Layout>
    </>
    

  );
}