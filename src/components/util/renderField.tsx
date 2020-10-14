import React from 'react';

export interface Value {
  value: string;
  displayed: string;
}

export function renderInput({ label, input, meta }: any) {
  return (
    <div>
      <label>{label}</label>
      <input className={(meta.touched && meta.error) ? 'field-error' : ''} {...input} type="text" />
      {(meta.touched && meta.error) && <span style={{ color: 'red', fontSize: '10px' }} >{meta.error}</span>}
    </div>
  );
}

export function renderSelect({ label, input, meta, values }: any) {
  return (
    <div>
      <label>{label}</label>
      <select>
        <option></option>
        {renderOptions(values as Value[])}
      </select>
    </div>
  );
}


function renderOptions(values: Value[]) {
  return values.map(value => {
    return <option key={value.value} value={value.value}>{value.displayed}</option>
  });
}