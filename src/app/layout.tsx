import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/sections/Header";
// import { ThemeProvider } from "@/components/theme-provider";
import { Footer} from "antd/es/layout/layout";
// import { Header } from "antd/es/layout/layout";
// import { Providers } from "./provider";
// import { AntdRegistry } from "@ant-design/nextjs-registry";
// import { Layout, Menu } from "antd";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    // not replaced : <html lang="en" > <body>

    <html lang="en" className="light">
      <body className={`${inter.className},flex flex-col min-h-screen`}>
        {/* <Providers> */}
              <Header />
            {children}
            <Footer>
            </Footer>
        {/* </Providers> */}
      </body>
    </html>
  );
}
