import { CircularProgress } from '@material-ui/core';
import React, { FunctionComponent } from 'react';
import { v4 as uuid } from 'uuid';
import { Link } from 'react-router-dom';
import './global-components.css';


interface NavigationButtonProps {
  content: string;
  showSpinner?: boolean;
  disabled?: boolean;
  to: string;
  id?: string;
  type?: 'button' | 'submit';
}


export const NavigationButton: FunctionComponent<NavigationButtonProps> = (props: NavigationButtonProps): JSX.Element => {

  return (
    <Link  to={props.disabled ? '#' : props.to}>
    <button id={props.id || uuid() } disabled={props.disabled || false} type={props.type || 'submit'}>
      <div className="btn-flex-content">
      {props.content}
      { props.showSpinner &&
        < CircularProgress size={30} style={{ marginLeft: '5px' }} />
      }
      </div>
    </button>
    </Link>
  )
}