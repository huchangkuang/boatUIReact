import React, { FC } from "react";
import './importIcons'
import './index.scss'
import cs from "../utils/cs";

export interface IconProps extends React.SVGProps<SVGSVGElement> {
  name: string;
}
const Icon: FC<IconProps> = ({ name, className, ...rest }) => {
  return (
    <svg className={cs('boat-icon', className)} {...rest}>
      <use xlinkHref={`#${name}`} />
    </svg>
  );
};
export default Icon