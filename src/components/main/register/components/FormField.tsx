import React, { FunctionComponent } from 'react';

interface FormFieldProps {
  id: string,
  labelName: string
  width?: string
}

export const FormField: FunctionComponent<FormFieldProps> = (props: FormFieldProps): JSX.Element => {

  return (
    <div style={{width: !props.width ? '100%' : props.width}}>
      <label htmlFor={props.id}>{props.labelName}</label>
      <input type="text" id={props.id}/>
    </div>
  )
}