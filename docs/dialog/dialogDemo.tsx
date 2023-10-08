import React, {FC, useState} from 'react';
import Dialog, {dialogAlert, dialogConfirm, dialogModal} from "../../lib/dialog/dialog";

export const DialogDemo: FC = () => {
  const [openDialog, setOpenDialog] = useState(false)

  return (
    <div>
      <div onClick={() => setOpenDialog(true)}>dialog</div>
      <div onClick={() => dialogModal('modal')}>modal</div>
      <div onClick={() => dialogConfirm({
        content: 'confirm',
      })}>confirm</div>
      <div onClick={() => dialogAlert({
        content: 'alert',
        confirmText: 'yes'
      })}>alert</div>
      <Dialog isOpen={openDialog} onClose={() => setOpenDialog(false)}>
        <div>adfadsfdafasdfasdfaadfadsfdafasdfasdfa</div>
        <div>adfadsfdafasdfasdfa</div>
        <div>adfadsfdafasdfasdfa</div>
        <div>adfadsfdafasdfasdfa</div>
      </Dialog>
    </div>
  );
};