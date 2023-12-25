import React, {FC, useEffect} from "react";
import {Button, Form} from "../../lib/index";

const {FormLess, FormLessItem, useForm} = Form

type FormData = {
  name: string;
  password: string;
  mobile: string;
};
export const FormLessDemo: FC = () => {
  const [form] = useForm()
  useEffect(() => {
    form.setFieldsValue({
      name: "test",
      password: "123456",
      mobile: "1234125325",
    })
  }, []);
  return (
    <div>
      <FormLess form={form} onFinish={v => console.log(v)}>
        <FormLessItem name="name">
          <input />
        </FormLessItem>
        <FormLessItem name="password">
          <input />
        </FormLessItem>
        <FormLessItem name="mobile">
          <input />
        </FormLessItem>
        <Button type='primary' htmlType='submit'>submit</Button>
      </FormLess>
    </div>
  );
};
