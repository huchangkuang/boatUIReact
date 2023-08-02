import React, {
  cloneElement,
  createContext,
  FC,
  PropsWithChildren,
  useContext,
  useState,
} from "react";

export interface FormLessProps extends PropsWithChildren {
  formData: Record<string, any>;
  onChange?: (value: Record<string, any>) => void;
}
export const FormLessContext = createContext<Record<string, any>>({});

const FormLess: FC<FormLessProps> = (props) => {
  const { children, formData, onChange } = props;
  const [innerData, setInnerData] = useState(formData);
  return (
    <FormLessContext.Provider value={{ innerData, setInnerData, formData, onChange }}>
      {children}
    </FormLessContext.Provider>
  );
};
export interface FormLessItemProps extends PropsWithChildren {
  name: string;
}
export const FormLessItem: FC<FormLessItemProps> = (props) => {
  const { children, name } = props;
  const { innerData, setInnerData, formData, onChange } = useContext(FormLessContext);
  const newProps = {
    value: (onChange ? formData : innerData)[name],
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => {
      const { value } = e.target;
      if (onChange) {
        onChange?.({ ...formData, [name]: value })
      } else {
        setInnerData((data) => ({ ...data, [name]: value }));
      }
    },
  };
  if (React.Children.only(children) && React.isValidElement(children))
    return cloneElement(children, newProps);
  return <>{children}</>;
};
export default FormLess;
