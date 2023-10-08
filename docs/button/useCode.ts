export const basicUseCode = `import React, {FC} from 'react';

export const Demo: FC = () => {
  return (
    <>
      <Button>default</Button>
      <Button type='primary'>primary</Button>
      <Button type='text'>text</Button>
      <Button type='dashed'>dashed</Button>
      <Button type='link'>link</Button>
    </>
  );
};`;

export const sizeUseCode = `import React, {FC} from 'react';

export const Demo: FC = () => {
  return (
    <>
      <Button size='small'>small</Button>
      <Button>default</Button>
      <Button size='large'>large</Button>
    </>
  );
};`;

export const disabledUseCode = `import React, {FC} from 'react';

export const Demo: FC = () => {
  return (
    <>
      <Button disabled>test</Button>
      <Button type='primary' disabled>test</Button>
      <Button type='text' disabled>test</Button>
      <Button type='dashed' disabled>test</Button>
      <Button type='link' disabled>test</Button>
    </>
  );
};`;

export const iconUseCode = `import React, {FC} from 'react';

export const Demo: FC = () => {
  const [loading, setLoading] = useState(false)
  const onLoadingClick = () => {
    setLoading(true)
    setTimeout(() => {
      setLoading(false)
    },2000)
  };
  return (
    <>
      <Button icon={<Icon name='star' />}>icon left</Button>
      <Button icon={<Icon name='star' />} iconPosition='right'>icon right</Button>
      <Button type='primary' icon={<Icon name='star' />}>icon right primary</Button>
      <Button loading={loading} onClick={onLoadingClick}>loading</Button>
      <Button loading={loading} onClick={onLoadingClick} type='primary'>loading primary</Button>
      <Button loading={loading} onClick={onLoadingClick} loadIcon='star'>custom loading icon</Button>
    </>
  );
};`;
