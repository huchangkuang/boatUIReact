import React, {FC, useState} from "react";
import Layout, {Aside, Content, Header} from "../lib/layout/layout";
import {scopeClassMaker} from "../lib/utils/scopeClassMaker";
import './index.scss'
import {Icon} from "../lib";
import {componentMap, Menu, menuList} from "./menu";
import cs from "classnames";

const scm = scopeClassMaker('example-app')
export const App: FC = () => {
  const [select, setSelect] = useState<Menu>('button')

  return (
    <Layout style={{width: '100vw', height: '100vh'}}>
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
      <Layout style={{height: 'calc(100vh - 64px)'}}>
        <Aside className={scm('aside')}>
          {menuList.map(i => <div className={scm('aside-menuGroup')}>
            {i.title && <div className={scm('aside-menuGroup-title')}>{i.title}</div>}
            {i.list.map(j => <div className={cs(scm('aside-menuItem'),select === j.key ? scm('aside-menuItem__selected') : '')} onClick={() => setSelect(j.key)}>{j.title}</div>)}
          </div>)}
        </Aside>
        <Content className={scm('content')}>
          {componentMap[select]}
        </Content>
      </Layout>
    </Layout>
  );
};