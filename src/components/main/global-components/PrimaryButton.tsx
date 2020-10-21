import { CircularProgress } from '@material-ui/core';
import React, { FunctionComponent } from 'react';
import './global-components.css';


interface PrimaryButtonProps {
  content: string;
  showSpinner?: boolean;
  disabled?: boolean;
  type?: 'button' | 'submit';
  onClick?: () => void;
}


export const PrimaryButton: FunctionComponent<PrimaryButtonProps> = (props: PrimaryButtonProps): JSX.Element => {
  return (
    <button onClick={props.onClick} type={props.type || 'submit'} disabled={props.disabled || false}>
      <div className="btn-flex-content">
      {props.content}
      { props.showSpinner &&
        < CircularProgress size={30} style={{ marginLeft: '5px' }} />
      }
      </div>
    </button>
  )
}