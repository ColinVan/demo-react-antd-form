import React, { type FC } from 'react';
import { Form, Button, Select, Space } from 'antd';

import { dropOptions, options } from './data';
import MyInput from './components/MyInput';
import MyDropDown from './components/MyDropDown';
import { useUpdate } from 'ahooks';
import formatTimeSpan from './utils/timeDuration';

import './index.css';

/**
 * 假设我想实现 field1 对 field2 的主动关系，当 field1 的值变了也修改 fleid2 的值
 */
const App: FC = () => {
  const [form] = Form.useForm();
  const update = useUpdate();
  // console.log(
  //   `表单重新渲染，此时表单值为: ${JSON.stringify(form.getFieldsValue())}`
  // );

  return (
    <>
      <Form
        form={form}
        name="dependencies"
        autoComplete="off"
        style={{ maxWidth: 600 }}
        layout="vertical"
        onFieldsChange={(changedFields, allFields) => {
          // console.log(`--> changedFields: ${JSON.stringify(changedFields)}`);
          // console.log(`--> allFields: ${JSON.stringify(allFields)}`);
        }}
      >
        <Form.Item label="label1" name="field1" initialValue="100">
          {/*@ts-ignore */}
          <MyInput
            fieldId="field1"
            relatives={['field2']}
            placeholder="请输入一个随机整数"
          />
        </Form.Item>
        <Form.Item label="label2" name="field2">
          {/*@ts-ignore */}
          <MyInput fieldId="field2" />
        </Form.Item>
        <Form.Item label="label3" name="field3" initialValue={options[0]}>
          <Select options={options} />
        </Form.Item>
        <Form.Item label="label4" name="field4" initialValue={dropOptions[0]}>
          <MyDropDown dropOptions={dropOptions} />
        </Form.Item>
        <Form.Item label="label5" name="field5">
          <Select />
        </Form.Item>
        <Form.Item noStyle dependencies={['field1']} label="测试">
          {() => <p>{formatTimeSpan(form.getFieldValue('field1'))}</p>}
        </Form.Item>
      </Form>
      <Space>
        <Button
          onClick={() => {
            form.setFieldValue('field1', String(Math.random() * 10000));
          }}
        >
          点我给 Field1 赋值
        </Button>
        <Button
          type="primary"
          onClick={() => {
            form.resetFields();
          }}
        >
          重置表单
        </Button>
      </Space>
    </>
  );
};

export default App;
