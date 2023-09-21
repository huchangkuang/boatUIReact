import React, {FC} from 'react';
import {Button} from "../../lib";

type ButtonDemoProps = {

};
export const ButtonDemo: FC<ButtonDemoProps> = (props) => {
  return (
    <div>
      <Button>test</Button>
      <Button type='primary'>test</Button>
      <Button type='text'>test</Button>
      <Button type='dashed'>test</Button>
      <Button type='link'>test</Button>
      <Button disabled>test</Button>
      <Button type='primary' disabled>test</Button>
      <Button type='text' disabled>test</Button>
      <Button type='dashed' disabled>test</Button>
      <Button type='link' disabled>test</Button>
    </div>
  );
};