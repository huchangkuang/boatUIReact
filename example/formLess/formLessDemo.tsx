import React, {FC, useState} from 'react';
import FormLess, {FormLessItem} from "../../lib/form/formLess";

export const FormLessDemo: FC = () => {
  const [formData, setFormData] = useState({
    name: 'test',
    password: '123456',
    mobile: '1234125325'
  })
  console.log(formData,'form');
  return (
    <div>
      <FormLess formData={formData} onChange={setFormData}>
        <FormLessItem name='name'>
          <input />
        </FormLessItem>
        <FormLessItem name='password'>
          <input />
        </FormLessItem>
        <FormLessItem name='mobile'>
          <input />
        </FormLessItem>
      </FormLess>
    </div>
  );
};