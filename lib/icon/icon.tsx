import React, { CSSProperties, FC } from "react";
import "./importIcons";
import "./index.scss";
import cs from "classnames";
import { scopeClassMaker } from "../utils/scopeClassMaker";

const scm = scopeClassMaker("boat-icon");
export interface IconProps extends React.SVGProps<SVGSVGElement> {
  name: string;
  size?: number;
  color?: CSSProperties["color"];
}
const Icon: FC<IconProps> = (props) => {
  const { name, className, size, style, color, ...rest } = props;
  const iconStyle: CSSProperties = {
    width: size,
    height: size,
    fill: color,
  };
  return (
    <svg
      className={cs(scm(), className)}
      style={{
        ...style,
        ...Object.fromEntries(
          Object.entries(iconStyle).filter((i) => i[1] !== undefined),
        ),
      }}
      {...rest}
    >
      <use xlinkHref={`#${name}`} />
    </svg>
  );
};
export default Icon;
