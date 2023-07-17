import React, {FC} from "react";
import './importIcons'

type IconProps = {
    name: string;
};
const Icon: FC<IconProps> = (props) => {
  const {name} = props
  return (
    <span>
      <svg>
        <use xlinkHref={`#${name}`}/>
      </svg>
    </span>
  );
};
export default Icon