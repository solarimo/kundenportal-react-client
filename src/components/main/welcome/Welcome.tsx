import React, { FunctionComponent } from 'react';
import { Link } from 'react-router-dom';

export const Welcome: FunctionComponent = (): JSX.Element => {
  return (
    <div>
      <h1>Willkommen!</h1>
      <Link to="/portal">Mein Portal</Link>
      <br/>
      <Link to="/register">Registrieren</Link>
    </div>
  );
}