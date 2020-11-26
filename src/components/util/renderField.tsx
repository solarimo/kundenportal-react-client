import { FormControlLabel } from '@material-ui/core';
import React from 'react';
import { YellowCheckBox } from '../main/global-components/YellowCheckBox';
import { v4 as uuid } from 'uuid';

export interface Option {
  value: string;
  displayed: string;
}

export function renderInput({ onInput ,hidden, label, input, meta, hintText, type, id }: any) {  
  return (
    <div>
      <label>{label}</label>
      <input id={id || uuid()} onInput={onInput} hidden={hidden || false} className={(meta.touched && meta.error) ? 'field-error' : ''} {...input} type={type || 'text'} placeholder={hintText || ''} />
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

export function renderCheckbox({ input, label }: any) {
  return (
    <React.Fragment>
    <FormControlLabel
      control={<YellowCheckBox {...input} />}
      label={label}
      labelPlacement="end"
    />
    <br/>
    </React.Fragment>
  );
}