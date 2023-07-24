import React, {FC} from 'react';
import "./index.scss"
import cs from "classnames";
import {scopeClassMaker} from "../utils/scopeClassMaker";

const scm = scopeClassMaker('boat-button')
export interface ButtonProps extends React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
  className?: string;
}
const Button: FC<ButtonProps> = ({className, ...rest}) => {
  return (
    <div {...rest} className={cs(scm(), className)}>
      Button
    </div>
  );
};
export default Button