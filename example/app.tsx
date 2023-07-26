import React, {FC, useState} from "react";
import {DialogDemo} from "./dialog/dialogDemo";
import {LayoutDemo} from "./layout/layoutDemo";

export const App: FC = () => {
  return (
    <div>
      <div>dialogDemo</div>
      <DialogDemo />
      <div style={{border: '1px solid #eee', margin: "20px 0"}} />
      <div>LayoutDemo</div>
      <LayoutDemo/>
      <div style={{border: '1px solid #eee', margin: "20px 0"}} />
    </div>
  );
};