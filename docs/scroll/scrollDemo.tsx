import React, { FC } from "react";
import "./index.scss";
import { scm } from "../app";
import { scopeClassMaker } from "../../lib/utils/scopeClassMaker";
import { CodeBlock } from "../components/codeBlock/codeBlock";
import { CodeBox } from "../components/codeBox/codeBox";
import Scroll from "../../lib/scroll/scroll";
import { basicUseCode } from "./useCode";

const sc = scopeClassMaker("scrollDemo");
export const ScrollDemo: FC = (props) => {
  return (
    <div>
      <div className={scm("title")}>Scroll 滚动条</div>
      <div className={scm("desc")}>数据过多时，滚动展示</div>
      <div className={scm("sbuTitle")}>如何使用</div>
      <CodeBox title="基本用法">
        <div className={sc("use")}>
          <Scroll height={300}>
            {new Array(100).fill("").map((i, index) => (
              <div key={index}>some content...</div>
            ))}
          </Scroll>
        </div>
        <CodeBlock code={basicUseCode} />
      </CodeBox>
    </div>
  );
};
