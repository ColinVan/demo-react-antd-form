import React, { useCallback, useState } from 'react';
import { Button, Form, Input, Select, Row, Col, Typography } from 'antd';

const { Option } = Select;

type Currency = 'rmb' | 'dollar';

interface PriceValue {
  number?: number;
  currency?: Currency;
}

interface PriceInputProps {
  value?: PriceValue;
  onChange?: (value: PriceValue) => void;
}

const PriceInput: React.FC<PriceInputProps> = ({ value, onChange }) => {
  const triggerChange = (changedValue: {
    number?: number;
    currency?: Currency;
  }) => {
    onChange?.({ ...value, ...changedValue });
  };

  const onNumberChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newNumber = parseInt(e.target.value || '0', 10);
    const oldNumber = value.number;
    triggerChange({ number: newNumber });
  };

  const onCurrencyChange = (newCurrency: Currency) => {
    triggerChange({ currency: newCurrency });
  };

  return (
    <span>
      <Input type="text" onChange={onNumberChange} style={{ width: 100 }} />
      <Select
        value={value.currency}
        style={{ width: 80, margin: '0 8px' }}
        onChange={onCurrencyChange}
      >
        <Option value="rmb">RMB</Option>
        <Option value="dollar">Dollar</Option>
        <Option value="jp">日元</Option>
      </Select>
    </span>
  );
};

export default PriceInput;


// HOC:
function BeforeChange(props) {
    const onChange = async (value) => {
      const res = await props?.beforeOnchange(value);
      res && props.onChange(value);
    };
    const { Component } = props;
    return <Component value={props.value} onChange={onChange} />;
  }

