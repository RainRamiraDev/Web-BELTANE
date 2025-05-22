// src/components/TextAreaPer.jsx
import React from 'react';

const TextAreaPer = ({ value, name, plac, change, disabled, rows = 5 }) => {
  return (
    <textarea
      name={name}
      value={value}
      onChange={change}
      placeholder={plac}
      rows={rows}
      disabled={disabled}
    />
  );
};

export default TextAreaPer;
