import React, {FC} from 'react';
import "./index.scss"
import cs from "../utils/cs";

export interface ButtonProps extends React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
  className?: string;
};
const Button: FC<ButtonProps> = ({className, ...rest}) => {
  return (
    <div {...rest} className={cs('boat-button', className)}>
      Button
    </div>
  );
};
export default Button