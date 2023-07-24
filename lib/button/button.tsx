import React, { FC, PropsWithChildren } from "react";
import "./index.scss";
import cs from "classnames";
import { scopeClassMaker } from "../utils/scopeClassMaker";

const scm = scopeClassMaker("boat-button");
export interface ButtonProps
  extends PropsWithChildren<
    React.DetailedHTMLProps<
      React.HTMLAttributes<HTMLDivElement>,
      HTMLDivElement
    >
  > {
  className?: string;
}
const Button: FC<ButtonProps> = ({ className, children, ...rest }) => {
  return (
    <div {...rest} className={cs(scm(), className)}>
      {children}
    </div>
  );
};
export default Button;
