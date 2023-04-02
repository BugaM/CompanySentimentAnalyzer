import "@/styles/globals.css";
import { ConfigProvider, Layout } from "antd";
import type { AppProps } from "next/app";

import Header from "@/components/Header";
import Sidebar from "@/components/Sidebar";

const { Content, Footer } = Layout;

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ConfigProvider
      theme={{
        token: {
          colorPrimary: "#039363",
        },
        components: {
          Menu: {
            colorItemTextHover: "#FFFFFF",
            colorItemText: "#2aa87e",
            colorItemTextSelected: "#039363",
            colorItemBgHover: "#039363",
            colorItemBgSelected: "#FFFFFF",
            colorSubItemBg: "#FFFFFF",
            colorActiveBarBorderSize: 0,
          },
          Layout: {
            colorBgHeader: "#039363",
          },
          Typography: {
            colorText: "#FFFFFF",
          },
        },
      }}
    >
      <Layout style={{ minHeight: "100vh" }}>
        <Header />
        <Layout>
          <Sidebar />
          <ConfigProvider
            theme={{
              components: {
                Typography: {
                  colorText: "#000000",
                },
              },
            }}
          >
            <Content>
              <Component {...pageProps} />
            </Content>
          </ConfigProvider>
        </Layout>
        <Footer
          style={{ textAlign: "center" }}
        >{`Sentzer ©${new Date().getFullYear()}`}</Footer>
      </Layout>
    </ConfigProvider>
  );
}
