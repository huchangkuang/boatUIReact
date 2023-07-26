import React, {FC} from 'react';
import cs from "classnames";
import './index.scss'
import {scmLayout} from "./layout";

export interface ContentProps extends React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
  className?: string;
}
const Content: FC<ContentProps> = ({className, children, ...rest}) => {
  return (
    <div className={cs(scmLayout('content'), className)} {...rest}>
      {children}
    </div>
  );
};
export default Content