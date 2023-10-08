export const basicUseCode = `import React, {FC} from 'react';

export const Demo: FC = () => {
  return (
    <>
      <Icon name='add' />
      <Icon name='addNoCircle' />
      <Icon name='beauty' />
    </>
  );
};`

export const sizeUseCode = `import React, {FC} from 'react';

export const Demo: FC = () => {
  return (
    <>
      <Icon name='add' size={32} />
      <Icon name='addNoCircle' size='2em' />
      <Icon name='beauty' size='32px' />
    </>
  );
};`

export const colorUseCode = `import React, {FC} from 'react';

export const Demo: FC = () => {
  return (
    <>
      <Icon name='add' size={32} fill='red' />
      <Icon name='addNoCircle' size='2em' fill='#8FBC94' />
      <Icon name='beauty' size='32px' color='#C5E99B' />
    </>
  );
};`
