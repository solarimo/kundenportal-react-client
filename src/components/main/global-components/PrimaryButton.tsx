import { CircularProgress } from '@material-ui/core';
import React, { FunctionComponent } from 'react';
import './global-components.css';
import { v4 as uuid } from 'uuid';



interface PrimaryButtonProps {
  content: string;
  showSpinner?: boolean;
  disabled?: boolean;
  type?: 'button' | 'submit';
  onClick?: () => void;
  id?: string;
}


export const PrimaryButton: FunctionComponent<PrimaryButtonProps> = (props: PrimaryButtonProps): JSX.Element => {
  return (
    <button  id={props.id || uuid() } onClick={props.onClick} type={props.type || 'submit'} disabled={props.disabled || false}>
      <div className="btn-flex-content">
      {props.content}
      { props.showSpinner &&
        < CircularProgress size={30} style={{ marginLeft: '5px' }} />
      }
      </div>
    </button>
  )
}