export const basicUseCode = `import React, {FC} from 'react';

export const Demo: FC = () => {
  return (
    <>
      <Scroll height={300}>
        {new Array(100).fill('').map((i, index) => <div key={index}>some content...</div>)}
      </Scroll>
    </>
  );
};`;
