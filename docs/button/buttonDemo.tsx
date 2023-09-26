import React, {FC, useEffect, useState} from 'react';
import {Button, Icon} from "../../lib";
import {scm} from "../app";
import {scopeClassMaker} from "../../lib/utils/scopeClassMaker";
import "./index.scss"
import hljs from 'highlight.js'
import 'highlight.js/styles/dark.css'
import typescript from 'highlight.js/lib/languages/typescript';

hljs.registerLanguage('javascript', typescript);

const basicUseCode = `
import React, {FC} from 'react';

export const Demo: FC = () => {
  return (
  <>
    <Button>default</Button>
    <Button type='primary'>primary</Button>
    <Button type='text'>text</Button>
    <Button type='dashed'>dashed</Button>
    <Button type='link'>link</Button>
  </>
  );
};
`
const sc = scopeClassMaker('buttonDemo')
export const ButtonDemo: FC = (props) => {
  const [loading, setLoading] = useState(false)
  const onLoadingClick = () => {
    setLoading(true)
    setTimeout(() => {
      setLoading(false)
    },2000)
  };
  useEffect(() => {

  },[])
  return (
    <div>
      <div className={scm('title')}>Button 按钮</div>
      <div className={scm('desc')}>按钮用于用户交互的及时操作</div>
      <div className={scm('sbuTitle')}>如何使用</div>
      <div className={scm('codeBox')}>
        <div className={scm('codeBox-title')}>基本用法</div>
        <div className={sc('basic')}>
          <Button>default</Button>
          <Button type='primary'>primary</Button>
          <Button type='text'>text</Button>
          <Button type='dashed'>dashed</Button>
          <Button type='link'>link</Button>
        </div>
        <pre>
          <code className='language-xml' dangerouslySetInnerHTML={{__html: hljs.highlight(basicUseCode, {language: 'xml'}).value}}></code>
        </pre>
      </div>
      <Button size='small'>test</Button>
      <Button size='large'>test</Button>
      <Button disabled>test</Button>
      <Button type='primary' disabled>test</Button>
      <Button type='text' disabled>test</Button>
      <Button type='dashed' disabled>test</Button>
      <Button type='link' disabled>test</Button>
      <Button icon={<Icon name='star' />}>test</Button>
      <Button icon={<Icon name='star' />} iconPosition='right'>test</Button>
      <Button type='primary' icon={<Icon name='star' />}>test</Button>
      <Button loading={loading} onClick={onLoadingClick}>loading</Button>
      <Button loading={loading} onClick={onLoadingClick} type='primary'>loading</Button>
    </div>
  );
};