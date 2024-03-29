import React, { CSSProperties, FC } from "react";
import "./importIcons";
import "./index.scss";
import cs from "classnames";
import { scopeClassMaker } from "../utils/scopeClassMaker";
import { filterObjAttr } from "../utils/filterObjAttr";

const scm = scopeClassMaker("boat-icon");
export interface IconProps extends React.SVGProps<SVGSVGElement> {
  name: string;
  size?: number | string;
  color?: CSSProperties["color"];
  fill?: CSSProperties["color"];
}
const Icon: FC<IconProps> = (props) => {
  const { name, className, size, style, color, fill, ...rest } = props;
  const iconStyle: CSSProperties = {
    width: size,
    height: size,
    fill: color || fill,
  };
  return (
    <svg
      className={cs(scm(), className)}
      style={{
        ...style,
        ...filterObjAttr(iconStyle),
      }}
      {...rest}
    >
      <use xlinkHref={`#${name}`} />
    </svg>
  );
};
export default Icon;
