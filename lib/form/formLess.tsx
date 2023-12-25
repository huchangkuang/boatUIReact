import React, {
  cloneElement,
  createContext,
  FC,
  PropsWithChildren,
  useContext,
  useEffect,
  useState,
} from "react";
import useForm, { FormInstance } from "./useForm";

export interface FormLessProps<P = Record<string, any>>
  extends PropsWithChildren {
  form?: FormInstance;
  onFinish?: (fields: Record<string, any>) => void;
  onFinishFailed?: (err: any[]) => void;
}
export const FormLessContext = createContext<Record<string, any>>({});

function FormLess<T extends Record<string, any>>(props: FormLessProps<T>) {
  const { children, form, onFinish, onFinishFailed } = props;
  const [formInstance] = useForm(form);
  const {
    getFieldValue,
    getFieldsValue,
    setFieldsValue,
    registerEntities,
    onSubmit,
    setCallbacks,
  } = formInstance;
  setCallbacks({ onFinish, onFinishFailed });
  const submit = (e) => {
    e.preventDefault();
    onSubmit();
  };
  return (
    <FormLessContext.Provider
      value={{ getFieldValue, setFieldsValue, registerEntities }}
    >
      <form onSubmit={submit}>{children}</form>
    </FormLessContext.Provider>
  );
}
export interface FormLessItemProps extends PropsWithChildren {
  name: string;
}
export const FormLessItem: FC<FormLessItemProps> = (props) => {
  const { children, name } = props;
  const { getFieldValue, setFieldsValue, registerEntities } =
    useContext(FormLessContext);
  const [_, force] = useState(false);
  useEffect(() => {
    const unRegisterEntities = registerEntities({
      forceUpdate: () => {
        force((v) => !v);
      },
      name,
    });
    return () => {
      unRegisterEntities();
    };
  }, []);
  const newProps: Record<string, any> = {
    value: getFieldValue(name),
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => {
      const { value } = e.target;
      setFieldsValue({ [name]: value });
    },
  };
  if (React.Children.only(children) && React.isValidElement(children))
    return cloneElement(children, newProps);
  return <>{children}</>;
};
export default FormLess;
