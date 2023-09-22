import React, { FC, PropsWithChildren, ReactNode, useState } from "react";
import cs from "classnames";
import { scopeClassMaker } from "../utils/scopeClassMaker";
import "./style/button.scss";

const scm = scopeClassMaker("boat-button");
export type ButtonType = "default" | "primary" | "dashed" | "text" | "link";
export type ButtonSize = "small" | "middle" | "large";
export interface ButtonProps
  extends PropsWithChildren<
    React.DetailedHTMLProps<
      React.HTMLAttributes<HTMLButtonElement>,
      HTMLButtonElement
    >
  > {
  type?: ButtonType;
  className?: string;
  disabled?: boolean;
  size?: ButtonSize;
  icon?: ReactNode;
  iconPosition?: "left" | "right";
}
const Button: FC<ButtonProps> = (props) => {
  const {
    type = "default",
    disabled,
    className,
    children,
    onClick,
    size = "middle",
    icon,
    iconPosition = "left",
    ...rest
  } = props;
  const [buttonActive, setButtonActive] = useState(false);
  const [showPop, setShowPop] = useState(false);
  const classes = [
    className,
    scm(),
    scm(`${type}`),
    buttonActive && scm("active"),
    disabled && scm("disabled"),
    size && scm(size),
  ];
  const onMouseUp = () => {
    if (disabled) return;
    setButtonActive(false);
    if (["link", "text"].includes(type)) return;
    setShowPop(true);
    setTimeout(() => {
      setShowPop(false);
    }, 500);
  };
  return (
    <button
      {...rest}
      onClick={!disabled ? onClick : undefined}
      className={cs(classes)}
      onMouseDown={() => !disabled && setButtonActive(true)}
      onMouseUp={onMouseUp}
    >
      <>
        {icon && iconPosition === "left" && (
          <span className="iconWrapLeft">{icon}</span>
        )}
        <span>{children}</span>
        {icon && iconPosition === "right" && (
          <span className="iconWrapRight">{icon}</span>
        )}
        {showPop && <div className={scm("pop")} />}
      </>
    </button>
  );
};
export default Button;
