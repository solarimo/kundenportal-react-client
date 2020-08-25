import React from 'react';
import './Navbar.css'


export class Navbar extends React.Component {

    private nav = React.createRef<HTMLUListElement>();
    private burger = React.createRef<HTMLDivElement>();

    toggleNav = () => {
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
                        <li><a href="#">Meine Daten</a></li>
                        <li><a href="#">Zählerstände</a></li>
                        <li><a href="#">Mein Vertrag</a></li>
                        <li><a href="#">Dokumente und Rechnungen</a></li>
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