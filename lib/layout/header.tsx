import React, { FC } from "react";
import cs from "classnames";
import "./index.scss";
import { scmLayout } from "./layout";

export interface HeaderProps
  extends React.DetailedHTMLProps<
    React.HTMLAttributes<HTMLDivElement>,
    HTMLDivElement
  > {
  className?: string;
}
const Header: FC<HeaderProps> = ({ className, children, ...rest }) => {
  return (
    <div className={cs(scmLayout("header"), className)} {...rest}>
      {children}
    </div>
  );
};
export default Header;
