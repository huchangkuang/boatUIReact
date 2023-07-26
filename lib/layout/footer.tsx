import React, {FC} from 'react';
import cs from "classnames";
import './index.scss'
import {scmLayout} from "./layout";

export interface FooterProps extends React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
  className?: string;
}
const Footer: FC<FooterProps> = ({className, children, ...rest}) => {
  return (
    <div className={cs(scmLayout('footer'), className)} {...rest}>
      {children}
    </div>
  );
};
export default Footer