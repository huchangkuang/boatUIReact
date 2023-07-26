import React, {cloneElement, createContext, FC, PropsWithChildren, useContext, useEffect, useState} from 'react';

export interface FormLessProps extends PropsWithChildren {
  formData: Record<string, any>;
  onChange?: (value: Record<string, any>) => void;
}
export const FormLessContext = createContext<FormLessProps['formData']>({})

const FormLess: FC<FormLessProps> = (props) => {
  const {children, formData, onChange} = props
  const [innerData, setInnerData] = useState(formData)
  useEffect(() => {
    onChange?.(innerData)
  }, [innerData])
  return (
    <FormLessContext.Provider value={{innerData, setInnerData}}>
      {children}
    </FormLessContext.Provider>
  );
};
export interface FormLessItemProps extends PropsWithChildren{
  name: string;
}
export const FormLessItem: FC<FormLessItemProps> = (props) => {
  const {children, name} = props
  const {innerData, setInnerData} = useContext(FormLessContext)
  const newProps = {
    value: innerData[name],
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => {
      const {value} = e.target
      setInnerData(data => ({...data, [name]: value}))
    }
  }
  if (React.Children.only(children) && React.isValidElement(children)) return cloneElement(children, newProps);
  return <>
    {children}
  </>;
}
export default FormLess