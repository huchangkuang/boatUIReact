import React, {FC} from 'react';
import {Icon} from "../../lib";

type IconDemoProps = {

};
export const IconDemo: FC<IconDemoProps> = (props) => {
  return (
    <div>
      <Icon name='add' />
      <Icon name='bill' />
      <Icon name='avatar' />
      <Icon name='chat' />
    </div>
  );
};