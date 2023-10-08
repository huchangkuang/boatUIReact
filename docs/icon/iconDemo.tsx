import React, { FC, useEffect, useState } from "react";
import { Icon } from "../../lib";
import { scm } from "../app";
import { scopeClassMaker } from "../../lib/utils/scopeClassMaker";
import "./index.scss";
import { CodeBox } from "../components/codeBox/codeBox";
import { CodeBlock } from "../components/codeBlock/codeBlock";
import { basicUseCode, colorUseCode, sizeUseCode } from "./useCode";

type IconDemoProps = {};
const sc = scopeClassMaker("iconDemo");
const getAllIconName = () => {
  const keys = (require as any)
    .context("../../lib/icon/icons/", true, /\.svg$/)
    .keys();
  return keys.map((i) => {
    const index = i.split("").findLastIndex((j) => j === "/");
    return i.slice(index + 1).replace(".svg", "");
  });
};
export const IconDemo: FC<IconDemoProps> = (props) => {
  const [icons, setIcons] = useState<string[]>([]);
  useEffect(() => {
    setIcons(getAllIconName());
  }, []);
  return (
    <div className={sc()}>
      <div className={scm("title")}>Icon 图标</div>
      <div className={scm("desc")}>svg矢量图标组件</div>
      <div className={scm("sbuTitle")}>图标合集</div>
      <div className={sc("iconsBox")}>
        {icons.map((i) => (
          <div
            className={sc("iconsBox-item")}
            onClick={() => {
              if (navigator.clipboard) {
                navigator.clipboard.writeText(i);
                // TODO 复制成功
              }
            }}
          >
            <Icon key={i} name={i} size="3em" />
            <div className={sc("iconsBox-item-name")}>{i}</div>
          </div>
        ))}
      </div>
      <CodeBox title="基本用法">
        <div className={sc("use")}>
          <Icon name="add" />
          <Icon name="addNoCircle" />
          <Icon name="beauty" />
        </div>
        <CodeBlock code={basicUseCode} />
      </CodeBox>
      <CodeBox title="自定义大小">
        <div className={sc("use")}>
          <Icon name="add" size={32} />
          <Icon name="addNoCircle" size="2em" />
          <Icon name="beauty" size="32px" />
        </div>
        <CodeBlock code={sizeUseCode} />
      </CodeBox>
      <CodeBox title="自定义颜色">
        <div className={sc("use")}>
          <Icon name="add" size={32} fill="red" />
          <Icon name="addNoCircle" size="2em" fill="#8FBC94" />
          <Icon name="beauty" size="32px" color="#C5E99B" />
        </div>
        <CodeBlock code={colorUseCode} />
      </CodeBox>
    </div>
  );
};
