import React from 'react';
import { Route, Switch } from 'react-router-dom';
import { AddressCheck } from './AddressCheck';
import { RegisterNavbar } from './components/register-navbar/RegisterNavbar';

import './Register.css';

interface Address {
  strasse: string,
  hausnummer: number | null,
  postleitzahl: number | null,
  stadt: string
}

interface RegisterState {
  address: Address
}

export class Register extends React.Component<{}, RegisterState> {

  constructor(props: {}) {
    super(props);

    this.state = ({
      address: {
        strasse: '',
        hausnummer: null,
        postleitzahl: null,
        stadt: ''
      }
    })
  }

  render() {
    return (
      <div>
        <RegisterNavbar />
        <Switch>
          <Route exact path="/register" component={AddressCheck}/>
          <Route exact path="/register/verfuegbarkeit" component={AddressCheck}/>
        </Switch>
      </div>

    );
  }



}