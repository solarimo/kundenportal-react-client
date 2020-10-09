import { CircularProgress } from '@material-ui/core';
import React, { FunctionComponent } from 'react';
import { Link } from 'react-router-dom';
import './global-components.css';


interface NavigationButtonProps {
  content: string;
  showSpinner: boolean;
  disabled: boolean;
  to: string;
}


export const NavigationButton: FunctionComponent<NavigationButtonProps> = (props: NavigationButtonProps): JSX.Element => {
  return (
    <Link to={props.to}>
    <button disabled={props.disabled} type="submit">
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