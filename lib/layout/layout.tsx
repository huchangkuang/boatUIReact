import React, {FC} from 'react';
import cs from "classnames";
import {scopeClassMaker} from "../utils/scopeClassMaker";
import './index.scss'
import Aside from "./aside";

export interface LayoutProps extends React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
  className?: string;
}
export const scmLayout = scopeClassMaker('boat-layout')
const Layout: FC<LayoutProps> = ({className, children, ...rest}) => {
  const hasAside = Array.isArray(children) && children.some(i => i.type === Aside)
  return (
    <div className={cs(scmLayout(), className, hasAside && scmLayout('hasAside'))} {...rest}>
      {children}
    </div>
  );
};
export default Layout