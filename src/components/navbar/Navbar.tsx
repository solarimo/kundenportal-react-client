import React, { RefObject } from 'react';
import './Navbar.css'


export class Navbar extends React.Component {

    private nav = React.createRef<HTMLUListElement>();

    toggleNav = () => {
       const nav = this.nav.current!;
       nav.classList.toggle('nav-active');
    }

    render() {
        return (
            <div className="navbar">
                <nav>
                    <ul ref={this.nav} className="nav-links">
                        <li><a>Meine Daten</a></li>
                        <li><a>Zählerstande</a></li>
                        <li><a>Mein Vertrag</a></li>
                        <li><a>Dokumente und Rechnungen</a></li>
                    </ul>
                    <hr />
                    <div className="burger" onClick={() => this.toggleNav()}>
                        <div></div>
                        <div></div>
                        <div></div>
                    </div>
                </nav>
            </div>
        );
    }
}