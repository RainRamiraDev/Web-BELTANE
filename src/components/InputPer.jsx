// src/components/InputPer.jsx
import React from 'react';

const InputPer = ({ type, value, name, plac, change, disabled }) => {
  return (
    <input
      type={type}
      name={name}
      value={value}
      onChange={change}
      placeholder={plac}
      disabled={disabled}
    />
  );
};

export default InputPer;
