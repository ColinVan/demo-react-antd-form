import { Form, InputProps, Input } from 'antd';
import React, {
  FC,
  useRef,
  useCallback,
  useEffect,
  SyntheticEvent,
} from 'react';

type MyInputProps = Required<Pick<InputProps, 'value' | 'onChange'>> & {
  fieldId: string;
  relatives?: string[];
};
/**
 * 自定义 Input 组件
 */
const MyInput: FC<MyInputProps> = (props) => {
  const form = Form.useFormInstance();
  const inputRef = useRef(null);

  const onChange: InputProps['onChange'] = useCallback((event) => {
    console.log(`--> ${props.fieldId} 触发了 onChange`);
    props.onChange?.(event);
    // then...
    // console.log(
    //   `当前值：${event.target.value}；当前表单值：${JSON.stringify(
    //     form.getFieldsValue()
    //   )}`
    // );
    props.relatives?.forEach((relativeField) => {
      form.setFieldValue(relativeField, `联动的-${event.target.value}`);
    });
  }, []);

  useEffect(() => {
    // 当值发生变化时，触发一次 onChange 事件
    onChange({ target: inputRef.current.input } as SyntheticEvent);
  }, [props.value]);

  return (
    <Input
      {...props}
      onChange={onChange}
      ref={inputRef}
      placeholder="请输入"
      allowClear
    />
  );
};

export default MyInput;
