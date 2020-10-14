import React from 'react';

export function renderInput({label, input, meta}: any) {
  return (
    <div>
      <label>{label}</label>
      <input className={(meta.touched && meta.error) ? 'field-error' : '' } {...input} type="text" />
  {(meta.touched && meta.error) &&  <span style={{ color: 'red', fontSize: '10px' }} >{meta.error}</span> }
    </div>
  );
}