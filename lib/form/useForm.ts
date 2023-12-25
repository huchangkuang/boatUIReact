import { useRef } from "react";

export type FormInstance = ReturnType<FormStore["getForm"]>;
export type FieldInstance = {
  forceUpdate: () => void;
  name: string;
};
class FormStore {
  store: Record<string, any>;
  filedEntities: any[];
  callbacks: any;
  constructor() {
    this.store = {};
    this.filedEntities = [];
  }

  registerEntities = (field: FieldInstance) => {
    this.filedEntities.push(field);

    return () => {
      this.filedEntities.filter((i) => i !== field);
    };
  };
  setCallbacks = (callbacks: any) => {
    this.callbacks = {
      ...this.callbacks,
      ...callbacks,
    };
  };

  validate = () => {
    const err = [];
    // todo 规则校验
    return err;
  };

  onSubmit = () => {
    const err = this.validate();
    if (err.length) {
      this.callbacks.onFinishFailed?.(err);
    } else {
      this.callbacks.onFinish?.(this.store);
    }
  };

  getFieldValue = (name: string) => {
    return this.store[name];
  };

  getFieldsValue = () => {
    return this.store;
  };

  setFieldsValue = (newState: Record<string, any>) => {
    this.store = {
      ...this.store,
      ...newState,
    };
    const keys = Object.keys(newState);
    this.filedEntities
      .filter((i) => keys.includes(i.name))
      .forEach((i) => {
        i.forceUpdate();
      });
  };

  getForm = () => {
    return {
      getFieldValue: this.getFieldValue,
      getFieldsValue: this.getFieldsValue,
      setFieldsValue: this.setFieldsValue,
      registerEntities: this.registerEntities,
      setCallbacks: this.setCallbacks,
      onSubmit: this.onSubmit,
      validate: this.validate,
    };
  };
}

const useForm = (form?: FormInstance): [FormInstance] => {
  const formRef = useRef<FormInstance>();
  if (form) {
    formRef.current = form;
  } else {
    const formStore = new FormStore();
    formRef.current = formStore.getForm();
  }

  return [formRef.current];
};

export default useForm;
