export const basicUseCode = `import React, {FC} from 'react';

export const Demo: FC = () => {
  return (
    <Button type='primary' onClick={() => message.success('this is success message')}>success</Button>
    <Button type='primary' onClick={() => message.success('this is error message')}>error</Button>
    <Button type='primary' onClick={() => message.success('this is info message')}>info</Button>
    <Button type='primary' onClick={() => message.success('this is warning message')}>warning</Button>
  );
};`;
