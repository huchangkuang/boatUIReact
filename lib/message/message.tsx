import React, {cloneElement, FC, PropsWithChildren} from 'react';
import {scopeClassMaker} from "../utils/scopeClassMaker";
import "./index.scss"
import cs from "classnames";
import {Icon} from "../index";
import {createRoot} from "react-dom/client";
import {IconProps} from "../icon/icon";

interface MessageProps extends PropsWithChildren<
  React.DetailedHTMLProps<
    React.HTMLAttributes<HTMLDivElement>,
    HTMLDivElement
  >
> {
  content: string;
  show?: boolean;
  icon?: IconProps | null ;
}
const sc = scopeClassMaker('boat-message')
let count = 0
const MessageUI: FC<MessageProps> = (props) => {
  const {icon, show, content,className, children, style, ...rest} = props
  const renderIcon = () => {
    if (!icon) return null;
    return <Icon {...icon} />
  }
  const sty = show ? {
    transform: `translate(-50%, ${count * 20 + (count - 1) * 36}px)`
  } : {}
  return (
    <div style={{...style, ...sty}} className={cs(sc(), className)} {...rest}>
      <>
        {icon !== null && renderIcon()}
        <div className={sc('content')}>{content}</div>
      </>
    </div>
  );
};

export interface MessageOption {
  duration?: number;
  icon?: IconProps | null ;
}

const commonInfo = (content: string, option?: MessageOption) => {
  count += 1
  const {duration = 1500, icon} = option || {}
  const div = document.createElement('div')
  document.body.append(div)
  const root = createRoot(div)
  const com = <MessageUI content={content} icon={icon} />
  root.render(com)
  requestAnimationFrame(() => {
    root.render(cloneElement(com, {show: true}))
  })
  setTimeout(() => {
    root.render(cloneElement(com, {show: false}))
    setTimeout(() => {
      root.unmount()
      div?.remove()
      const list = document.body.querySelectorAll('.boat-message')
      if (!list.length) {
        count = 0
      }
    }, 200)
  }, duration)
}

const success = (content: string, option?: MessageOption) => {
  commonInfo(content, {...option, icon: {name: 'success', fill:'#52C51A'}})
}
const error = (content: string, option?: MessageOption) => {
  commonInfo(content, {...option, icon: {name: 'error', fill:'#FF4D4F'}})
}
const info = (content: string, option?: MessageOption) => {
  commonInfo(content, {...option, icon: {name: 'info', fill:'#FBAD14'}})
}
const warning = (content: string, option?: MessageOption) => {
  commonInfo(content, {...option, icon: {name: 'warning', fill:'#FBAD14'}})
}

const message = {
  success,
  error,
  info,
  warning
}
export default message