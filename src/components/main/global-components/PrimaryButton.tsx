import { CircularProgress } from '@material-ui/core';
import React, { FunctionComponent } from 'react';
import './global-components.css';


interface PrimaryButtonProps {
  content: string;
  showSpinner: boolean;
  disabled: boolean;
}


export const PrimaryButton: FunctionComponent<PrimaryButtonProps> = (props: PrimaryButtonProps): JSX.Element => {
  return (
    <button disabled={props.disabled} type="submit">
      <div className="btn-flex-content">
      {props.content}
      { props.showSpinner &&
        < CircularProgress size={30} style={{ marginLeft: '5px' }} />
      }
      </div>
    </button>
  )
}