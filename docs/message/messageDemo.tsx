import React, { FC } from "react";
import "./index.scss";
import { scm } from "../app";
import { scopeClassMaker } from "../../lib/utils/scopeClassMaker";
import { CodeBlock } from "../components/codeBlock/codeBlock";
import { CodeBox } from "../components/codeBox/codeBox";
import { basicUseCode } from "./useCode";
import {Button} from "../../lib";
import message from "../../lib/message/message";

const sc = scopeClassMaker("messageDemo");
export const MessageDemo: FC = (props) => {
  return (
    <div>
      <div className={scm("title")}>Message 全局提示</div>
      <div className={scm("desc")}>全局展示操作反馈信息</div>
      <div className={scm("sbuTitle")}>如何使用</div>
      <CodeBox title="基本用法">
        <div className={sc("use")}>
          <Button type='primary' onClick={() => message.success('this is success message')}>success</Button>
          <Button type='primary' onClick={() => message.error('this is error message')}>error</Button>
          <Button type='primary' onClick={() => message.info('this is info message')}>info</Button>
          <Button type='primary' onClick={() => message.warning('this is warning message')}>warning</Button>
        </div>
        <CodeBlock code={basicUseCode} />
      </CodeBox>
    </div>
  );
};
