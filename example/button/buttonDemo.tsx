import React, {FC, useState} from 'react';
import {Button, Icon} from "../../lib";

type ButtonDemoProps = {

};
export const ButtonDemo: FC<ButtonDemoProps> = (props) => {
  const [loading, setLoading] = useState(false)
  const onLoadingClick = () => {
    setLoading(true)
    setTimeout(() => {
      setLoading(false)
    },2000)
  };
  return (
    <div>
      <Button>test</Button>
      <Button size='small'>test</Button>
      <Button size='large'>test</Button>
      <Button type='primary'>test</Button>
      <Button type='text'>test</Button>
      <Button type='dashed'>test</Button>
      <Button type='link'>test</Button>
      <Button disabled>test</Button>
      <Button type='primary' disabled>test</Button>
      <Button type='text' disabled>test</Button>
      <Button type='dashed' disabled>test</Button>
      <Button type='link' disabled>test</Button>
      <Button icon={<Icon name='star' />}>test</Button>
      <Button icon={<Icon name='star' />} iconPosition='right'>test</Button>
      <Button type='primary' icon={<Icon name='star' />}>test</Button>
      <Button loading={loading} onClick={onLoadingClick}>loading</Button>
      <Button loading={loading} onClick={onLoadingClick} type='primary'>loading</Button>
    </div>
  );
};