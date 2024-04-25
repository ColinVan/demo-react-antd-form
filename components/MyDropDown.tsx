import React, { type FC } from 'react';
import { Button, Dropdown } from 'antd';

/**
 * 子定义下拉框表单组件
 */
const MyDropDown = (props) => {
  const { value, dropOptions, onChange } = props;
  // const form = Form.useFormInstance();
  const items = dropOptions.map((opt) => {
    const label = <span onClick={() => onChange(opt.key)}>{opt.label}</span>;
    return { ...opt, label };
  });
  return (
    <Dropdown menu={{ items }} trigger={['click']}>
      <Button>{value.key} ↓</Button>
    </Dropdown>
  );
};

export default MyDropSown;
