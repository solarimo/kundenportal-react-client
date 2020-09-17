import React from 'react';
import { Link, NavLink } from 'react-router-dom';

import './RegisterNavbar.css'

export class RegisterNavbar extends React.Component {

  render() {
    return (
      <div className="register-navbar">
        <ul className="navbar">
          <li className="active"><Link to="/register/verfuegbarkeit">Verfügbarkeit</Link></li>
          <li><Link to="/register/ihr-tarif">Ihr Tarif</Link></li>
          <li><Link to="/register/vertragsdaten">Vertragsdaten</Link></li>
          <li><Link to="/register/uebersicht">uebersicht</Link></li>
        </ul>
      </div>
    );
  }
}