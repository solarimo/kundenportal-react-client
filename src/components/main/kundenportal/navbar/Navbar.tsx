import React from 'react';
import { NavLink } from 'react-router-dom';

import styles from './Navbar.module.css'



export class Navbar extends React.Component {

    private nav = React.createRef<HTMLUListElement>();
    private burger = React.createRef<HTMLDivElement>();

    private toggleNav = () => {
       const nav = this.nav.current!;
       const burger = this.burger.current!;
       nav.classList.toggle(styles.navActive);
       burger.classList.toggle(styles.burgerTransformation);
    }

    render() {  
        console.log(styles);
        
        return (
                <nav>
                    <ul ref={this.nav} className={styles.navLinks}>
                        <li onClick={this.toggleNav}><NavLink activeClassName={styles.navLinkActive} to="/portal/meine-daten">Meine Daten</NavLink></li>
                        <li onClick={this.toggleNav}><NavLink activeClassName={styles.navLinkActive} to="/portal/zaehlerstaende">Zählerstände</NavLink></li>
                        <li onClick={this.toggleNav}><NavLink activeClassName={styles.navLinkActive} to="/portal/mein-vertrag">Mein Vertrag</NavLink></li>
                        <li onClick={this.toggleNav}><NavLink activeClassName={styles.navLinkActive} to="/portal/dokumente-und-rechnungen">Dokumente und Rechnungen</NavLink></li>
                    </ul>
                    <hr className={styles.navLine} />
                    <div ref={this.burger} className={styles.burger} onClick={this.toggleNav}>
                        <div className={styles.line1}></div>
                        <div className={styles.line2}></div>
                        <div className={styles.line3}></div>
                    </div>
                </nav>
        );
    }
}
