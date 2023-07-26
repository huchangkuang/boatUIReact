import React, {FC, ReactNode, useState} from "react";
import {DialogDemo} from "./dialog/dialogDemo";
import {LayoutDemo} from "./layout/layoutDemo";
import Layout from "../lib/layout/layout";
import Aside from "../lib/layout/aside";
import Content from "../lib/layout/content";
import {scopeClassMaker} from "../lib/utils/scopeClassMaker";
import './index.scss'
import {FormLessDemo} from "./formLess/formLessDemo";

const scm = scopeClassMaker('boat-app')
type Menu = 'dialog' | 'layout' | 'formLess'
export const App: FC = () => {
  const menuList: Menu[] = ['dialog', 'layout', 'formLess']
  const [select, setSelect] = useState<Menu>('dialog')
  const componentMap: Record<Menu, ReactNode> = {
    dialog: <DialogDemo />,
    layout: <LayoutDemo />,
    formLess: <FormLessDemo />
  }
  return (
    <Layout style={{minWidth: '100vw', minHeight: '100vh'}}>
      <Aside className={scm('aside')}>
        {menuList.map(i => <div className={select === i ? 'selected' : ''} onClick={() => setSelect(i)}>{i}</div>)}
      </Aside>
      <Content className={scm('content')}>
        {componentMap[select]}
      </Content>
    </Layout>
  );
};