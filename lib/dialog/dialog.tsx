import React, {
  cloneElement,
  FC,
  Fragment,
  PropsWithChildren,
  ReactNode, useEffect, useState,
} from "react";
import cs from "classnames";
import { scopeClassMaker } from "../utils/scopeClassMaker";
import "./index.scss";
import { createPortal } from "react-dom";
import { createRoot } from "react-dom/client";
import { Button, Icon } from "../index";

export interface DialogProps extends PropsWithChildren {
  className?: string;
  isOpen: boolean;
  title?: string;
  onClose?: React.MouseEventHandler;
  disableMaskClick?: boolean;
}
const scm = scopeClassMaker("boat-dialog");
const Dialog: FC<DialogProps> = (props) => {
  const {
    className,
    isOpen,
    onClose,
    disableMaskClick = false,
    children,
    title,
  } = props;
  const [show, setShow] = useState(isOpen)
  useEffect(() => {
    if (isOpen) {
      requestAnimationFrame(() => {
        setShow(true)
      })
    } else {
      setShow(false)
    }
  },[isOpen])
  return isOpen
    ? createPortal(
        <Fragment>
          <div
            className={cs(scm("mask"), show && 'show')}
            onClick={!disableMaskClick ? onClose : undefined}
          />
          <div className={cs(scm(), className, show && 'show')}>
            <div className={scm('header')}>
              <div className={scm('title')}>{title}</div>
              <Icon
                className={scm("close")}
                name="close"
                size={20}
                color="#666"
                onClick={onClose}
              />
            </div>
            {children}
          </div>
        </Fragment>,
        document.body,
      )
    : null;
};
const dialogModal = (content?: ReactNode, options?: DialogProps) => {
  const { children, ...rest } = options || {};
  const onClose = () => {
    root.render(cloneElement(component, { isOpen: false }))
    root.unmount()
    div.remove();
  };
  const component = (
    <Dialog {...rest} isOpen={true} onClose={onClose}>
      {content || children}
    </Dialog>
  );
  const div = document.createElement("div");
  document.body.append(div);
  const root = createRoot(div)
  root.render(component);
  return onClose;
};
export interface DialogConfirmOptions {
  content: ReactNode;
  confirmText?: string;
  cancelText?: string;
  onCancel?: () => void;
  onConfirm?: () => void;
}
const dialogConfirm = (options: DialogConfirmOptions) => {
  const {
    content,
    onConfirm,
    onCancel,
    confirmText = "确认",
    cancelText = "取消",
  } = options;
  const close = () => {
    _close();
    onCancel?.();
  };
  const confirm = () => {
    _close();
    onConfirm?.();
  };
  const component = (
    <div className={scm("modal")}>
      <div className={scm("content")}>{content}</div>
      <div className={scm("buttons")}>
        <Button className={scm("btn")} onClick={close}>
          {cancelText}
        </Button>
        <Button type='primary' className={scm("btn")} onClick={confirm}>
          {confirmText}
        </Button>
      </div>
    </div>
  );
  const _close = dialogModal(content, {
    children: component,
    isOpen: true,
    onClose: close,
  });
};
export interface DialogAlertOptions {
  content: ReactNode;
  confirmText?: string;
  onConfirm?: () => void;
}
const dialogAlert = (options: DialogAlertOptions) => {
  const { content, onConfirm, confirmText = "知道了" } = options;
  const confirm = () => {
    _close();
    onConfirm?.();
  };
  const component = (
    <div className={scm("modal")}>
      <div className={scm("content")}>{content}</div>
      <div className={scm("buttons")}>
        <Button type='primary' className={scm("btn")} onClick={confirm}>
          {confirmText}
        </Button>
      </div>
    </div>
  );
  const _close = dialogModal(content, {
    children: component,
    isOpen: true,
    onClose: close,
  });
};
export { dialogModal, dialogConfirm, dialogAlert };
export default Dialog;
