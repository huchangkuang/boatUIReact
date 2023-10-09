import React, { FC, useState } from "react";
import Dialog, {
  dialogAlert,
  dialogConfirm,
  dialogModal,
} from "../../lib/dialog/dialog";
import { scm } from "../app";
import { scopeClassMaker } from "../../lib/utils/scopeClassMaker";
import { CodeBox } from "../components/codeBox/codeBox";
import { Button } from "../../lib";
import { CodeBlock } from "../components/codeBlock/codeBlock";
import { basicUseCode, fnUseCode } from "./useCode";
import "./index.scss";

const sc = scopeClassMaker("dialogDemo");
export const DialogDemo: FC = () => {
  const [openDialog, setOpenDialog] = useState(false);
  const content = (
    <>
      <div>Some contents...</div>
      <div>Some contents...</div>
      <div>Some contents...</div>
      <div>Some contents...</div>
    </>
  );
  return (
    <div>
      <div className={scm("title")}>Dialog 对话框</div>
      <div className={scm("desc")}>
        需要用户处理事务，又不希望跳转页面以致打断工作流程时，可以使用 Dialog
        在当前页面正中打开一个浮层，承载相应的操作
      </div>
      <div className={scm("sbuTitle")}>如何使用</div>
      <CodeBox title="基本用法">
        <div className={sc("use")}>
          <Button type="primary" onClick={() => setOpenDialog(true)}>
            open dialog
          </Button>
          <Dialog
            title="Basic Use"
            isOpen={openDialog}
            onClose={() => setOpenDialog(false)}
          >
            <div>Some contents...</div>
            <div>Some contents...</div>
            <div>Some contents...</div>
            <div>Some contents...</div>
          </Dialog>
        </div>
        <CodeBlock code={basicUseCode} />
      </CodeBox>
      <CodeBox title="函数使用">
        <div className={sc("use")}>
          <Button
            type="primary"
            onClick={() => dialogModal({ content, title: "dialogModal" })}
          >
            dialogModal
          </Button>
          <Button
            type="primary"
            onClick={() => dialogConfirm({ content: "confirm" })}
          >
            dialogConfirm
          </Button>
          <Button
            type="primary"
            onClick={() =>
              dialogAlert({
                title: "dialogAlert",
                content: "alert",
                confirmText: "yes",
              })
            }
          >
            dialogAlert
          </Button>
        </div>
        <CodeBlock code={fnUseCode} />
      </CodeBox>
    </div>
  );
};
