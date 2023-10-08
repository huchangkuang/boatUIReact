import React, { FC } from "react";
import Layout from "../../lib/layout/layout";
import Header from "../../lib/layout/header";
import Content from "../../lib/layout/content";
import Footer from "../../lib/layout/footer";
import Aside from "../../lib/layout/aside";
import "./index.scss";
import { scopeClassMaker } from "../../lib/utils/scopeClassMaker";
import { scm } from "../app";
import { CodeBlock } from "../components/codeBlock/codeBlock";
import { CodeBox } from "../components/codeBox/codeBox";
import { basicUseCode } from "./useCode";

const sc = scopeClassMaker("layoutDemo");
export const LayoutDemo: FC = () => {
  const headerStyle: React.CSSProperties = {
    textAlign: "center",
    color: "#fff",
    height: 64,
    paddingInline: 50,
    lineHeight: "64px",
    backgroundColor: "#C5E99B",
  };

  const contentStyle: React.CSSProperties = {
    textAlign: "center",
    minHeight: 120,
    lineHeight: "120px",
    color: "#fff",
    backgroundColor: "#8FBC94",
  };

  const siderStyle: React.CSSProperties = {
    textAlign: "center",
    color: "#fff",
    padding: "0 20px",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#519157",
  };

  const footerStyle: React.CSSProperties = {
    textAlign: "center",
    color: "#fff",
    lineHeight: "120px",
    backgroundColor: "#C5E99B",
  };
  return (
    <div className={sc()}>
      <div className={scm("title")}>Layout 布局</div>
      <div className={scm("desc")}>协助进行页面级整体布局</div>
      <div className={scm("sbuTitle")}>如何使用</div>
      <CodeBox title="基本用法">
        <div className={sc("use")}>
          <Layout style={{ marginBottom: 32 }}>
            <Header style={headerStyle}>Header</Header>
            <Content style={contentStyle}>Content</Content>
            <Footer style={footerStyle}>Footer</Footer>
          </Layout>

          <Layout style={{ marginBottom: 32 }}>
            <Header style={headerStyle}>Header</Header>
            <Layout>
              <Aside style={siderStyle}>Aside</Aside>
              <Content style={contentStyle}>Content</Content>
            </Layout>
            <Footer style={footerStyle}>Footer</Footer>
          </Layout>

          <Layout style={{ marginBottom: 32 }}>
            <Aside style={siderStyle}>Aside</Aside>
            <Layout>
              <Header style={headerStyle}>Header</Header>
              <Content style={contentStyle}>Content</Content>
              <Footer style={footerStyle}>Footer</Footer>
            </Layout>
          </Layout>
        </div>
        <CodeBlock code={basicUseCode} />
      </CodeBox>
    </div>
  );
};
