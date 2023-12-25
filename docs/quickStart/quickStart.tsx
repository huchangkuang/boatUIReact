import React, { CSSProperties, FC } from "react";
import { scm } from "../app";
import { CodeBlock } from "../components/codeBlock/codeBlock";
import { scopeClassMaker } from "../../lib/utils/scopeClassMaker";
import "./index.scss";
import {
  Button,
  Content,
  Footer,
  Header,
  Icon,
  Layout,
  Scroll,
} from "../../lib";
import { dialogConfirm } from "../../lib/dialog/dialog";
import message from "../../lib/message/message";

const sc = scopeClassMaker("quickStart");
export const QuickStart: FC = () => {
  const layoutStyle: CSSProperties = {
    background: "#C5E99B",
    color: "#fff",
    padding: "4px 16px",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  };
  return (
    <div>
      <div className={scm("title")}>组件介绍</div>
      <div className={scm("desc")}>
        boat-ui 是一款适用react框架的轻量化ui组件库
      </div>
      <div className={scm("sbuTitle")}>安装</div>
      <div style={{ marginBottom: 12 }}>
        <div>npm安装</div>
        <CodeBlock code="npm i boat-ui-react;" language="bash" />
      </div>
      <div>
        <div>yarn安装</div>
        <CodeBlock code="yarn add boat-ui-react;" language="bash" />
      </div>
      <div style={{ marginTop: 16 }} className={scm("sbuTitle")}>
        组件总览
      </div>
      <div className={sc("components")}>
        <div className={sc("components-item")}>
          <div className={sc("components-item-header")}>Icon 图标</div>
          <div className={sc("components-item-body")}>
            <Icon name="star" />
            <Icon name="star" fill="red" />
          </div>
        </div>
        <div className={sc("components-item")}>
          <div className={sc("components-item-header")}>Button 按钮</div>
          <div className={sc("components-item-body")}>
            <Button>按钮</Button>
            <Button type="primary">按钮</Button>
            <div onClick={(e) => console.log(e.target, e.currentTarget)}>
              <Button>test</Button>
            </div>
          </div>
        </div>
        <div className={sc("components-item")}>
          <div className={sc("components-item-header")}>Layout 布局</div>
          <div className={sc("components-item-body")}>
            <Layout>
              <Header style={layoutStyle}>header</Header>
              <Content style={{ ...layoutStyle, background: "#8FBC94" }}>
                content
              </Content>
              <Footer style={layoutStyle}>footer</Footer>
            </Layout>
          </div>
        </div>
        <div className={sc("components-item")}>
          <div className={sc("components-item-header")}>Scroll 滚动条</div>
          <div className={sc("components-item-body")}>
            <Scroll height="100%" style={{ width: "100%" }}>
              {new Array(100).fill("").map((i, index) => (
                <div key={index}>some content...</div>
              ))}
            </Scroll>
          </div>
        </div>
        <div className={sc("components-item")}>
          <div className={sc("components-item-header")}>Dialog 对话框</div>
          <div className={sc("components-item-body")}>
            <Button
              type="primary"
              onClick={() => dialogConfirm({ content: "confirm" })}
            >
              dialogConfirm
            </Button>
          </div>
        </div>
        <div className={sc("components-item")}>
          <div className={sc("components-item-header")}>Message 全局提示</div>
          <div className={sc("components-item-body")}>
            <Button
              type="primary"
              onClick={() => message.success("this is success message")}
            >
              success
            </Button>
            <Button
              type="primary"
              onClick={() => message.error("this is error message")}
            >
              error
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};
