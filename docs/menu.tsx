import React, { ReactNode } from "react";
import { DialogDemo } from "./dialog/dialogDemo";
import { LayoutDemo } from "./layout/layoutDemo";
import { FormLessDemo } from "./formLess/formLessDemo";
import { ButtonDemo } from "./button/buttonDemo";
import { QuickStart } from "./quickStart/quickStart";
import { IconDemo } from "./icon/iconDemo";
import { ScrollDemo } from "./scroll/scrollDemo";
import { MessageDemo } from "./message/messageDemo";

export type Menu =
  | "quickStart"
  | "icon"
  | "button"
  | "layout"
  | "form"
  | "dialog"
  | "scroll"
  | "message";
export type MenuItem = {
  title: string;
  list: { key: Menu; title: ReactNode }[];
};
export const menuList: MenuItem[] = [
  {
    title: "",
    list: [
      {
        key: "quickStart",
        title: "快速开始",
      },
    ],
  },
  {
    title: "通用",
    list: [
      {
        key: "icon",
        title: "Icon 图标",
      },
      {
        key: "button",
        title: "Button 按钮",
      },
      {
        key: "layout",
        title: "Layout 布局",
      },
      {
        key: "scroll",
        title: "Scroll 滚动条",
      },
    ],
  },
  {
    title: "数据",
    list: [
      {
        key: "form",
        title: "Form 表单",
      },
    ],
  },
  {
    title: "反馈",
    list: [
      {
        key: "dialog",
        title: "Dialog 对话框",
      },
      {
        key: "message",
        title: "Message 全局提示",
      },
    ],
  },
];

export const componentMap: Record<Menu, ReactNode> = {
  icon: <IconDemo />,
  quickStart: <QuickStart />,
  button: <ButtonDemo />,
  layout: <LayoutDemo />,
  form: <FormLessDemo />,
  dialog: <DialogDemo />,
  scroll: <ScrollDemo />,
  message: <MessageDemo />,
};
