import React from 'react';
import { Link, NavLink } from 'react-router-dom';

import './Navbar.css'



export class Navbar extends React.Component {

    private nav = React.createRef<HTMLUListElement>();
    private burger = React.createRef<HTMLDivElement>();

    private toggleNav = () => {
       const nav = this.nav.current!;
       const burger = this.burger.current!;
       nav.classList.toggle('nav-active');
       burger.classList.toggle('burger-transformation');
    }

    render() {
        return (
            <div className="navbar">
                <nav>
                    <ul ref={this.nav} className="nav-links">
                        <li onClick={this.toggleNav}><NavLink activeClassName="nav-link-active" to="/portal/meine-daten">Meine Daten</NavLink></li>
                        <li onClick={this.toggleNav}><NavLink activeClassName="nav-link-active" to="/portal/zaehlerstaende">Zählerstände</NavLink></li>
                        <li onClick={this.toggleNav}><NavLink activeClassName="nav-link-active" to="/portal/mein-vertrag">Mein Vertrag</NavLink></li>
                        <li onClick={this.toggleNav}><NavLink activeClassName="nav-link-active" to="/portal/dokumente-und-rechnungen">Dokumente und Rechnungen</NavLink></li>
                    </ul>
                    <hr />
                    <div ref={this.burger} className="burger" onClick={this.toggleNav}>
                        <div className="line1"></div>
                        <div className="line2"></div>
                        <div className="line3"></div>
                    </div>
                </nav>
            </div>
        );
    }
}
