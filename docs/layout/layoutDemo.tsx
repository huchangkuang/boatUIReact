import React, {FC} from 'react';
import Layout from "../../lib/layout/layout";
import Header from "../../lib/layout/header";
import Content from "../../lib/layout/content";
import Footer from "../../lib/layout/footer";
import Aside from "../../lib/layout/aside";

export const LayoutDemo: FC = () => {
  return (
    <div>
      <div>demo1</div>
      <Layout style={{height: 500, width: 400}}>
        <Header style={{background: '#eee'}}>Header</Header>
        <Content style={{background: '#ccc'}}>Content</Content>
        <Footer style={{background: '#eee'}}>Footer</Footer>
      </Layout>
      <div>demo2</div>
      <Layout style={{height: 500, width: 400}}>
        <Header style={{background: '#eee'}}>Header</Header>
        <Layout>
          <Aside style={{background: '#ccc'}}>Aside</Aside>
          <Content style={{background: '#aaa'}}>Content</Content>
        </Layout>
        <Footer style={{background: '#eee'}}>Footer</Footer>
      </Layout>
      <div>demo3</div>
      <Layout style={{height: 500, width: 400}}>
        <Aside style={{background: '#ccc'}}>Aside</Aside>
        <Layout>
          <Header style={{background: '#eee'}}>Header</Header>
          <Content style={{background: '#aaa'}}>Content</Content>
          <Footer style={{background: '#eee'}}>Footer</Footer>
        </Layout>
      </Layout>
    </div>
  );
};