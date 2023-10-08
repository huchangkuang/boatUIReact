import React, {FC, useEffect, useState} from 'react';
import {Button, Icon} from "../../lib";
import {scm} from "../app";
import {scopeClassMaker} from "../../lib/utils/scopeClassMaker";
import "./index.scss"
import { CodeBlock } from '../components/codeBlock/codeBlock';
import {CodeBox} from "../components/codeBox/codeBox";
import {basicUseCode, disabledUseCode, iconUseCode, sizeUseCode} from "./useCode";

const sc = scopeClassMaker('buttonDemo')
export const ButtonDemo: FC = () => {
  const [loading, setLoading] = useState(false)
  const onLoadingClick = () => {
    setLoading(true)
    setTimeout(() => {
      setLoading(false)
    },2000)
  };
  return (
    <div>
      <div className={scm('title')}>Button 按钮</div>
      <div className={scm('desc')}>按钮用于用户交互的及时操作</div>
      <div className={scm('sbuTitle')}>如何使用</div>
      <CodeBox title='基本用法'>
        <div className={sc('basic')}>
          <Button>default</Button>
          <Button type='primary'>primary</Button>
          <Button type='text'>text</Button>
          <Button type='dashed'>dashed</Button>
          <Button type='link'>link</Button>
        </div>
        <CodeBlock code={basicUseCode} />
      </CodeBox>
      <CodeBox title='按钮尺寸'>
        <div className={sc('basic')}>
          <Button size='small'>small</Button>
          <Button type='primary' size='small'>small</Button>
          <Button type='text' size='small'>text</Button>
          <Button type='dashed' size='small'>dashed</Button>
          <Button type='link' size='small'>link</Button>
          <Button>default</Button>
          <Button size='large'>large</Button>
          <Button type='primary' size='large'>small</Button>
          <Button type='text' size='large'>text</Button>
          <Button type='dashed' size='large'>dashed</Button>
          <Button type='link' size='large'>link</Button>
        </div>
        <CodeBlock code={sizeUseCode} />
      </CodeBox>
      <CodeBox title='按钮禁用'>
        <div className={sc('basic')}>
          <Button disabled>test</Button>
          <Button type='primary' disabled>test</Button>
          <Button type='text' disabled>test</Button>
          <Button type='dashed' disabled>test</Button>
          <Button type='link' disabled>test</Button>
        </div>
        <CodeBlock code={disabledUseCode} />
      </CodeBox>
      <CodeBox title='按钮图标'>
        <div className={sc('basic')}>
          <Button icon={<Icon name='star' />}>icon left</Button>
          <Button icon={<Icon name='star' />} iconPosition='right'>icon right</Button>
          <Button type='primary' icon={<Icon name='star' />}>icon right primary</Button>
          <Button loading={loading} onClick={onLoadingClick}>loading</Button>
          <Button loading={loading} onClick={onLoadingClick} type='primary'>loading primary</Button>
          <Button loading={loading} onClick={onLoadingClick} loadIcon='star'>custom loading icon</Button>
        </div>
        <CodeBlock code={iconUseCode} />
      </CodeBox>

    </div>
  );
};