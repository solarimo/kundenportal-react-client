import React from 'react';
import { Route, Switch } from 'react-router-dom';
import AddressCheck from './components/address-check/AddressCheck';
import { Calculator } from './components/calculator/Calculator';
import { RegisterNavbar } from './components/register-navbar/RegisterNavbar';

import './Register.css';

export class Register extends React.Component {



  render() {
    return (
      <div>
        <RegisterNavbar />
        <Switch>
          <Route exact path="/register" component={AddressCheck}/>
          <Route exact path="/register/verfuegbarkeit" component={AddressCheck}/>
          <Route exact path="/register/ihr-tarif" component={Calculator}/>
        </Switch>
      </div>

    );
  }



}