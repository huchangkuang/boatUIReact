import React, {FC, ReactNode, useState} from "react";
import {DialogDemo} from "./dialog/dialogDemo";
import {LayoutDemo} from "./layout/layoutDemo";
import Layout, {Aside, Content, Header} from "../lib/layout/layout";
import {scopeClassMaker} from "../lib/utils/scopeClassMaker";
import './index.scss'
import {FormLessDemo} from "./formLess/formLessDemo";
import {Icon} from "../lib";

const scm = scopeClassMaker('example-app')
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
      <Header className={scm('header')}>
        <Layout className={scm('header-layout')}>
          <Aside className={scm('header-aside')}>
            <Icon name='boat' size={32}/>
            <div className='name'>Boat-UI</div>
          </Aside>
          <Content className={scm('header-content')}>

          </Content>
        </Layout>
      </Header>
      <Layout>
        <Aside className={scm('aside')}>
          {menuList.map(i => <div className={select === i ? scm('selected') : ''} onClick={() => setSelect(i)}>{i}</div>)}
        </Aside>
        <Content className={scm('content')}>
          {componentMap[select]}
        </Content>
      </Layout>
    </Layout>
  );
};