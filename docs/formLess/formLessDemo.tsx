import React, { FC, useState } from "react";
import FormLess, { FormLessItem } from "../../lib/form/formLess";

type FormData = {
  name: string;
  password: string;
  mobile: string;
};
export const FormLessDemo: FC = () => {
  const [formData, setFormData] = useState<FormData>({
    name: "test",
    password: "123456",
    mobile: "1234125325",
  });
  const onSubmit = (value: FormData) => {
    console.log(value);
  };
  console.log(formData, "form");
  return (
    <div>
      <FormLess<FormData> formData={formData} onSubmit={onSubmit}>
        <FormLessItem name="name">
          <input />
        </FormLessItem>
        <FormLessItem name="password">
          <input />
        </FormLessItem>
        <FormLessItem name="mobile">
          <input />
        </FormLessItem>
        <FormLessItem name="button" type="submit">
          <button>submit</button>
        </FormLessItem>
      </FormLess>
    </div>
  );
};
