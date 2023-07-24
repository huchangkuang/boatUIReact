import React, { FC } from "react";
import './importIcons'
import './index.scss'
import cs from "classnames";
import {scopeClassMaker} from "../utils/scopeClassMaker";

const scm = scopeClassMaker('boat-icon')
export interface IconProps extends React.SVGProps<SVGSVGElement> {
  name: string;
}
const Icon: FC<IconProps> = ({ name, className, ...rest }) => {
  return (
    <svg className={cs(scm(), className)} {...rest}>
      <use xlinkHref={`#${name}`} />
    </svg>
  );
};
export default Icon