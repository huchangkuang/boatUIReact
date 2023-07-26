import React, {FC} from 'react';
import cs from "classnames";
import './index.scss'
import {scmLayout} from "./layout";

export interface AsideProps extends React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
  className?: string;
}
const Aside: FC<AsideProps> = ({className, children, ...rest}) => {
  return (
    <div className={cs(scmLayout('aside'), className)} {...rest}>
      {children}
    </div>
  );
};
export default Aside