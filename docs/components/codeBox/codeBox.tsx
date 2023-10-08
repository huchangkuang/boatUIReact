import React, { FC, PropsWithChildren } from "react";
import { scm } from "../../app";
import "./index.scss";
import cs from "classnames";

type UiCodeBoxProps = {
  title?: string;
} & React.DetailedHTMLProps<
  React.HTMLAttributes<HTMLDivElement>,
  HTMLDivElement
>;
export const CodeBox: FC<PropsWithChildren<UiCodeBoxProps>> = ({
  title,
  className,
  children,
  ...rest
}) => {
  return (
    <div className={cs(scm("codeBox"), className)} {...rest}>
      {title && <div className={scm("codeBox-title")}>{title}</div>}
      {children}
    </div>
  );
};
