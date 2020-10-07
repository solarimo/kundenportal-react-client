import React from 'react';
import { Snackbar } from '@material-ui/core';
import MuiAlert, { AlertProps } from '@material-ui/lab/Alert';


interface Props {
  show: boolean
  onClose: any
}

const Alert = (props: AlertProps) => {
  return <MuiAlert elevation={6} variant="filled" {...props} />;
}


export const CustomSnackbar = ({ show, onClose }: Props) => {
  return (
    <Snackbar
      open={show}
      autoHideDuration={3000}
      onClose={onClose}>
      <Alert severity="error">Oops... Leider nicht verfügbar!</Alert>
    </Snackbar>
  )
}