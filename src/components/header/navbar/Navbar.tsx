import React from 'react';
import { Link } from 'react-router-dom';

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
                        <li onClick={this.toggleNav}><Link to="/meine-daten">Meine Daten</Link></li>
                        <li onClick={this.toggleNav}><Link to="/zaehlerstaende">Zählerstände</Link></li>
                        <li onClick={this.toggleNav}><Link to="/mein-vertrag">Mein Vertrag</Link></li>
                        <li onClick={this.toggleNav}><Link to="/dokumente-und-rechnungen">Dokumente und Rechnungen</Link></li>
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
