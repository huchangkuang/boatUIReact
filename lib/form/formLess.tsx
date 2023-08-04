import React, {
  cloneElement,
  createContext,
  FC,
  PropsWithChildren,
  useContext,
  useState,
} from "react";
import { filterObjAttr } from "../utils/filterObjAttr";

export interface FormLessProps<P = Record<string, any>>
  extends PropsWithChildren {
  formData: P;
  onChange?: (value: P) => void;
  onSubmit?: (value: P) => void;
}
export const FormLessContext = createContext<Record<string, any>>({});

function FormLess<T extends Record<string, any>>(props: FormLessProps<T>) {
  const { children, formData, onChange, onSubmit } = props;
  const [innerData, setInnerData] = useState(formData);
  return (
    <FormLessContext.Provider
      value={{ innerData, setInnerData, formData, onChange, onSubmit }}
    >
      {children}
    </FormLessContext.Provider>
  );
}
export interface FormLessItemProps extends PropsWithChildren {
  name: string;
  type?: "submit";
}
export const FormLessItem: FC<FormLessItemProps> = (props) => {
  const { children, name, type } = props;
  const { innerData, setInnerData, formData, onChange, onSubmit } =
    useContext(FormLessContext);
  const newProps: Record<string, any> = {
    value: (onChange ? formData : innerData)[name],
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => {
      const { value } = e.target;
      if (onChange) {
        onChange?.({ ...formData, [name]: value });
      } else {
        setInnerData((data) => ({ ...data, [name]: value }));
      }
    },
    onClick:
      type === "submit"
        ? () => {
            onSubmit?.(onChange ? formData : innerData);
          }
        : undefined,
  };
  if (React.Children.only(children) && React.isValidElement(children))
    return cloneElement(children, filterObjAttr(newProps));
  return <>{children}</>;
};
export default FormLess;
