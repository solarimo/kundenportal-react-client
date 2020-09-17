import React from 'react';
import { NavLink } from 'react-router-dom';

import './RegisterNavbar.css'

export class RegisterNavbar extends React.Component {

  render() {
    return (
      <div className="register-navbar">
        <ul className="navbar">
          <li><NavLink activeClassName="register-nav-active" to="/register/verfuegbarkeit">Verfügbarkeit</NavLink></li>
          <li><NavLink activeClassName="register-nav-active" to="/register/ihr-tarif">Ihr Tarif</NavLink></li>
          <li><NavLink activeClassName="register-nav-active" to="/register/vertragsdaten">Vertragsdaten</NavLink></li>
          <li><NavLink activeClassName="register-nav-active" to="/register/uebersicht">Übersicht</NavLink></li>
        </ul>
      </div>
    );
  }
}