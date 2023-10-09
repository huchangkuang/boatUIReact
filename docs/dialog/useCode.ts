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
  const content = (
    <>
      <div>Some contents...</div>
      <div>Some contents...</div>
      <div>Some contents...</div>
      <div>Some contents...</div>
    </>
  );
  return (
    <>
      <Button
        type="primary"
        onClick={() => dialogModal({ content, title: "dialogModal" })}
      >
        dialogModal
      </Button>
      <Button
        type="primary"
        onClick={() => dialogConfirm({ content: "confirm" })}
      >
        dialogConfirm
      </Button>
      <Button
        type="primary"
        onClick={() =>
          dialogAlert({
            title: "dialogAlert",
            content: "alert",
            confirmText: "yes",
          })
        }
      >
        dialogAlert
      </Button>
    </>
  );
};`;
