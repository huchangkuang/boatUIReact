import React, { FC, PropsWithChildren, ReactNode, useState } from "react";
import cs from "classnames";
import { scopeClassMaker } from "../utils/scopeClassMaker";
import "./style/button.scss";
import Icon from "../icon/icon";

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
  loading?: boolean;
  loadIcon?: string;
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
    loading,
    loadIcon,
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
  const onBtnClick = (e) => {
    if (loading) return;
    onClick?.(e)
  };
  return (
    <button
      {...rest}
      onClick={!disabled ? onBtnClick : undefined}
      className={cs(classes)}
      onMouseDown={() => !disabled && setButtonActive(true)}
      onMouseUp={onMouseUp}
    >
      <>
        {iconPosition === "left" && (loading ? <LoadingIcon loadIcon={loadIcon} /> : (icon && <span className="iconWrapLeft">{icon}</span>))}
        <span>{children}</span>
        {iconPosition === "right" && (loading ? <LoadingIcon loadIcon={loadIcon} /> : (icon && <span className="iconWrapRight">{icon}</span>))}
        {showPop && <div className={scm("pop")} />}
      </>
    </button>
  );
};
const LoadingIcon: React.FC<{loadIcon?: string}> = ({loadIcon}) => <Icon className={scm('icon-loading')} name={loadIcon || 'loading'} />
export default Button;
