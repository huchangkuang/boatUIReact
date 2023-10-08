export const basicUseCode = `import React, {FC} from 'react';

export const Demo: FC = () => {
  const [openDialog, setOpenDialog] = useState(false);

  return (
    <>
      <Button type='primary' onClick={() => setOpenDialog(true)}>open dialog</Button>
      <Dialog title='Basic Use' isOpen={openDialog} onClose={() => setOpenDialog(false)}>
        <div>Some contents...</div>
        <div>Some contents...</div>
        <div>Some contents...</div>
        <div>Some contents...</div>
      </Dialog>
    </>
  );
};`;

export const fnUseCode = `import React, {FC} from 'react';

export const Demo: FC = () => {
  const [openDialog, setOpenDialog] = useState(false);

  return (
    <>
      <Button type='primary' onClick={() => dialogModal("modal")}>open modal</Button>
      <Button type='primary' onClick={() => dialogConfirm({content: "confirm"})}>open modal</Button>
      <Button type='primary' onClick={() => dialogAlert({
        content: "alert",
        confirmText: "yes",
      })}>open modal</Button>
    </>
  );
};`;

