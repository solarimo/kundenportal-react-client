import React, { FunctionComponent } from 'react';

interface PrimaryButtonProps {
  text: string
}

export const PrimaryButton: FunctionComponent<PrimaryButtonProps> = (props: PrimaryButtonProps): JSX.Element => {
  return (
    <button type="submit">
      {props.text}
    </button>
  )
}