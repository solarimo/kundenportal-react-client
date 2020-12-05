import React, { FunctionComponent } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { StoreState } from '../../../reducers';

interface OwnProps {
  isLoggedIn: boolean;
}

const _Welcome = (props: OwnProps): JSX.Element => {


  return (
    <div>
      <h1>Willkommen!</h1>

      { props.isLoggedIn 
        ? 
         <Link to="/portal/meine-daten">Mein Portal</Link>
        :
         <Link to="/register/verfuegbarkeit">Registrieren</Link>
      }
      
    </div>
  );
}

const mapStateToProps = ({ auth }: StoreState) => {
  return { isLoggedIn: auth.isLoggedIn };
}

export const Welcome = connect(mapStateToProps, null)(_Welcome);