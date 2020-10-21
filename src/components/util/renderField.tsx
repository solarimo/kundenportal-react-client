import React from 'react';

export interface Option {
  value: string;
  displayed: string;
}

export function renderInput({ onInput ,hidden, label, input, meta, hintText, type }: any) {  
  return (
    <div>
      <label>{label}</label>
      <input  onInput={onInput} hidden={hidden || false} className={(meta.touched && meta.error) ? 'field-error' : ''} {...input} type={type || 'text'} placeholder={hintText || ''} />
      {(meta.touched && meta.error) && <span style={{ color: 'red', fontSize: '10px' }} >{meta.error}</span>}
    </div>
  );
}

export function renderSelect({ label, input, meta, options }: any) {
  return (
    <div>
      <label>{label}</label>
      <select className={(meta.touched && meta.error) ? 'field-error' : ''} {...input}>
        <option></option>
        {renderOptions(options as Option[])}
      </select>
      
      
      {(meta.touched && meta.error) && <span style={{ color: 'red', fontSize: '10px' }} >{meta.error}</span>}
    </div>
  );
}


function renderOptions(values: Option[]) {
  return values.map(option => {
    return <option key={option.value} value={option.value}>{option.displayed}</option>
  });
}